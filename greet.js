// Select elements using document.querySelector
const inputElement = document.querySelector('input[type="text"]');
const buttonElement = document.querySelector('button');
const divElement = document.querySelector('div');

// Event listener for button click
buttonElement.addEventListener('click', function() {
  // Get the value from the text box
  const inputValue = inputElement.value;

  // Clear the value in the text box
  inputElement.value = "";

  // Set the text in the div using innerHTML
  divElement.innerHTML = "You entered: " + inputValue;
});
