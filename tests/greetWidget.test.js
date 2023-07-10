// Test suite for the createGreetMessage factory function
describe('createGreetMessage', function() {
  // Test case for greeting display
  it('should display the greeting correctly', function() {
    // Create an instance of the greet message object
    const greetingForm = createGreetMessage();
    // Call the greet method with a name and language
    const greeting = greetingForm.greet('John', 'zulu');
    // Assert that the greeting matches the expected value
    assert.strictEqual(greeting, 'Sawubona, John!');
    // Clear localStorage after the test
    localStorage.clear();
  });

  // Test case for invalid input handling
  it('should handle invalid input gracefully', function() {
    // Create an instance of the greet message object
    const greetingForm = createGreetMessage();
    // Call the greet method with an empty name and default language
    const greeting = greetingForm.greet('', 'default');
    // Assert that the greeting matches the expected default greeting
    assert.strictEqual(greeting, 'Hello, !');
    // Clear localStorage after the test
    localStorage.clear();
  });

  // Test case for handling invalid language
  it('should generate default greeting for invalid language', function() {
    // Create an instance of the greet message object
    const greetingForm = createGreetMessage();

    // Call the greet method with an invalid language
    const greeting = greetingForm.greet('Bob', 'invalid');
    // Assert that the generated greeting is the default greeting
    assert.strictEqual(greeting, 'Hello, Bob!');
    // Clear localStorage after the test
    localStorage.clear();
  });

  // Test case for button click event
  it('should trigger the button click event', function() {
    // Create an instance of the greet message object
    const greetingForm = createGreetMessage();
    // Simulate pressing the button
    greetingForm.greet('John', 'zulu');
    // Assert that the greet count is updated as expected
    const greetCount = greetingForm.getGreetCount();
    assert.strictEqual(greetCount, 1);
    // Clear localStorage after the test
    localStorage.clear();
  });

  // Test case for multiple greetings
  it('should handle multiple greetings', function() {
    // Create an instance of the greet message object
    const greetingForm = createGreetMessage();
    // Call the greet method with different names and languages
    greetingForm.greet('Alice', 'sepedi');
    greetingForm.greet('Bob', 'xhosa');
    greetingForm.greet('Charlie', 'zulu');
    // Assert that the greet count is updated correctly
    const greetCount = greetingForm.getGreetCount();
    assert.strictEqual(greetCount, 3);
    // Clear localStorage after the test
    localStorage.clear();
  });

  // Test case for resetting the greet count
  it('should reset the greet count to 0', function() {
    // Create an instance of the greet message object
    const greetingForm = createGreetMessage();
    // Call the greet method multiple times
    greetingForm.greet('Alice', 'sepedi');
    greetingForm.greet('Bob', 'xhosa');
    greetingForm.greet('Charlie', 'zulu');
    // Reset the greet count
    greetingForm.resetGreetCount();
    // Assert that the greet count is reset to 0
    const greetCount = greetingForm.getGreetCount();
    assert.strictEqual(greetCount, 0);
    // Clear localStorage after the test
    localStorage.clear();
  });

  // Test case for greeting the same person multiple times
  it('should not increment greet count when greeting the same person again', function() {
    // Create an instance of the greet message object
    const greetingForm = createGreetMessage();
    // Call the greet method multiple times for the same person
    greetingForm.greet('Alice', 'sepedi');
    greetingForm.greet('Alice', 'sepedi');
    greetingForm.greet('Alice', 'sepedi');
    // Assert that the greet count remains the same
    const greetCount = greetingForm.getGreetCount();
    assert.strictEqual(greetCount, 1);
  });

   // Test case for input field clearing
  // it('should clear the input field after pressing the button', function() {
  //   // Create an instance of the greet message object
  //   const greetingForm = createGreetMessage();
  //   // Simulate pressing the button
  //   // greetingForm.greet('John', 'zulu');
  //   const buttonElement = document.querySelector('#greetButton');
  //   buttonElement.click();
  //   // Get the value of the input field
  //   const inputElement = document.querySelector('input[type="text"]');
  //   //const inputValue = inputElement.value;
  //   // Assert that the input field value is an empty string
  //   assert.strictEqual(inputElement, '');
  //   // Clear localStorage after the test
  //   localStorage.clear();
  // });

  // Test case for retrieving greet count for a specific language
  // it('should retrieve the greet count for a specific language', function() {
  //   // Create an instance of the greet message object
  //   const greetingForm = createGreetMessage();

  //   // Call the greet method multiple times with different languages
  //   greetingForm.greet('Alice', 'sepedi');
  //   greetingForm.greet('Bob', 'xhosa');
  //   greetingForm.greet('Charlie', 'zulu');
  //   greetingForm.greet('Dave', 'sepedi');
  //   greetingForm.greet('Eve', 'xhosa');

  //   // Retrieve the greet count for Sepedi language
  //   const sepediGreetCount = greetingForm.getGreetCount('sepedi');

  //   // Assert that the greet count for Sepedi is correct
  //   assert.strictEqual(sepediGreetCount, 2);
    
  //   // Clear localStorage after the test
  //   localStorage.clear();
  // });
});
