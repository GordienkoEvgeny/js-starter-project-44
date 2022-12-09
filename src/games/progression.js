import { getRandomNumber } from '../index.js';

export const outInstructionBrainProgression = () => {
  console.log('What number is missing in the progression?');
};

const GeneratedArray = () => {
  const divisor = getRandomNumber(2, 8);
  const arrayNumber = [];
  for (let i = 2; i < getRandomNumber(60, 100); i += 1) {
    if (i % divisor === 0) {
      arrayNumber.push(i);
    }
  } return arrayNumber;
};

export const logicBrainProgression = () => {
  const index = getRandomNumber(1, 9);
  const x = '..';
  const array = GeneratedArray();
  const sliceStart = array.slice(0, index);
  const sliceEnd = array.slice(index + 1, 10);
  const questionString = `${sliceStart.join(' ')} ${x} ${sliceEnd.join(' ')}`;
  const getResult = array[index];
  const gameData = [getResult, questionString];
  return gameData;
};
