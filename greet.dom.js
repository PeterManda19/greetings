// Select elements using document.querySelector
const inputElement = document.querySelector('input[type="text"]');
const buttonElement = document.querySelector('button');
const divElement = document.querySelector('div');
const languageRadios = document.querySelectorAll('input[type="radio"]');

// Get the selected language
const selectedLanguage = document.querySelector('input[name="language"]:checked').value;

// Append the greeting element below the greet button
// buttonElement.insertAdjacentElement('afterend', greetingElement);

// Event listener for button click
buttonElement.addEventListener('click', function() {
  // Get the value from the text box
  const inputValue = inputElement.value;

  // Clear the value in the text box
  inputElement.value = "";

  
  let selectedLanguage;
  for (const radio of languageRadios) {
    if (radio.checked) {
      selectedLanguage = radio.value;
      break;
    }
  }

  // Create the greeting based on the selected language
  let greeting;
  if (selectedLanguage === 'zulu') {
    greeting = 'Sawubona, ' + inputValue;
  } else if (selectedLanguage === 'xhosa') {
    greeting = 'Molo, ' + inputValue + '!';
  } else if (selectedLanguage === 'sepedi') {
    greeting = 'Dumela, ' + inputValue + '!';
  } else {
    greeting = 'Hello, ' + inputValue;
  }

  // Set the text in the div using innerHTML
  divElement.innerHTML = greeting;
//   greetingElement.textContent = greeting;
});