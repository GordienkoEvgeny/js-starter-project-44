import {
  getRandomNumber, inputUserValue, getWrongAnswer, returnWinner, getCorrect,
} from '../index.js';
import getGreetingByName from '../cli.js';

export const instructionEven = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
};
export const runsGameLogicBrainEven = () => {
  const userName = getGreetingByName();
  instructionEven();
  let count = 0;
  let result;
  while (count < 3) {
    const randomNum = getRandomNumber();
    console.log(`Question: ${randomNum}`);
    const userValue = inputUserValue();
    if (randomNum % 2 === 0) {
      result = 'yes';
    } else {
      result = 'no';
    }
    switch (result) {
      case userValue.toLowerCase():
        getCorrect();
        count += 1;
        break;
      default:
        return getWrongAnswer(userValue, result, userName);
    }
  } return returnWinner(userName);
};
