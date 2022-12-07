import readlineSync from 'readline-sync';

export const returnWinner = (userName) => console.log(`Congratulations, ${userName}!`);

export const getRandomNumber = (randomStart = 1, randomEnd = 50) => {
  const a = Math.floor(Math.random() * (randomEnd - randomStart + 1)) + randomStart;
  return a;
};

export const inputUserValue = () => {
  const value = readlineSync.question('Your answer: ');
  return value;
};

export const getCorrect = () => console.log('Correct!');

export const getWrongAnswer = (userValue, result, userName) => console.log(`'${userValue}' is wrong answer ;(. Correct answer was '${result}'.\nLet's try again, ${userName}!`);
