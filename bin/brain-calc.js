#!/usr/bin/env node
import getGreetingByName from '../src/cli.js';
import { runsGameLogicBrainCalc, instructionCalc } from '../src/games/calc.js';

const userName = getGreetingByName();
instructionCalc();
runsGameLogicBrainCalc(userName);
