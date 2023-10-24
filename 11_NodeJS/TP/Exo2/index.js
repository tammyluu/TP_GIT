import { Morpion } from './classes/Morpion.js'
import {Ihm } from './classes/Ihm.js';

const morpion = new Morpion();
  const ihm = new Ihm(morpion);
  ihm.playTurn();