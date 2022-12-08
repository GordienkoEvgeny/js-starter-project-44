import {
  getRandomNumber, inputUserValue, getWrongAnswer, returnWinner, getCorrect,
} from '../index.js';
import getGreetingByName from '../cli.js';

const instructionGCD = () => {
  console.log('Find the greatest common divisor of given numbers.');
};

const getGCD = (number1, number2) => {
  if (number2 !== 0) {
    const a = number1 % number2;
    return getGCD(number2, a);
  } return number1;
};

const runsGameLogicBrainGCD = () => {
  const userName = getGreetingByName();
  instructionGCD();
  let count = 0;
  let result = 0;
  while (count < 3) {
    const firstNumber = getRandomNumber(1, 100);
    const secondNumber = getRandomNumber(1, 100);
    console.log(`Question: ${firstNumber} ${secondNumber} `);
    const value = inputUserValue();
    const userValue = Number(value);
    result = getGCD(firstNumber, secondNumber);
    switch (result) {
      case userValue:
        count += 1;
        getCorrect();
        break;
      default:
        return getWrongAnswer(value, result, userName);
    }
  } return returnWinner(userName);
};
export default runsGameLogicBrainGCD;
