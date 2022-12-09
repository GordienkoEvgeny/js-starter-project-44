import { getRandomNumber } from '../index.js';

export const outInstructionGCD = () => {
  console.log('Find the greatest common divisor of given numbers.');
};

const getGCD = (number1, number2) => {
  if (number2 !== 0) {
    const num = number1 % number2;
    return getGCD(number2, num);
  } return number1;
};

export const logicBrainGCD = () => {
  let result = 0;
  const firstNumber = getRandomNumber(1, 100);
  const secondNumber = getRandomNumber(1, 100);
  const questionString = `${firstNumber} ${secondNumber}`;
  result = getGCD(firstNumber, secondNumber);
  const dataGame = [result, questionString];
  return dataGame;
};
