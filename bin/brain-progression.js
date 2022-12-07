#!/usr/bin/env node
import getGreetingByName from '../src/cli.js';
import { instructionProgr, runsGameLogicBrainProgression } from '../src/games/progression.js';

const userName = getGreetingByName();
instructionProgr();
runsGameLogicBrainProgression(userName);
