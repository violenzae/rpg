export class ToothBrush {
  constructor(level, health, cleanliness, strenth, inventory){
    this.level = 1;
    this.health = 100;
    this.cleanliness = 50;
    this.strength = 20;
    this.inventory = [];
  }
  battle() {
    var bossLvl = Math.floor(Math.random() * 5) + 1;
    var bossNameArray = ["Grumpy", "Sleepy", "Dopey", "Happy"];
    var bossName = bossNameArray[Math.floor(Math.random() * 3) + 0];

    return bossName + bossLvl + "Lvl"
  }
  
}