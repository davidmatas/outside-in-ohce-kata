import ohce from "./ohce";

it("greeting at night", () => {
  const nightMoment = momentDay({isNight: true});
  const outputMock = output();
  const inputMock = input({onAskInput: 'Stop!'});
  const app = ohce(nightMoment, outputMock, inputMock);
  const name = 'Pedro';

  app.run(name);

 expect(outputMock.run).toHaveBeenCalledWith('¡Buenas noches Pedro!');
 expect(outputMock.run).toHaveBeenCalledWith('Adios Pedro');
});

it.skip("greeting at evening", () => {
  const eveningMoment = momentDay({isEvening: true});
  const outputMock = output();
  const app = ohce(eveningMoment, outputMock);
  const name = 'Pedro';

  app.run(name);

 expect(outputMock.run).toHaveBeenCalledWith('¡Buenas tardes Pedro!');
});

it.skip("greeting at morning", () => {
  const morningMoment = momentDay({isMorning: true});
  const outputMock = output();
  const app = ohce(morningMoment, outputMock);
  const name = 'Pedro';

  app.run(name);

 expect(outputMock.run).toHaveBeenCalledWith('¡Buenos días Pedro!');
});

function output() {
  return {
    run: jest.fn()
  }
}

function input(params){
  return {
    askInput: () => params.onAskInput
  }
}

function momentDay(params) {
  return {
    isNight: () => params.isNight,
    isEvening: () => params.isEvening,
    isMorning: () => params.isMorning,
  }
}
