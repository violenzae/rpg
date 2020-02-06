export class ToothBrush {
  constructor(){
    this.level = 1;
    this.health = 100;
    this.cleanliness = 50;
    this.strength = 20;
    this.inventory = [];
  }
  // battle() {
  // let bosslvl = boss.lvl
  // if(this.level <= Boss.lvl){
  //   alert("loser!");
  //   Boss.randomizeLvl();
  //   Boss.randomizeName();
  //   Boss.randomizeDrop(); 
  // } else if()
  // }
  
}

export class Boss {
  constructor(lvl, name, drop) {
    this.lvl = lvl;
    this.name = name;
    this.drop = drop;
  }

 randomizeLvl() { 
this.lvl = Math.floor(Math.random() * 5 + 1);
return this.lvl;
 }

 randomizeName() {
  const bossNameArray = ["Grumpy", "Sleepy", "Dopey", "Happy"];
  this.name = bossNameArray[Math.floor(Math.random() * 3) + 0];
 }

 randomizeDrop() {
  const drop12 = ["Shovel", "Penny"];
  const drop34 = ["Boomerang", "Feather"];
  const drop5 = ["Trophy", "Bazooka"];
    
    if(this.lvl <= 2 && this.lvl > 0) {
      this.drop = drop12[Math.floor(Math.random() * 2)];
      return this.drop;
    } else if(this.lvl >= 3 && this.lvl <= 4) {
      this.drop = drop34[Math.floor(Math.random() * 2)];
      return this.drop;
    } else if(this.lvl === 5) {
      this.drop = drop5[Math.floor(Math.random() * 2)];
      return this.drop;
    }
  } 
}


export class Battle {
  constructor(bossLvl,charLvl) {
    this.bossLvl = bossLvl;
    this.charLvl = charLvl;
  }

  winCheck() {
    let tempBossLvl = 
    this.bossLvl += boss.lvl;
  }


}