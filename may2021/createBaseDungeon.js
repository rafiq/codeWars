class Game {
    constructor(name, level = 0){
        this.player = new Player(name);
        this.level = +level||0;
        this.floors = []
    }
  }

  class Player {
    constructor(name = "Player") {
            this.name = typeof name !== "string" || name == "" ? "Player" : name;
            this.health = 100;
            this.position = {x:0,y:0};
            this.damage = 10;
            this.luck = 1;
    }
  }

  class Monster {
    constructor(level) {
        this.level = level;
    }
  }

  class Map {
    constructor(level) {
        this.level = level;
    }
  }
  var game = new Game('Leeroy', 0)
  console.log(
    game.level = 0,//'Game level should = 0');
    game.floors = [],//'Game floors should be an empty array')
    game.player.name = 'Leeroy',// 'Game player name should = Leeroy');
    game.player.health = 100.00,// 'Game player health should = 100.00');
    game.player.position = {x:0,y:0}, //'Game player position should = {x:0 = y:0}');
    game.player.damage = 10.00,// 'Game player damage should = 10.00');
    game.player.luck = 1.00 , //'Game player luck should = 1.00');
  )