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

  const createDatepicker = (selector, options = {}) => {
    const field = document.querySelector(selector);
    const isBirthdayField = selector === '#Birthday';
    const isStartDatumField = selector === '#startdatum';

    // Define error message IDs for each error type
    const ERROR_IDS = {
      INVALID_DATE: '#error-invalid-date', // Invalid date (e.g., Feb 31)
      UNDERAGE: '#error-underage', // Age below 18
      START_TOO_EARLY: '#error-start-too-early', // Start date less than 20 days
      START_TOO_LATE: '#error-start-too-late', // Start date more than 6 months
    };

    // Calculate date constraints once (for birthday and startdatum validations)
    const today = new Date();
    const minStartDate = new Date();
    minStartDate.setDate(today.getDate() + 19);

    const maxStartDate = new Date();
    maxStartDate.setDate(1);
    maxStartDate.setMonth(today.getMonth() + 6);

    // Helper function to validate date ranges and return error type if invalid
    const validateDateRange = (date) => {
      if (isBirthdayField) {
        // Check age for birthday field
        let age = today.getFullYear() - date.getFullYear();
        const monthDiff = today.getMonth() - date.getMonth();

        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < date.getDate())) {
          age--;
        }

        return age >= 18 ? { valid: true } : { valid: false, errorId: ERROR_IDS.UNDERAGE };
      } else if (isStartDatumField) {
        // Check range for startdatum field
        if (date < minStartDate) {
          return { valid: false, errorId: ERROR_IDS.START_TOO_EARLY };
        } else if (date > maxStartDate) {
          return { valid: false, errorId: ERROR_IDS.START_TOO_LATE };
        }
        return { valid: true };
      }

      return { valid: true }; // No validation for other fields
    };

    // Function to apply error state and toggle error messages
    const applyErrorState = (input, errorId) => {
      // First hide all error messages
      document
        .querySelectorAll(`.error-message[data-field="${selector.substring(1)}"]`)
        .forEach((el) => {
          el.style.display = 'none';
        });

      // Remove the general error class
      input.classList.remove('is-error');

      // Then, if we have an error, add the appropriate class and show the error message
      if (errorId) {
        // Add general error class
        input.classList.add('is-error');

        // Find and show the specific error message
        const errorMessage = document.querySelector(`#${errorId}`);
        if (errorMessage) {
          errorMessage.style.display = 'block';
        }
      }
    };

    // Initialize the datepicker with appropriate options
    const datepickerOptions = {
      ...options,
      locale: localeNl,
      dateFormat: 'dd-MM-yyyy',
      onShow: () => field.classList.add('is-active'),
      onHide: () => field.classList.remove('is-active'),
      onSelect: ({ date }) => {
        if (!date) return;

        // Validate date when selected through datepicker UI
        const validation = validateDateRange(date);
        applyErrorState(field, validation.valid ? null : validation.errorId);
      },
    };

    let dp = new AirDatepicker(field, datepickerOptions);

    // Input validation function
    field.addEventListener('input', (event) => {
      const input = event.target;
      let value = input.value;
      const previousValue = input.dataset.previousValue || '';

      // Store cursor position
      const cursorPosition = input.selectionStart;
      let newCursorPosition = cursorPosition;

      // Remove all error states initially
      applyErrorState(input, null);

      // Early returns
      if (!value) {
        input.dataset.previousValue = '';
        return;
      }

      // Handle special formatting cases
      if (handleSpecialCases(input, value)) {
        return;
      }

      // Parse and validate the input format
      const parts = parseAndValidateInput(input, value, previousValue, cursorPosition);
      if (!parts) return;

      let { day, dash1, month, dash2, year, isValueModified } = parts;

      // Build the new value if modified
      if (isValueModified) {
        const newValue = day + dash1 + month + dash2 + year;
        input.value = newValue;

        // Adjust cursor position
        if (newValue.length > previousValue.length) {
          newCursorPosition += newValue.length - previousValue.length;
        }

        input.selectionStart = input.selectionEnd = newCursorPosition;
      }

      // Store the value for next comparison
      input.dataset.previousValue = input.value;

      // Final validation for complete dates
      validateCompleteDate(input, dp);
    });

    // Function to handle special formatting cases
    function handleSpecialCases(input, value) {
      // Case 1: 3+ consecutive digits at start (day overflow)
      if (/^\d{3,}$/.test(value)) {
        const day = Math.max(1, Math.min(31, parseInt(value.substring(0, 2))));

        input.value = day.toString().padStart(2, '0') + '-' + value.substring(2, 3);
        input.selectionStart = input.selectionEnd = 4;
        input.dataset.previousValue = input.value;
        return true;
      }

      // Case 2: DD-MM format with additional digit
      if (/^\d{1,2}-\d{2}\d$/.test(value)) {
        const parts = value.split('-');
        const day = parts[0];
        const monthWithExtra = parts[1];

        const month = monthWithExtra.substring(0, 2);
        const extraDigit = monthWithExtra.substring(2);

        const validMonth = Math.max(1, Math.min(12, parseInt(month)));

        input.value = day + '-' + validMonth.toString().padStart(2, '0') + '-' + extraDigit;
        input.selectionStart = input.selectionEnd = day.length + 1 + month.length + 1 + 1;
        input.dataset.previousValue = input.value;
        return true;
      }

      return false;
    }

    // Function to parse and validate input format
    function parseAndValidateInput(input, value, previousValue, cursorPosition) {
      const partialDateRegex = /^(\d{0,2})(-?)(\d{0,2})(-?)(\d{0,4})$/;
      const match = value.match(partialDateRegex);

      if (!match) {
        input.value = previousValue;
        input.selectionStart = input.selectionEnd = Math.min(
          cursorPosition - 1,
          previousValue.length
        );
        return null;
      }

      let [, day, dash1, month, dash2, year] = match;
      let isValueModified = false;

      // Process day
      if (day.length === 1 && parseInt(day) > 3) {
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
      if (dash1 && dash2 && year.length === 4) {
        const yearNum = parseInt(year);
        if (yearNum < 1900) {
          year = '1900';
          isValueModified = true;
        } else if (yearNum > 2100) {
          year = '2100';
          isValueModified = true;
        }
      }

      return { day, dash1, month, dash2, year, isValueModified };
    }

    // Function to validate complete date
    function validateCompleteDate(input, datepicker) {
      const completeDateRegex = /^(\d{1,2})-(\d{1,2})-(\d{4})$/;
      const completeMatch = input.value.match(completeDateRegex);

      if (!completeMatch) return;

      const [, dayStr, monthStr, yearStr] = completeMatch;
      const day = parseInt(dayStr, 10);
      const month = parseInt(monthStr, 10);
      const year = parseInt(yearStr, 10);

      // Check for valid day in month
      const daysInMonth = new Date(year, month, 0).getDate();
      if (day > daysInMonth) {
        applyErrorState(input, ERROR_IDS.INVALID_DATE);
        return;
      }

      // Date is valid, create the date object
      const date = new Date(year, month - 1, day);

      // Check date range validation
      const validation = validateDateRange(date);

      if (validation.valid) {
        applyErrorState(input, null);
        datepicker.setViewDate(date);
        datepicker.selectDate(date);
      } else {
        applyErrorState(input, validation.errorId);
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
