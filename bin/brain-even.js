#!/usr/bin/env node
import readlineSync from 'readline-sync';
import getGreetingByName from '../src/cli.js';

const gameLogic = (randomStart = 1, randomEnd = 100) => {
  const userName = getGreetingByName();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let count = 0;
  while (count < 3) {
    const randomNum = Math.floor(Math.random() * (randomEnd - randomStart + 1)) + randomStart;
    console.log(`Question: ${randomNum}`);
    const userValue = readlineSync.question('Your answer: ');
    if ((randomNum % 2 === 0 && userValue.toLowerCase() === 'yes') || ((randomNum % 2 !== 0 && userValue.toLowerCase() === 'no'))) {
      console.log('Correct!');
      count += 1;
    } else if (userValue.toLowerCase() === 'yes') {
      console.log(`'${userValue}' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${userName}!`);
      break;
    } else if (userValue.toLowerCase() === 'no') {
      console.log(`'${userValue}' is wrong answer ;(. Correct answer was 'yes'.\nLet's try again, ${userName}!`);
      break;
    } else {
      console.log(`The answer should be only "yes" or "no". You lose ${userName}!`);
      break;
    }
  } if (count === 3) {
    console.log(`Congratulations, ${userName}!`);
  }
};
gameLogic();
