import {
  getRandomNumber, inputUserValue, getWrongAnswer, returnWinner, getCorrect,
} from '../index.js';
import getGreetingByName from '../cli.js';

export const instructionProgr = () => {
  console.log('What number is missing in the progression?');
};

const getGeneratedRandomArray = () => {
  const divisor = getRandomNumber(2, 8);
  const arrayNumber = [];
  for (let i = 2; i < getRandomNumber(60, 100); i += 1) {
    if (i % divisor === 0) {
      arrayNumber.push(i);
    }
  } return arrayNumber;
};

export const runsGameLogicBrainProgression = () => {
  const userName = getGreetingByName();
  instructionProgr();
  const result = getRandomNumber(1, 10);
  const x = '..';
  for (let k = 0; k < 3; k += 1) {
    const array = getGeneratedRandomArray();
    const sliceStart = array.slice(0, result);
    const sliceEnd = array.slice(result + 1, 10);
    console.log(`Question:  ${sliceStart.join(' ')} ${x} ${sliceEnd.join(' ')}`);
    const value = inputUserValue();
    const userValue = Number(value);
    switch (array[result]) {
      case userValue:
        getCorrect();
        break;
      default:
        return getWrongAnswer(value, array[result], userName);
    }
  } return returnWinner(userName);
};
