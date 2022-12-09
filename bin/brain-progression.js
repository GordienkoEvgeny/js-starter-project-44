#!/usr/bin/env node
import { outInstructionBrainProgression, logicBrainProgression } from '../src/games/progression.js';
import { runGame } from '../src/index.js';
import displayGreetingReturnName from '../src/cli.js';

runGame(displayGreetingReturnName, outInstructionBrainProgression, logicBrainProgression);
