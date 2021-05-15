class Game {
    constructor(name, level = 0){
        this.name = name;
        this.level = level > 0 || level < 1 ? parseInt(level,10) : 0;
        this.floors = []
    }
  }

  class Player extends Game {
    constructor(name) {
        super(name)
    }
  }

  class Monster {
    constructor() {

    }
  }

  class Map {
    constructor() {

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