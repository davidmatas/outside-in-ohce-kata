import ohce from './ohce';

const dayHours = [6, 7, 8, 9, 10, 11, 12];
const eveningHours = [13, 14, 15, 16, 17, 18, 19];
const nightHours = [20, 21, 22, 23, 0, 1, 2, 3, 4, 5];
const dayGreeting = 'Buenos días';
const eveningGreeting = 'Buenas tardes';
const nightGreeting = 'Buenas noches';
const greetingsAndHours = [
  [dayHours, dayGreeting],
  [eveningHours, eveningGreeting],
  [nightHours, nightGreeting],
];

describe.each(greetingsAndHours)('greets with all moments and hours and exits', (hours, greeting) => {
  it.each(hours)(`greets the user with ${greeting} at %p and exits`, (hour) => {
    const hourRetriever = hourRetrieverMock(hour);
    const output = outputMock();
    const input = inputMock();
    const app = ohce(hourRetriever, output, input);
    const name = 'Pedro';

    input.askInput.mockReturnValueOnce('Stop!');
    app.run(name);

    expect(output.run).toHaveBeenCalledWith(`¡${greeting} ${name}!`);
    expect(output.run).toHaveBeenCalledWith(`Adios ${name}`);
    expect(output.run).toHaveBeenCalledTimes(2);
  });
});

it('it identifies palindromes and non palindromes', () => {
  const hourRetriever = hourRetrieverMock(10);
  const output = outputMock();
  const input = inputMock();
  const app = ohce(hourRetriever, output, input);
  const name = 'Pedro';
  input.askInput.mockReturnValueOnce('hola').mockReturnValueOnce('reconocer').mockReturnValueOnce('Stop!');

  app.run(name);

  expect(output.run).toHaveBeenCalledWith(`aloh`);
  expect(output.run).toHaveBeenCalledWith(`¡Bonita palabra!`);
  expect(output.run).toHaveBeenCalledWith(`Adios ${name}`);
  expect(output.run).toHaveBeenCalledTimes(4);
});

function outputMock() {
  return {
    run: jest.fn(),
  };
}

function inputMock() {
  return {
    askInput: jest.fn(),
  };
}

function hourRetrieverMock(currentHour) {
  return {
    getHour: () => currentHour,
  };
}
