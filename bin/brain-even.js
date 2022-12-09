#!/usr/bin/env node
import { outInstructionEven, logicBrainEven } from '../src/games/even.js';
import { runGame } from '../src/index.js';
import displayGreetingReturnName from '../src/cli.js';

runGame(displayGreetingReturnName, outInstructionEven, logicBrainEven);
