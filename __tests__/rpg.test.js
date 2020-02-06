import {Hero} from './../src/rpg.js';
import {Boss} from './../src/rpg.js';
import {Battle} from './../src/rpg.js';

describe('Hero', () => {

  test('user picks a character', () => {
  let newHero = new Hero;
  
  expect(newHero.level).toEqual(1);
  expect(newHero.health).toEqual(100);
  });
});
 
describe('Boss randomize name ', () => {

  test('boss name should be randomly chosen from an array when battle starts', () => {

  let boss = new Boss();
  boss.randomizeName();

  expect(
    boss.name === "Grumpy" ||
    boss.name === "Sleepy" || 
    boss.name === "Dopey" || 
    boss.name === "Happy").toBe(true);
  });
});

describe('Boss randomize lvl', () => {

  test('boss level randomized out of 5 when battle starts', () => {

  let boss = new Boss();
  boss.randomizeLvl();

  expect(
    boss.lvl === 1 || 
    boss.lvl === 2 || 
    boss.lvl === 3 || 
    boss.lvl === 4 ||
    boss.lvl === 5).toBe(true);

  });
});

describe('Boss assign and randomize drop', () => {

  test('boss drop assigned depending on level range (1-2,3-4,5) and randomized from array of 2 for each level range', () => {
  
  let boss = new Boss(3, "Grumpy");
  boss.randomizeDrop();

  expect (
    boss.drop === "Boomerang" || 
    boss.drop === "Feather").toBe(true);
  });
});

describe('Battle initialize', () => {

  test('will place newly generated hero and random boss objects into the battle constructor', () => {
    let newBattle = new Battle();
    newBattle.initialize();

    expect(newBattle.char.length).toBeGreaterThan(0);
  });
});

// describe('Battle win conditions', () => {

//   test('player will win battle by gaining 1 level if level is higher than boss', () => {
  
//   let boss = new Boss(2, "Grumpy");
//   let newHero = new Hero(4,100,50,20, [])

//   expect (newHero.level).toEqual(5);
//   });
// });
