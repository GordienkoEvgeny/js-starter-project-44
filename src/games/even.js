import { getRandomNumber } from '../index.js';

export const outInstructionEven = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
};
export const logicBrainEven = () => {
  let result;
  const number = getRandomNumber();
  if (number % 2 === 0) {
    result = 'yes';
  } else {
    result = 'no';
  }
  const dataGame = [result, number];
  return dataGame;
};
