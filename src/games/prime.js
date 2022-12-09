import { getRandomNumber } from '../index.js';

export const outInstructionPrime = () => console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

const getCorrectAnswer = (num) => {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return 'no';
    }
  } return 'yes';
};

export const logicBrainPrime = () => {
  const number = getRandomNumber(2, 40);
  const result = getCorrectAnswer(number);
  const dataGame = [result, number];
  return dataGame;
};
