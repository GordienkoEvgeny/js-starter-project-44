import {
  getRandomNumber, inputUserValue, getWrongAnswer, returnWinner, getCorrect,
} from '../index.js';
import getGreetingByName from '../cli.js';

const instructionPrime = () => console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

const getPrime = (num) => {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return 'no';
    }
  } return 'yes';
};

const runsGameLogicBrainPrime = () => {
  const userName = getGreetingByName();
  instructionPrime();
  let count = 0;
  while (count < 3) {
    const number = getRandomNumber(2, 40);
    console.log(`Question: ${number}`);
    const result = getPrime(number);
    const value = inputUserValue();
    switch (result) {
      case value:
        count += 1;
        getCorrect();
        break;
      default:
        return getWrongAnswer(value, result, userName);
    }
  } return returnWinner(userName);
};

export default runsGameLogicBrainPrime;
