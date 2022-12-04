import readlineSync from 'readline-sync';

export const getGreetingByName = (name) =>{
    const userName = readlineSync.question ('May I have your name? ' );
   name = console.log('Hello, ' +  userName + '!');
   return  name
};