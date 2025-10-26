(() => {
  // bin/live-reload.js
  new EventSource(`${"http://localhost:3000"}/esbuild`).addEventListener("change", () => location.reload());

  // src/step3.js
  async function updateHouseNumberSuffix() {
    if (v.invoiceAddressDataParsed) {
      const result = await Wized.requests.execute("addressSuggestions");
      if (result) {
        Wized.data.r.addressInfo.hasRequested = true;
        Wized.data.r.addressInfo.ok = true;
        Wized.data.v.addressData = result.data[0];
        if (Wized.data.v.invoiceAddressDataParsed.HouseNumberSuffix) {
          document.querySelector('[wized="houseNumberSuffix"]').value = Wized.data.v.invoiceAddressDataParsed.HouseNumberSuffix;
          Wized.data.v.addressSuggestionIndex = 1;
          Wized.data.i.houseNumberSuffix = Wized.data.v.invoiceAddressDataParsed.HouseNumberSuffix;
        }
        Wized.requests.execute("addressInfo");
      }
      Wized.data.v.invoiceDataAdded = true;
    }
  }
  window.Webflow ||= [];
  window.Webflow.push(() => {
    if (Wized.data.v.userDataParsed.switchSupplier === false) {
      document.querySelector('[wized="movingToAddress"]').click();
    }
    if (Wized.data.v.userDataParsed.autoDebitConsent) {
      const checkbox = document.querySelector(`[wized="auto_debit_consent"]`);
      checkbox.click();
    }
    if (Wized.data.v.userDataParsed.billingSameAsAddress === false) {
      const checkbox = document.querySelector(`[wized="billingSameAsAddress"]`);
      checkbox.click();
      updateHouseNumberSuffix();
    }
    const today = /* @__PURE__ */ new Date();
    const minStartDate = /* @__PURE__ */ new Date();
    const minAgeDate = /* @__PURE__ */ new Date();
    let hadCompleteDate = false;
    minAgeDate.setFullYear(today.getFullYear() - 118);
    minStartDate.setDate(today.getDate() + 20);
    const maxStartDate = /* @__PURE__ */ new Date();
    maxStartDate.setMonth(today.getMonth() + 6);
    function updateFieldData(wizedKey, dateValue) {
      let userData = JSON.parse(Wized.data.n.parameter.userData);
      hadCompleteDate = true;
      if (wizedKey === "startDate" && Wized.data.v.offerDataParsed.Duration && parseInt(Wized.data.v.offerDataParsed.Duration) > 0) {
        if (dateValue) {
          const date = new Date(dateValue);
          userData.endDate = formatDate(
            new Date(date.setMonth(date.getMonth() + parseInt(Wized.data.v.offerDataParsed.Duration)))
          );
        } else {
          userData.endDate = "";
        }
      }
      if (wizedKey === "birthDate" || wizedKey === "startDate") {
        let updateInformationTouched = function(field) {
          const newObject = { ...Wized.data.v.informationTouched, [field]: true };
          Wized.data.v.informationTouched = newObject;
        };
        userData[wizedKey] = typeof dateValue === "string" ? dateValue : formatDate(dateValue);
        Wized.data.n.parameter.userData = JSON.stringify(userData);
        updateInformationTouched(wizedKey);
      }
    }
    function markFieldAsTouched(wizedKey) {
      if (wizedKey === "birthDate" || wizedKey === "startDate") {
        let updateInformationTouched = function(field) {
          const newObject = { ...Wized.data.v.informationTouched, [field]: true };
          Wized.data.v.informationTouched = newObject;
        };
        updateInformationTouched(wizedKey);
      }
    }
    function setupDateInput(inputElement, datePicker, wizedKey) {
      let lastValidValue = "";
      function isValidDate(day, month, year) {
        if (day < 1 || day > 31 || month < 1 || month > 12)
          return false;
        const daysInMonth = new Date(year, month, 0).getDate();
        return day <= daysInMonth;
      }
      function isDateInRange(date) {
        const normalizedDate = new Date(date.getFullYear(), date.getMonth(), date.getDate());
        if (datePicker.minDate) {
          const normalizedMinDate = new Date(
            datePicker.minDate.getFullYear(),
            datePicker.minDate.getMonth(),
            datePicker.minDate.getDate()
          );
          if (normalizedDate < normalizedMinDate) {
            return false;
          }
        }
        if (datePicker.maxDate) {
          const normalizedMaxDate = new Date(
            datePicker.maxDate.getFullYear(),
            datePicker.maxDate.getMonth(),
            datePicker.maxDate.getDate()
          );
          if (normalizedDate > normalizedMaxDate) {
            return false;
          }
        }
        return true;
      }
      function parseDate(dateString) {
        const parts = dateString.split("-");
        if (parts.length !== 3)
          return null;
        const day = parseInt(parts[0], 10);
        const month = parseInt(parts[1], 10);
        const year = parseInt(parts[2], 10);
        if (isValidDate(day, month, year)) {
          return new Date(year, month - 1, day);
        }
        return null;
      }
      function parseDateString(input) {
        const cleaned = input.replace(/[^\d\/\-\.]/g, "");
        const formats = [
          {
            regex: /^(\d{1,2})[\/\-\.](\d{1,2})[\/\-\.](\d{4})$/,
            dayIdx: 1,
            monthIdx: 2,
            yearIdx: 3
          },
          {
            regex: /^(\d{1,2})[\/\-\.](\d{1,2})[\/\-\.](\d{4})$/,
            dayIdx: 2,
            monthIdx: 1,
            yearIdx: 3
          },
          {
            regex: /^(\d{4})[\/\-\.](\d{1,2})[\/\-\.](\d{1,2})$/,
            dayIdx: 3,
            monthIdx: 2,
            yearIdx: 1
          }
        ];
        for (const format of formats) {
          const match = cleaned.match(format.regex);
          if (match) {
            const day = parseInt(match[format.dayIdx], 10);
            const month = parseInt(match[format.monthIdx], 10);
            const year = parseInt(match[format.yearIdx], 10);
            if (isValidDate(day, month, year)) {
              return {
                day: String(day).padStart(2, "0"),
                month: String(month).padStart(2, "0"),
                year
              };
            }
          }
        }
        return null;
      }
      function validatePartialDate(value) {
        if (!value) {
          if (hadCompleteDate) {
            datePicker.clear(true);
            hadCompleteDate = false;
          }
          return true;
        }
        const parts = value.split("-");
        const isCompleteFormat = value.length === 10 && parts.length === 3 && parts[0].length === 2 && parts[1].length === 2 && parts[2].length === 4;
        if (parts.length >= 1 && parts[0]) {
          if (parts[0].length === 1) {
            if (!/^[0-3]$/.test(parts[0])) {
              return false;
            }
          } else if (parts[0].length === 2) {
            const day = parseInt(parts[0], 10);
            if (day < 1 || day > 31) {
              return false;
            }
          } else if (parts[0].length > 2) {
            return false;
          }
        }
        if (parts.length >= 2 && parts[1]) {
          if (parts[1].length === 1) {
            if (!/^[0-1]$/.test(parts[1])) {
              return false;
            }
          } else if (parts[1].length === 2) {
            const month = parseInt(parts[1], 10);
            if (month < 1 || month > 12) {
              return false;
            }
            if (parts[0].length === 2) {
              const day = parseInt(parts[0], 10);
              const testYear = 2020;
              if (!isValidDate(day, month, testYear)) {
                return false;
              }
            }
          } else if (parts[1].length > 2) {
            return false;
          }
        }
        if (parts.length === 3 && parts[2]) {
          if (!/^\d*$/.test(parts[2])) {
            return false;
          }
          if (parts[2].length > 4) {
            return false;
          }
          if (isCompleteFormat) {
            const day = parseInt(parts[0], 10);
            const month = parseInt(parts[1], 10);
            const year = parseInt(parts[2], 10);
            if (!isValidDate(day, month, year)) {
              return false;
            }
            const date = new Date(year, month - 1, day);
            if (isDateInRange(date)) {
              datePicker.setViewDate(date);
              datePicker.selectDate(date);
              updateFieldData(wizedKey, date);
            }
          } else if (hadCompleteDate) {
            datePicker.clear(false);
            setTimeout(() => {
              inputElement.value = lastValidValue;
              hadCompleteDate = false;
            }, 1);
          }
        }
        return true;
      }
      function handleKeyDown(e) {
        if ([8, 9, 13, 27, 35, 36, 37, 38, 39, 40, 46].indexOf(e.keyCode) !== -1) {
          return;
        }
        if ((e.ctrlKey || e.metaKey) && [65, 67, 86, 88].indexOf(e.keyCode) !== -1) {
          return;
        }
        const value = e.target.value;
        const cursorPos = e.target.selectionStart;
        const selectionLen = e.target.selectionEnd - e.target.selectionStart;
        const parts = value.split("-");
        if (e.keyCode >= 48 && e.keyCode <= 57 || e.keyCode >= 96 && e.keyCode <= 105) {
          const digit = parseInt(e.key, 10);
          if (parts.length === 3 && parts[2].length === 4 && cursorPos > parts[0].length + parts[1].length + 2) {
            e.preventDefault();
            return;
          }
          if (cursorPos === 0 && digit >= 4) {
            e.preventDefault();
            const newValue2 = "0" + digit;
            e.target.value = newValue2;
            lastValidValue = newValue2;
            setTimeout(() => {
              e.target.selectionStart = e.target.selectionEnd = 2;
            }, 0);
            return;
          }
          if (parts[0] && parts[0].length === 2 && cursorPos === 2 && selectionLen === 0) {
            e.preventDefault();
            const newValue2 = parts[0] + "-" + e.key;
            e.target.value = newValue2;
            lastValidValue = newValue2;
            setTimeout(() => {
              e.target.selectionStart = e.target.selectionEnd = 4;
            }, 0);
            if (digit >= 2) {
              setTimeout(() => {
                const paddedValue = parts[0] + "-0" + e.key;
                e.target.value = paddedValue;
                lastValidValue = paddedValue;
                e.target.selectionStart = e.target.selectionEnd = 5;
              }, 10);
            }
            return;
          }
          if (parts.length >= 2 && cursorPos === parts[0].length + 1 && digit >= 2) {
            e.preventDefault();
            const newValue2 = parts[0] + "-0" + digit;
            e.target.value = newValue2;
            lastValidValue = newValue2;
            setTimeout(() => {
              e.target.selectionStart = e.target.selectionEnd = parts[0].length + 3;
            }, 0);
            return;
          }
          if (parts.length === 2 && parts[1].length === 2 && cursorPos === parts[0].length + 1 + parts[1].length && selectionLen === 0) {
            e.preventDefault();
            const newValue2 = parts[0] + "-" + parts[1] + "-" + e.key;
            e.target.value = newValue2;
            lastValidValue = newValue2;
            setTimeout(() => {
              e.target.selectionStart = e.target.selectionEnd = parts[0].length + parts[1].length + 3;
            }, 0);
            return;
          }
          const newValue = value.substring(0, cursorPos) + e.key + value.substring(cursorPos + selectionLen);
          if (validatePartialDate(newValue)) {
            return;
          } else {
            e.preventDefault();
          }
          return;
        }
        if (e.key === "-" || e.key === "/") {
          if (parts.length >= 1 && parts[0].length === 2 && cursorPos === 2) {
            if (e.key === "/") {
              e.preventDefault();
              const newValue = value.substring(0, cursorPos) + "-" + value.substring(cursorPos + selectionLen);
              e.target.value = newValue;
              lastValidValue = newValue;
              setTimeout(() => {
                e.target.selectionStart = e.target.selectionEnd = cursorPos + 1;
              }, 0);
            }
            return;
          }
          if (parts.length === 2 && parts[1].length === 2 && cursorPos === parts[0].length + 1 + parts[1].length) {
            if (e.key === "/") {
              e.preventDefault();
              const newValue = value.substring(0, cursorPos) + "-" + value.substring(cursorPos + selectionLen);
              e.target.value = newValue;
              lastValidValue = newValue;
              setTimeout(() => {
                e.target.selectionStart = e.target.selectionEnd = cursorPos + 1;
              }, 0);
            }
            return;
          }
          e.preventDefault();
          return;
        }
        e.preventDefault();
      }
      function handleInput(e) {
        const value = e.target.value;
        if (!validatePartialDate(value)) {
          e.target.value = lastValidValue;
          return;
        }
        lastValidValue = value;
      }
      function handlePaste(e) {
        e.preventDefault();
        const clipboardData = e.clipboardData || window.clipboardData;
        const pastedText = clipboardData.getData("text");
        const parsed = parseDateString(pastedText);
        if (parsed) {
          const formatted = `${parsed.day}-${parsed.month}-${parsed.year}`;
          e.target.value = formatted;
          lastValidValue = formatted;
          const date = new Date(
            parsed.year,
            parseInt(parsed.month, 10) - 1,
            parseInt(parsed.day, 10)
          );
          if (isDateInRange(date)) {
            datePicker.selectDate(date);
            datePicker.setViewDate(date);
            updateFieldData(wizedKey, formatted);
          } else if (hadCompleteDate) {
            datePicker.clear(false);
            setTimeout(() => {
              inputElement.value = lastValidValue;
              hadCompleteDate = false;
            }, 1);
          }
        } else {
          const selStart = e.target.selectionStart;
          const selEnd = e.target.selectionEnd;
          const currentValue = e.target.value;
          const newValue = currentValue.substring(0, selStart) + pastedText + currentValue.substring(selEnd);
          if (validatePartialDate(newValue)) {
            e.target.value = newValue;
            lastValidValue = newValue;
            setTimeout(() => {
              const newPos = selStart + pastedText.length;
              e.target.selectionStart = e.target.selectionEnd = Math.min(newPos, newValue.length);
            }, 0);
          }
        }
      }
      function handleBlur(e) {
        if (e.target.value.length > 0) {
          markFieldAsTouched(wizedKey);
        }
        if (datePicker.visible) {
          return;
        }
        const value = e.target.value;
        const parts = value.split("-");
        if (parts.length === 3 && parts[0].length === 2 && parts[1].length === 2 && parts[2].length === 4) {
          const day = parseInt(parts[0], 10);
          const month = parseInt(parts[1], 10);
          const year = parseInt(parts[2], 10);
          if (isValidDate(day, month, year)) {
            const date = new Date(year, month - 1, day);
            if (isDateInRange(date)) {
              datePicker.selectDate(date);
              datePicker.setViewDate(date);
            }
          }
        }
      }
      if (inputElement.value) {
        if (validatePartialDate(inputElement.value)) {
          lastValidValue = inputElement.value;
        } else {
          inputElement.value = "";
        }
      }
      inputElement.addEventListener("input", handleInput);
      inputElement.addEventListener("keydown", handleKeyDown);
      inputElement.addEventListener("paste", handlePaste);
      inputElement.addEventListener("blur", handleBlur);
      return {
        destroy: function() {
          inputElement.removeEventListener("input", handleInput);
          inputElement.removeEventListener("keydown", handleKeyDown);
          inputElement.removeEventListener("paste", handlePaste);
          inputElement.removeEventListener("blur", handleBlur);
        }
      };
    }
    function formatDate(date) {
      if (!date)
        return "";
      const day = String(date.getDate()).padStart(2, "0");
      const month = String(date.getMonth() + 1).padStart(2, "0");
      const year = date.getFullYear();
      return `${day}-${month}-${year}`;
    }
    document.querySelectorAll('[wized="birthDate"], [wized="startDate"]').forEach((field) => {
      if (field._datepicker)
        return;
      const wizedKey = field.getAttribute("wized");
      const isBirthdayField = wizedKey === "birthDate";
      const isStartDateField = wizedKey === "startDate";
      const dp = new AirDatepicker(field, {
        locale: {
          days: ["Zondag", "maandag", "dinsdag", "woensdag", "donderdag", "vrijdag", "zaterdag"],
          daysShort: ["zo", "ma", "di", "wo", "do", "vr", "za"],
          daysMin: ["zo", "ma", "di", "wo", "do", "vr", "za"],
          months: [
            "Januari",
            "Februari",
            "Maart",
            "April",
            "Mei",
            "Juni",
            "Juli",
            "Augustus",
            "September",
            "Oktober",
            "November",
            "December"
          ],
          monthsShort: [
            "Jan",
            "Feb",
            "Mrt",
            "Apr",
            "Mei",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Okt",
            "Nov",
            "Dec"
          ],
          today: "Vandaag",
          clear: "Legen",
          dateFormat: "dd-MM-yyyy",
          timeFormat: "HH:mm",
          firstDay: 1
        },
        dateFormat: "dd-MM-yyyy",
        minDate: isBirthdayField ? minAgeDate : isStartDateField ? minStartDate : void 0,
        maxDate: isBirthdayField ? today : isStartDateField ? maxStartDate : void 0,
        toggleSelected: false,
        onShow: () => field.classList.add("is-active"),
        onHide: () => field.classList.remove("is-active"),
        container: field.parentElement,
        onSelect: ({ date }) => {
          Wized.data.i = Wized.data.i || {};
          Wized.data.i[wizedKey] = formatDate(date);
          updateFieldData(wizedKey, date);
        }
      });
      setupDateInput(field, dp, wizedKey);
    });
  });
})();
//# sourceMappingURL=step3.js.map
