import $ from 'jquery';
import { ToothBrush } from './rpg';
import { Boss } from './rpg';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(function() {
  let boss = new Boss;
  boss.randomizeLevel();
  boss.randomizeName();
  boss.randomizeDrop();
  

  console.log(boss);
  console.log(bossLvl);


});