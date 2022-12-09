#!/usr/bin/env node
import { outInstructionPrime, logicBrainPrime } from '../src/games/prime.js';
import { runGame } from '../src/index.js';
import displayGreetingReturnName from '../src/cli.js';

runGame(displayGreetingReturnName, outInstructionPrime, logicBrainPrime);
