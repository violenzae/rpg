import {ToothBrush} from './../src/rpg.js';
import { exportAllDeclaration } from '@babel/types';

describe('Toothbrush', () => {

  test('user picks a character', () => {
  let toothBrush = new ToothBrush;
  
  expect(toothBrush.level).toEqual(1);
  expect(toothBrush.health).toEqual(100);
  });
});
