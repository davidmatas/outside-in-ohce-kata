import ohce from './ohce.js';
import input from 'readline-sync';

function getUserName() {
  const args = process.argv.slice(2);
  if (args.length === 0) {
    console.log('ohce: missing userName');
    process.exit(1);
  }
  return args[0];
}

function hourRetriever() {
  return {
    getHour: () => new Date().getHours(),
  };
}

function outputService() {
  return {
    run: (outputString) => {
      console.log('>', outputString);
    },
  };
}

function inputService() {
  return {
    askInput: () => input.question('$ '),
  };
}

const ohceApp = ohce(hourRetriever(), outputService(), inputService());
ohceApp.run(getUserName());
