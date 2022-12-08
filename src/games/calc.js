import {
  getRandomNumber, inputUserValue, getWrongAnswer, returnWinner, getCorrect,
} from '../index.js';
import getGreetingByName from '../cli.js';

export const instructionCalc = () => {
  console.log('What is the result of the expression?');
};

export const runsGameLogicBrainCalc = () => {
  const userName = getGreetingByName();
  instructionCalc();
  let count = 0;
  let result = 0;
  while (count < 3) {
    const firstNum = getRandomNumber(1, 10);
    const secondNum = getRandomNumber(1, 10);
    const sign = ['+', '-', '*'];
    const randomSign = Math.floor(Math.random() * sign.length);
    console.log('Question: ' + firstNum + sign[randomSign] + secondNum);
    const value = inputUserValue();
    const userValue = Number(value);
    if (sign[randomSign] === '+') {
      result = (firstNum + secondNum);
    } else if (sign[randomSign] === '-') {
      result = (firstNum - secondNum);
    } else if (sign[randomSign] === '*') {
      result = (firstNum * secondNum);
    } switch (result) {
      case userValue:
        count += 1;
        getCorrect();
        break;
      default:
        return getWrongAnswer(value, result, userName);
    }
  } return returnWinner(userName);
};
