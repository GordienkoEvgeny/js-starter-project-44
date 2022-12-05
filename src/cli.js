/* eslint-disable no-console,  import/extensions */
import readlineSync from 'readline-sync';

const getGreetingByName = () => {
  const userName = readlineSync.question('May I have your name? ');
  return console.log(`Hello, ${userName}!`);
};
export default getGreetingByName;
