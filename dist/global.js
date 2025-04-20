(() => {
  // bin/live-reload.js
  new EventSource(`${"http://localhost:3000"}/esbuild`).addEventListener("change", () => location.reload());

  // src/global.js
  document.addEventListener("DOMContentLoaded", function() {
    let debounceTimer;
    function enforceOneToTen(inputElement, wizedKey) {
      function updateValue() {
        let value = inputElement.value.replace(/\D/g, "");
        let numValue = parseInt(value, 10);
        if (isNaN(numValue) || numValue < 1) {
          numValue = 1;
        } else if (numValue > 10) {
          numValue = 10;
        }
        inputElement.value = numValue;
        Wized.data.i[wizedKey] = numValue;
      }
      inputElement.addEventListener("input", updateValue);
      inputElement.addEventListener("paste", function(event) {
        event.preventDefault();
        let pastedData = (event.clipboardData || window.clipboardData).getData("text").trim();
        let filteredData = pastedData.replace(/\D/g, "");
        let numValue = parseInt(filteredData, 10);
        if (!isNaN(numValue)) {
          if (numValue < 1)
            numValue = 1;
          if (numValue > 10)
            numValue = 10;
          inputElement.value = numValue;
          Wized.data.i[wizedKey] = numValue;
        }
      });
    }
    const householdSizeInput = document.querySelector("[wized=householdSize]");
    if (householdSizeInput)
      enforceOneToTen(householdSizeInput, "householdSize");
    const phoneInput = document.querySelector("[wized=phoneNumber]");
    if (phoneInput) {
      let formatPhoneNumber = function(value) {
        return value.replace(/[^\d\+\s\-()]/g, "");
      }, updatePhoneNumber = function() {
        let value = phoneInput.value;
        const formattedValue = formatPhoneNumber(value);
        let selectionStart = phoneInput.selectionStart;
        phoneInput.value = formattedValue;
        phoneInput.setSelectionRange(selectionStart, selectionStart);
        Wized.data.i.phoneNumber = formattedValue;
      };
      phoneInput.addEventListener("input", updatePhoneNumber);
      phoneInput.addEventListener("paste", function(event) {
        event.preventDefault();
        let pastedData = (event.clipboardData || window.clipboardData).getData("text").trim();
        const formattedData = formatPhoneNumber(pastedData);
        phoneInput.value = formattedData;
        Wized.data.i.phoneNumber = formattedData;
      });
    }
    const postalCodeInput = document.querySelector("[wized=postalCode]");
    if (postalCodeInput) {
      let updatePostalCode = function() {
        let value = postalCodeInput.value.toUpperCase();
        let formattedValue = "";
        let numbers = value.match(/\d/g) || [];
        let letters = value.match(/[A-Z]/g) || [];
        formattedValue += numbers.slice(0, 4).join("");
        if (numbers.length >= 4) {
          formattedValue += letters.slice(0, 2).join("");
        }
        let selectionStart = postalCodeInput.selectionStart;
        postalCodeInput.value = formattedValue;
        postalCodeInput.setSelectionRange(selectionStart, selectionStart);
        Wized.data.i.postalCode = formattedValue;
      };
      postalCodeInput.addEventListener("input", updatePostalCode);
      postalCodeInput.addEventListener("paste", function(event) {
        event.preventDefault();
        let pastedData = (event.clipboardData || window.clipboardData).getData("text").toUpperCase().trim();
        if (/^\d{4}[A-Z]{2}$/.test(pastedData)) {
          postalCodeInput.value = pastedData;
          Wized.data.i.postalCode = pastedData;
        }
      });
    }
    const houseNumberInput = document.querySelector("[wized=houseNumber]");
    if (houseNumberInput) {
      let updateHouseNumber = function() {
        let value = houseNumberInput.value;
        let filteredValue = value.replace(/\D/g, "");
        if (filteredValue === "0") {
          filteredValue = "";
        }
        let selectionStart = houseNumberInput.selectionStart;
        houseNumberInput.value = filteredValue;
        houseNumberInput.setSelectionRange(selectionStart, selectionStart);
        Wized.data.i.houseNumber = filteredValue || null;
      };
      houseNumberInput.addEventListener("input", updateHouseNumber);
      houseNumberInput.addEventListener("keydown", function(event) {
        if (event.key === "Backspace" && houseNumberInput.value.length === 1) {
          houseNumberInput.value = "";
          Wized.data.i.houseNumber = null;
        }
      });
      houseNumberInput.addEventListener("paste", function(event) {
        event.preventDefault();
        let pastedData = (event.clipboardData || window.clipboardData).getData("text").trim();
        let filteredData = pastedData.replace(/\D/g, "");
        if (filteredData === "0") {
          houseNumberInput.value = "";
          Wized.data.i.houseNumber = null;
        } else {
          houseNumberInput.value = filteredData || null;
          Wized.data.i.houseNumber = filteredData || null;
        }
      });
    }
    function enforceIntegerInput(inputElement, wizedKey) {
      function updateValue() {
        let value = inputElement.value;
        let filteredValue = value.replace(/\D/g, "");
        let selectionStart = inputElement.selectionStart;
        inputElement.value = filteredValue;
        inputElement.setSelectionRange(selectionStart, selectionStart);
        Wized.data.i[wizedKey] = filteredValue;
      }
      inputElement.addEventListener("input", updateValue);
      inputElement.addEventListener("paste", function(event) {
        event.preventDefault();
        let pastedData = (event.clipboardData || window.clipboardData).getData("text").trim();
        let filteredData = pastedData.replace(/\D/g, "");
        if (filteredData) {
          inputElement.value = filteredData;
          Wized.data.i[wizedKey] = filteredData;
        }
      });
    }
    const electricityYearlyDelivery = document.querySelector(
      "[wized=electricityYearlyDeliveryVolume]"
    );
    const electricityYearlyReturn = document.querySelector("[wized=electricityYearlyReturnVolume]");
    const gasYearlyDelivery = document.querySelector("[wized=gasYearlyDeliveryVolume]");
    if (electricityYearlyDelivery)
      enforceIntegerInput(electricityYearlyDelivery, "electricityYearlyDeliveryVolume");
    if (electricityYearlyReturn)
      enforceIntegerInput(electricityYearlyReturn, "electricityYearlyReturnVolume");
    if (gasYearlyDelivery)
      enforceIntegerInput(gasYearlyDelivery, "gasYearlyDeliveryVolume");
  });
})();
//# sourceMappingURL=global.js.map
