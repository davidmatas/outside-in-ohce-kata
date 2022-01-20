export default (hourRetriever, output, input) => {
  return {
    run(name) {
      const currentHour = hourRetriever.getHour();
      if (currentHour >= 20 || currentHour <= 5) output.run(`¡Buenas noches ${name}!`);
      if (currentHour >= 13 && currentHour < 20) output.run(`¡Buenas tardes ${name}!`);
      if (currentHour >= 6 && currentHour <= 12) output.run(`¡Buenos días ${name}!`);

      let currentInput = input.askInput();

      while (currentInput !== 'Stop!') {
        const reversedString = currentInput.split('').reverse().join('');
        const isPalindrome = currentInput === reversedString;
        isPalindrome ? output.run('¡Bonita palabra!') : output.run(reversedString);
        currentInput = input.askInput();
      }
      return output.run(`Adios ${name}`);
    },
  };
};
