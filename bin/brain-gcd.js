#!/usr/bin/env node
import { outInstructionGCD, logicBrainGCD } from '../src/games/gcd.js';
import { runGame } from '../src/index.js';
import displayGreetingReturnName from '../src/cli.js';

runGame(displayGreetingReturnName, outInstructionGCD, logicBrainGCD);
