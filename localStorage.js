window.addEventListener('load', function() {
    const storedGreetCount = localStorage.getItem('greetCount');
    if (storedGreetCount) {
      greetingForm.totalGreetCount = parseInt(storedGreetCount);
      
      // Update the greet count widget on page load
      const greetCountElements = document.querySelectorAll('.greet-count-widget span');
      for (const element of greetCountElements) {
        const language = element.id.replace('CountText', '');
        const count = greetingForm.totalGreetCount;
        element.textContent = `${element.textContent.split(':')[0]}: ${count}`;
      }
    }
});
  