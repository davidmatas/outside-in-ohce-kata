export default (momentDay, output, input) => {
  return {
    run(name) {
      if (momentDay.isNight()) output.run(`¡Buenas noches ${name}!`);
      if (momentDay.isEvening()) output.run(`¡Buenas tardes ${name}!`);
      if (momentDay.isMorning()) output.run(`¡Buenos días ${name}!`);

      let currentInput = input.askInput();

      while(currentInput !== 'Stop!') {
        currentInput = input.askInput();
      }
      return output.run(`Adios ${name}`);
    }
  }
}
