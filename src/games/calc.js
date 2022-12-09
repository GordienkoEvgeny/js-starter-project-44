import { getRandomNumber } from '../index.js';

export const outInstructionCalc = () => {
  console.log('What is the result of the expression?');
};

export const logicBrainCalc = () => {
  let result = 0;
  const firstNum = getRandomNumber(1, 10);
  const secondNum = getRandomNumber(1, 10);
  const sign = ['+', '-', '*'];
  const randomSign = Math.floor(Math.random() * sign.length);
  const signDerivation = sign[randomSign];
  const questionString = `${firstNum} ${signDerivation} ${secondNum}`;
  if (sign[randomSign] === '+') {
    result = (firstNum + secondNum);
  } else if (sign[randomSign] === '-') {
    result = (firstNum - secondNum);
  } else if (sign[randomSign] === '*') {
    result = (firstNum * secondNum);
  }
  const dataGame = [result, questionString];
  return dataGame;
};
