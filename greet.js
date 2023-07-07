//Write JavaScript code to capture the user's input from the text box when the button is pressed.
// Define a factory function named createGreetMessage
// This function will create and return an object with greet and getGreetCount methods
// Initialize greetCount to 0

// Define a helper function to generate the appropriate greeting based on language
// Use a switch statement to determine the greeting based on the language
// If language selected is  'zulu'
// Return a Zulu greeting with the provided name
// If language selected is 'xhosa'
// Return a Xhosa greeting with the provided name
// If language selected is 'sepedi'
// Return a Sepedi greeting with the provided name             
// Return a default greeting with the provided name if no language is selected
      
// Define the greet method to generate a greeting and increment greetCount 
// Generate the greeting using the generateGreeting helper function   
// Increment greetCount by 1    
// Return the generated greeting

// Define the getGreetCount method to return the current greetCount
// Return the current value of greetCount

// Return an object with the greet and getGreetCount methods

/**
 * Factory function to create an object with greet and getGreetCount methods.
 * @returns {Object} An object with greet and getGreetCount methods.
 */
function createGreetMessage() {
  // Initialize greetCounts for each language
  let greetCounts = {
    zulu: 0,
    xhosa: 0,
    sepedi: 0
  };

  // Initialize overall greetCount
  let totalGreetCount = 0;

  /**
   * Generates a greeting based on the provided name and language.
   * @param {string} name - The name to include in the greeting.
   * @param {string} language - The language for the greeting.
   * @returns {string} The generated greeting.
   */
  function generateGreeting(name, language) {
    switch (language) {
      case 'zulu':
        return `Sawubona, ${name}!`;
      case 'xhosa':
        return `Molo, ${name}!`;
      case 'sepedi':
        return `Dumela, ${name}!`;
      default:
        return `Hello, ${name}!`;
    }
  }

  /**
   * Generates a greeting, increments greetCount, and returns the greeting.
   * @param {string} name - The name to include in the greeting.
   * @param {string} language - The language for the greeting.
   * @returns {string} The generated greeting.
   */
  function greet(name, language) {
    // Generate the greeting using the generateGreeting function
    const greeting = generateGreeting(name, language);
    
    // Increment the greetCount for the specified language
    greetCounts[language]++;

    // Increment the overall greetCount
    totalGreetCount++;
    
    // Return the generated greeting
    return greeting;
  }

  /**
   * Retrieves the greetCount for the specified language.
   * If no language is provided, returns the total greetCount.
   * @param {string} [language] - The language for which to retrieve the greetCount.
   * @returns {number} The greetCount for the specified language or the total greetCount.
   */
  function getGreetCount(language) {
    if (language) {
      // Return the greetCount for the specified language
      return greetCounts[language] || 0;
    } 
      // Return the total greetCount
    return totalGreetCount;
  } 
  
  // Return an object with greet and getGreetCount methods
  return {
    greet: greet,
    getGreetCount: getGreetCount
  };
}
