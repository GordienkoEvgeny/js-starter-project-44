#!/usr/bin/env node
import getGreetingByName from '../src/cli.js';
import { runsGameLogicBrainGCD, instructionGCD } from '../src/games/gcd.js';

const userName = getGreetingByName();
instructionGCD();
runsGameLogicBrainGCD(userName);
