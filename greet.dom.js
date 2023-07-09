const greetingForm = createGreetMessage();

// Select elements using document.querySelector
const inputElement = document.querySelector('input[type="text"]');
const buttonElement = document.querySelector('button');
const divElement = document.querySelector('div');
const languageRadios = document.querySelectorAll('input[type="radio"]');

// Check if greet count exists in localStorage
const storedGreetCount = localStorage.getItem('greetCount');
if (storedGreetCount) {
  greetingForm.totalGreetCount = parseInt(storedGreetCount);
}

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

  // Set the greeting message as the content of the greeting display element
  const greetingDisplay = document.getElementById('greetingDisplay');
  greetingDisplay.textContent = greeting;

  // Clear the input field for the next name to be entered
  inputElement.value = "";

  // Update the greet count widget
  const greetCountElements = document.querySelectorAll('.greet-count-widget span');
  for (const element of greetCountElements) {
    const language = element.id.replace('CountText', '');
    const count = greetingForm.getGreetCount(language);
    element.textContent = `${element.textContent.split(':')[0]}: ${count}`;
  }

  // Update the total greet count
  const totalGreetCountElement = document.getElementById('totalGreetCountText');
  const totalGreetCount = greetingForm.getTotalGreetCount();
  totalGreetCountElement.textContent = `Total Greetings: ${totalGreetCount}`;

  // Store the greet count in localStorage
  localStorage.setItem('greetCount', greetingForm.totalGreetCount.toString());
});
