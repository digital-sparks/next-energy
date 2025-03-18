import AirDatepicker from 'air-datepicker';

window.Webflow ||= [];
window.Webflow.push(() => {
  // AIR DATAPICKER
  const localeNl = {
    days: ['zondag', 'maandag', 'dinsdag', 'woensdag', 'donderdag', 'vrijdag', 'zaterdag'],
    daysShort: ['zo', 'ma', 'di', 'wo', 'do', 'vr', 'za'],
    daysMin: ['zo', 'ma', 'di', 'wo', 'do', 'vr', 'za'],
    months: [
      'Januari',
      'Februari',
      'Maart',
      'April',
      'Mei',
      'Juni',
      'Juli',
      'Augustus',
      'September',
      'Oktober',
      'November',
      'December',
    ],
    monthsShort: [
      'Jan',
      'Feb',
      'Mrt',
      'Apr',
      'Mei',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Okt',
      'Nov',
      'Dec',
    ],
    today: 'Vandaag',
    clear: 'Legen',
    dateFormat: 'dd-MM-yyyy',
    timeFormat: 'HH:mm',
    firstDay: 1,
  };

  // Helper function to validate age
  function validateAge(inputElement, date, datepicker) {
    // Check if user is at least 18 years old
    const today = new Date();
    const birthDate = new Date(date);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();

    // Adjust age if birthday hasn't occurred yet this year
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }

    // Show error if under 18
    if (age < 18) {
      inputElement.classList.add('is-error');
      // Optionally, you might want to clear the datepicker selection if invalid
      //   datepicker.clear();
    } else {
      // User is 18 or older, update datepicker if called from manual input
      inputElement.classList.remove('is-error');

      // Only update datepicker if this validation wasn't triggered by the datepicker itself
      if (event && event.type === 'input') {
        datepicker.setViewDate(date);
        datepicker.selectDate(date);
      }
    }

    return age >= 18;
  }

  const createDatepicker = (selector, options = {}) => {
    const field = document.querySelector(selector);
    const isBirthdayField = selector === '#Birthday';

    // Add input event listener for validation
    field.addEventListener('input', validateDateInput);

    // Initialize the datepicker with appropriate options
    const datepickerOptions = {
      ...options,
      locale: localeNl,
      dateFormat: 'dd-MM-yyyy',
      onShow: () => field.classList.add('is-active'),
      onHide: () => field.classList.remove('is-active'),
    };

    // Add specific onSelect handlers based on field type
    if (isBirthdayField) {
      datepickerOptions.onSelect = ({ date }) => {
        // Check age validation when date is selected via the datepicker
        if (date) {
          validateAge(field, date, dp);
        }
      };
    } else if (selector === '#startdatum') {
      datepickerOptions.onSelect = ({ date }) => {
        // Validate date range for startdatum when selected via datepicker
        if (date) {
          const today = new Date();

          // Calculate min date (20 days from now)
          const minDate = new Date();
          minDate.setDate(today.getDate() + 20);

          // Calculate max date (6 months from now)
          const maxDate = new Date();
          maxDate.setDate(1); // First day of current month
          maxDate.setMonth(today.getMonth() + 6);

          if (date < minDate || date > maxDate) {
            field.classList.add('is-error');
          } else {
            field.classList.remove('is-error');
          }
        }
      };
    }

    let dp = new AirDatepicker(field, datepickerOptions);

    // Validation function for the date input
    function validateDateInput(event) {
      const input = event.target;
      let value = input.value;
      const previousValue = input.dataset.previousValue || '';

      // Store cursor position
      const cursorPosition = input.selectionStart;
      let newCursorPosition = cursorPosition;

      // Remove error class initially
      input.classList.remove('is-error');

      // If empty, no validation needed
      if (!value) {
        input.dataset.previousValue = value;
        return;
      }

      // Handle special case for 3 consecutive digits at the start (day overflow)
      if (/^\d{3,}$/.test(value)) {
        const dayPart = value.substring(0, 2);
        let day = parseInt(dayPart);

        // Ensure day is valid
        if (day < 1) day = 1;
        if (day > 31) day = 31;

        // Format the new value with hyphen and move the excess digit to month
        input.value = day.toString().padStart(2, '0') + '-' + value.substring(2, 3);
        input.selectionStart = input.selectionEnd = 4; // Position cursor after hyphen
        input.dataset.previousValue = input.value;
        return;
      }

      // Special case: When we already have "DD-MM" and user adds a new digit
      if (/^\d{1,2}-\d{2}\d$/.test(value)) {
        const parts = value.split('-');
        const day = parts[0];
        const monthWithExtra = parts[1];

        // Take the first 2 digits as month, and the rest as start of year
        const month = monthWithExtra.substring(0, 2);
        const extraDigit = monthWithExtra.substring(2);

        let monthNum = parseInt(month);
        if (monthNum < 1) monthNum = 1;
        if (monthNum > 12) monthNum = 12;

        // Format with the second hyphen and move extra digit to year
        input.value = day + '-' + monthNum.toString().padStart(2, '0') + '-' + extraDigit;
        input.selectionStart = input.selectionEnd = day.length + 1 + month.length + 1 + 1; // After second hyphen
        input.dataset.previousValue = input.value;
        return;
      }

      // Check format with regex for partial and complete inputs
      const partialDateRegex = /^(\d{0,2})(-?)(\d{0,2})(-?)(\d{0,4})$/;
      const match = value.match(partialDateRegex);

      if (!match) {
        // Invalid format, revert to previous value
        input.value = previousValue;
        input.selectionStart = input.selectionEnd = Math.min(
          cursorPosition - 1,
          previousValue.length
        );
        return;
      }

      let [, day, dash1, month, dash2, year] = match;
      let isValueModified = false;

      // Process day
      if (day.length === 1 && parseInt(day) > 3) {
        // Pad single digit if valid (only allow 0-3 as first digit)
        day = '0' + day;
        isValueModified = true;
      } else if (day.length === 2) {
        const dayNum = parseInt(day);
        if (dayNum < 1) {
          day = '01';
          isValueModified = true;
        } else if (dayNum > 31) {
          day = '31';
          isValueModified = true;
        }
      }

      // Process month
      if (dash1 && month.length === 1 && parseInt(month) > 1) {
        // Pad single digit if valid (only allow 0-1 as first digit)
        month = '0' + month;
        isValueModified = true;
      } else if (dash1 && month.length === 2) {
        const monthNum = parseInt(month);
        if (monthNum < 1) {
          month = '01';
          isValueModified = true;
        } else if (monthNum > 12) {
          month = '12';
          isValueModified = true;
        }
      }

      // Process year
      if (dash1 && dash2 && year.length > 0) {
        // Process year once we have at least one digit
        const yearNum = parseInt(year);

        // Once we have a 4-digit year, validate the range
        if (year.length === 4) {
          if (yearNum < 1900) {
            year = '1900';
            isValueModified = true;
          } else if (yearNum > 2100) {
            year = '2100';
            isValueModified = true;
          }
        }
      }

      // Build the new value
      if (isValueModified) {
        const newValue = day + dash1 + month + dash2 + year;
        input.value = newValue;

        // Adjust cursor position
        if (newValue.length > previousValue.length) {
          // Value increased in length, adjust cursor
          newCursorPosition += newValue.length - previousValue.length;
        }

        input.selectionStart = input.selectionEnd = newCursorPosition;
      }

      // Store the value for next comparison
      input.dataset.previousValue = input.value;

      // Final validation for complete dates (day-month-year)
      const completeDateRegex = /^(\d{1,2})-(\d{1,2})-(\d{4})$/;
      const completeMatch = input.value.match(completeDateRegex);

      if (completeMatch) {
        const [, dayStr, monthStr, yearStr] = completeMatch;
        const day = parseInt(dayStr, 10);
        const month = parseInt(monthStr, 10);
        const year = parseInt(yearStr, 10);

        // Check for specific month validation (e.g., Feb 29 in non-leap years)
        const daysInMonth = new Date(year, month, 0).getDate();
        if (day > daysInMonth) {
          input.classList.add('is-error');
        } else {
          // Date is valid, create the date object
          const date = new Date(year, month - 1, day); // Month is 0-indexed in JavaScript

          // Different validation based on field type
          if (isBirthdayField) {
            // Age validation for Birthday field
            validateAge(input, date, dp);
          } else if (selector === '#startdatum') {
            // Date range validation for startdatum field
            const today = new Date();

            // Calculate min date (20 days from now)
            const minDate = new Date();
            minDate.setDate(today.getDate() + 20);

            // Calculate max date (6 months from now)
            const maxDate = new Date();
            maxDate.setDate(1); // First day of current month
            maxDate.setMonth(today.getMonth() + 6);

            if (date < minDate) {
              // Date is too early
              input.classList.add('is-error');
            } else if (date > maxDate) {
              // Date is too far in the future
              input.classList.add('is-error');
            } else {
              // Date is within valid range
              input.classList.remove('is-error');
              dp.setViewDate(date);
              dp.selectDate(date);
            }
          } else {
            // For any other date fields, just update the datepicker
            dp.setViewDate(date);
            dp.selectDate(date);
          }
        }
      }
    }

    return dp;
  };

  // Create datepickers with specific options
  createDatepicker('#Birthday', {
    maxDate: new Date(),
  });

  createDatepicker('#startdatum', {
    minDate: new Date(new Date().setDate(new Date().getDate() + 20)),
    maxDate: new Date(new Date(new Date().setDate(1)).setMonth(new Date().getMonth() + 6)),
  });
});
