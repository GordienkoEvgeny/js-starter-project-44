#!/usr/bin/env node
import getGreetingByName from '../src/cli.js';
import { runsGameLogicBrainEven, instructionEven } from '../src/games/even.js';

const userName = getGreetingByName();
instructionEven();
runsGameLogicBrainEven(userName);
