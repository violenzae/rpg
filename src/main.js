import $ from 'jquery';
import { Battle } from './rpg';
// import { Boss } from './rpg';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(function() {
  let newBattle = new Battle;
  newBattle.initialize();
  newBattle.nextBoss();
  
  console.log(newBattle);
  console.log(newBattle.boss[0])
  // console.log(bossLvl);


});