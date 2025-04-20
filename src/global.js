document.addEventListener('DOMContentLoaded', function () {
  let debounceTimer;

  // Function to enforce integer input between 1 and 10
  function enforceOneToTen(inputElement, wizedKey) {
    function updateValue() {
      let value = inputElement.value.replace(/\D/g, ''); // Remove non-numeric characters
      let numValue = parseInt(value, 10);

      // Ensure the value is between 1 and 10
      if (isNaN(numValue) || numValue < 1) {
        numValue = 1;
      } else if (numValue > 10) {
        numValue = 10;
      }

      inputElement.value = numValue;

      // Update Wized data
      Wized.data.i[wizedKey] = numValue;
    }

    inputElement.addEventListener('input', updateValue);

    inputElement.addEventListener('paste', function (event) {
      event.preventDefault();
      let pastedData = (event.clipboardData || window.clipboardData).getData('text').trim();
      let filteredData = pastedData.replace(/\D/g, ''); // Remove non-numeric characters
      let numValue = parseInt(filteredData, 10);

      if (!isNaN(numValue)) {
        if (numValue < 1) numValue = 1;
        if (numValue > 10) numValue = 10;
        inputElement.value = numValue;
        Wized.data.i[wizedKey] = numValue;
      }
    });
  }

  // Apply integer restriction for values between 1 and 10
  const householdSizeInput = document.querySelector('[wized=householdSize]');
  if (householdSizeInput) enforceOneToTen(householdSizeInput, 'householdSize');

  const phoneInput = document.querySelector('[wized=phoneNumber]');
  if (phoneInput) {
    function formatPhoneNumber(value) {
      // Allow digits, plus sign, spaces, and hyphens for formatting
      return value.replace(/[^\d\+\s\-()]/g, '');
    }

    function updatePhoneNumber() {
      let value = phoneInput.value;

      // Format the phone number (keep digits, +, spaces, hyphens, parentheses)
      const formattedValue = formatPhoneNumber(value);

      // Prevent cursor jump
      let selectionStart = phoneInput.selectionStart;
      phoneInput.value = formattedValue;
      phoneInput.setSelectionRange(selectionStart, selectionStart);

      // Update Wized data
      Wized.data.i.phoneNumber = formattedValue;
    }

    phoneInput.addEventListener('input', updatePhoneNumber);

    phoneInput.addEventListener('paste', function (event) {
      event.preventDefault();
      let pastedData = (event.clipboardData || window.clipboardData).getData('text').trim();

      // Format the pasted content
      const formattedData = formatPhoneNumber(pastedData);

      phoneInput.value = formattedData;
      Wized.data.i.phoneNumber = formattedData;
    });
  }

  const postalCodeInput = document.querySelector('[wized=postalCode]');

  if (postalCodeInput) {
    function updatePostalCode() {
      let value = postalCodeInput.value.toUpperCase();
      let formattedValue = '';

      // Extract valid characters
      let numbers = value.match(/\d/g) || []; // Get all numbers
      let letters = value.match(/[A-Z]/g) || []; // Get all letters

      // Ensure first 4 characters are numbers
      formattedValue += numbers.slice(0, 4).join('');

      // Ensure last 2 characters are letters
      if (numbers.length >= 4) {
        formattedValue += letters.slice(0, 2).join('');
      }

      // Prevent cursor jumping
      let selectionStart = postalCodeInput.selectionStart;
      postalCodeInput.value = formattedValue;
      postalCodeInput.setSelectionRange(selectionStart, selectionStart);

      // Update Wized data
      Wized.data.i.postalCode = formattedValue;
    }

    postalCodeInput.addEventListener('input', updatePostalCode);

    postalCodeInput.addEventListener('paste', function (event) {
      event.preventDefault();
      let pastedData = (event.clipboardData || window.clipboardData)
        .getData('text')
        .toUpperCase()
        .trim();

      // Validate pasted value
      if (/^\d{4}[A-Z]{2}$/.test(pastedData)) {
        postalCodeInput.value = pastedData;
        Wized.data.i.postalCode = pastedData;
      }
    });
  }

  const houseNumberInput = document.querySelector('[wized=houseNumber]');

  if (houseNumberInput) {
    function updateHouseNumber() {
      let value = houseNumberInput.value;
      let filteredValue = value.replace(/\D/g, ''); // Remove non-numeric characters

      // Allow null but prevent 0
      if (filteredValue === '0') {
        filteredValue = '';
      }

      // Prevent cursor jump
      let selectionStart = houseNumberInput.selectionStart;
      houseNumberInput.value = filteredValue;
      houseNumberInput.setSelectionRange(selectionStart, selectionStart);

      // Update Wized data
      Wized.data.i.houseNumber = filteredValue || null;
    }

    houseNumberInput.addEventListener('input', updateHouseNumber);

    houseNumberInput.addEventListener('keydown', function (event) {
      if (event.key === 'Backspace' && houseNumberInput.value.length === 1) {
        houseNumberInput.value = ''; // Reset field on backspace if only one character left
        Wized.data.i.houseNumber = null; // Update Wized data
      }
    });

    houseNumberInput.addEventListener('paste', function (event) {
      event.preventDefault();
      let pastedData = (event.clipboardData || window.clipboardData).getData('text').trim();
      let filteredData = pastedData.replace(/\D/g, ''); // Remove non-numeric characters

      if (filteredData === '0') {
        houseNumberInput.value = ''; // Prevent 0
        Wized.data.i.houseNumber = null;
      } else {
        houseNumberInput.value = filteredData || null; // Allow null
        Wized.data.i.houseNumber = filteredData || null;
      }
    });
  }
  // Function to enforce integer-only input
  function enforceIntegerInput(inputElement, wizedKey) {
    function updateValue() {
      let value = inputElement.value;
      let filteredValue = value.replace(/\D/g, ''); // Remove non-numeric characters

      // Prevent cursor jump
      let selectionStart = inputElement.selectionStart;
      inputElement.value = filteredValue;
      inputElement.setSelectionRange(selectionStart, selectionStart);

      // Update Wized data
      Wized.data.i[wizedKey] = filteredValue;
    }

    inputElement.addEventListener('input', updateValue);

    inputElement.addEventListener('paste', function (event) {
      event.preventDefault();
      let pastedData = (event.clipboardData || window.clipboardData).getData('text').trim();
      let filteredData = pastedData.replace(/\D/g, ''); // Remove non-numeric characters

      if (filteredData) {
        inputElement.value = filteredData;
        Wized.data.i[wizedKey] = filteredData;
      }
    });
  }

  // Apply integer restriction to the new number fields
  const electricityYearlyDelivery = document.querySelector(
    '[wized=electricityYearlyDeliveryVolume]'
  );
  const electricityYearlyReturn = document.querySelector('[wized=electricityYearlyReturnVolume]');
  const gasYearlyDelivery = document.querySelector('[wized=gasYearlyDeliveryVolume]');

  if (electricityYearlyDelivery)
    enforceIntegerInput(electricityYearlyDelivery, 'electricityYearlyDeliveryVolume');
  if (electricityYearlyReturn)
    enforceIntegerInput(electricityYearlyReturn, 'electricityYearlyReturnVolume');
  if (gasYearlyDelivery) enforceIntegerInput(gasYearlyDelivery, 'gasYearlyDeliveryVolume');
});
