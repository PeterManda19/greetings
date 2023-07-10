const greetingForm = createGreetMessage();

// Select elements using document.querySelector
const inputElement = document.querySelector('input[type="text"]');
const buttonElement = document.querySelector('button');
const resetButtonElement = document.getElementById('resetButton');
const divElement = document.querySelector('div');
const languageRadios = document.querySelectorAll('input[type="radio"]');
const greetCountElements = document.querySelectorAll('.greet-count-widget span');
const totalGreetCountElement = document.getElementById('totalGreetCountText');

// Function to update greet count widget and store greet count in localStorage
function updateGreetCount() {
  // Update the greet count widget
  for (const element of greetCountElements) {
    const language = element.id.replace('CountText', '');
    const count = greetingForm.getGreetCount(language);
    element.textContent = `${element.textContent.split(':')[0]}: ${count}`;
  }

  // Update the total greet count
  const totalGreetCount = greetingForm.getGreetCount();
  const formattedGreetCount = totalGreetCount !== null ? totalGreetCount : 0;
  totalGreetCountElement.textContent = `Total Greetings: ${formattedGreetCount}`;

  // Store the greet count in localStorage
  localStorage.setItem('greetCount', formattedGreetCount.toString());
}

// Check if greet count exists in localStorage
updateGreetCount();

// Deselect all radio buttons initially
for (const radio of languageRadios) {
  radio.checked = false;
}

// Event listener for button click
buttonElement.addEventListener('click', function() {
  // Get the value from the text box
  const inputValue = inputElement.value;

  // Check if the name is empty
  if (inputValue.trim() === '') {
    // Display an error message to the user
    alert('Please enter your name!');
    return; // Exit the function
  }

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

  // Update the total greet count widget and store greet count in localStorage
  updateGreetCount();
});

// Event listener for reset button click
resetButtonElement.addEventListener('click', function() {
  greetingForm.resetGreetCount();
  updateGreetCount();
});
