import readlineSync from 'readline-sync';

export const getRandomNumber = (start = 1, end = 50) => {
  const a = Math.floor(Math.random() * (end - start + 1)) + start;
  return a;
};

export const getUserValue = () => {
  const value = readlineSync.question('Your answer: ');
  return value;
};

export const getQuestion = (num) => {
  const conc = `Question: ${num}`;
  return (conc);
};

export const checkingTheAnswer = (userValue, result) => {
  switch (result) {
    case userValue:
      return console.log('Correct!');
    default:
      return 'stop';
  }
};

export const runGame = (name, instruction, game) => {
  const userName = name();
  instruction();
  for (let i = 0; i < 3; i += 1) {
    const data = game();
    const result = data[0];
    const question = data[1];
    console.log(getQuestion(question));
    const strValue = getUserValue();
    const numValue = Number(strValue);
    if (result === strValue || result === numValue) {
      console.log('Correct!');
    } else {
      return console.log(`'${strValue}' is wrong answer ;(. Correct answer was '${result}'.Let's try again, ${userName}!`);
    }
  } return console.log(`Congratulations, ${userName}!`);
};
