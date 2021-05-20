function duckDuckGoose(players, goose) {

    while (goose > players.length) {
        goose = goose - players.length;
    }
    return players[goose - 1] ? players[goose - 1].name : goose > players.length ? players[players.length - 1].name : false;
  }
  class Player {
      constructor(name) {
          this.name = name;
      }
    }

    let ex_names = ["a", "b", "c", "d", "c", "e", "f", "g", "h", "z"];
    let players = ex_names.map((n) => new Player(n));
  console.log(
          duckDuckGoose(players, 1),//  "a");
          duckDuckGoose(players, 3),//  "c");
          duckDuckGoose(players, 10),// "z");
          duckDuckGoose(players, 20),// "z");
          duckDuckGoose(players, 30),// "z");
          duckDuckGoose(players, 18),// "g");
          duckDuckGoose(players, 28),// "g");
          duckDuckGoose(players, 12),// "b");
          duckDuckGoose(players, 2),//  "b");
          duckDuckGoose(players, 7),//  "f");
  )