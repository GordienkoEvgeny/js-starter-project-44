#!/usr/bin/env node
import { outInstructionCalc, logicBrainCalc } from '../src/games/calc.js';
import { runGame } from '../src/index.js';
import displayGreetingReturnName from '../src/cli.js';

runGame(displayGreetingReturnName, outInstructionCalc, logicBrainCalc);
