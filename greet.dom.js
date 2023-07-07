// Create an instance of the greeting form using the factory function
const greetingForm = createGreetMessage();

// Select elements using document.querySelector
const inputElement = document.querySelector('input[type="text"]');
const buttonElement = document.querySelector('button');
const divElement = document.querySelector('div');
const languageRadios = document.querySelectorAll('input[type="radio"]');

// Deselect all radio buttons initially
for (const radio of languageRadios) {
  radio.checked = false;
}

// Event listener for button click
buttonElement.addEventListener('click', function() {
  // Get the value from the text box
  const inputValue = inputElement.value;

  // Clear the value in the text box
  inputElement.value = "";

  // Get the selected language from the radio buttons
  let selectedLanguage;
  for (const radio of languageRadios) {
    if (radio.checked) {
      selectedLanguage = radio.value;
      break;
    }
  }

  // If no language is selected, use the default language from the factory function
  if (!selectedLanguage) {
    selectedLanguage = "default";
  }

  // Create the greeting using the greet method from the greeting form instance
  const greeting = greetingForm.greet(inputValue, selectedLanguage);

  // Remove any existing greeting elements
  const existingGreetingElements = document.querySelectorAll('.greeting');
  for (const element of existingGreetingElements) {
    element.remove();
  }

  // Create a new paragraph element for the greeting message
  const greetingElement = document.createElement('p');
  greetingElement.classList.add('greeting');
  greetingElement.textContent = greeting;

  // Append the greeting element below the greet button
  divElement.appendChild(greetingElement);

  // Clear the input field for the next name to be entered
  inputElement.value = "";

  // Update the greet count widgets
  const greetCountElements = document.querySelectorAll('.greet-count-widget span');
  for (const element of greetCountElements) {
    const language = element.id.replace('CountText', '');
    const count = greetingForm.getGreetCount(language);
    element.textContent = `${element.textContent.split(':')[0]}: ${count}`;
  }
});
