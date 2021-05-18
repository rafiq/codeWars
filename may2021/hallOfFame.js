class HallOfFame {
    // constructor(sizeOfHall = 5, playersArray){
    //     let topArray = [];
    //     playersArray = playersArray.sort((a,b) => b[1] - a[1]);

    //     for (let player = 0; player <= sizeOfHall; player++) {
    //         topArray.push(playersArray[player])
    //     }
    //     this.sizeOfHall = sizeOfHall;
    //     if (playersArray.length > sizeOfHall) {
    //         playersArray = playersArray.sort((a,b) => b[1] - a[1])
    //         this.playersArray = playersArray.slice(0,3)
    //     } else {
    //         this.playersArray = playersArray ;
    //     }
    // }

    // get list(){
    //     this.playersArray.sort((a,b) => {
    //         if (a[1] === b[1]) {
    //             return this.playersArray
    //         }
    //     })
    //     console.log(this.playersArray)
    //  }

    // add( player ){
    //     if (player[1] > this.playersArray[this.playersArray.length - 1][1]) {
    //         this.playersArray[this.playersArray.length - 1] = player;
    //         // this.playersArray = this.playersArray.slice(0,3);
    //     }
    // }

    constructor(size = 5, players = []) {
        this.size = size;
        this.scores = [];
        players.forEach(player => this.add(player));
    }
    get list() {
        return this.scores
            .map(x => `${x[0]}: ${x[1]}`)
            .concat(Array.from({length: this.size - this.scores.length}).map(_ => ''));
    }

    add(player) {
        this.scores.push(player);
        this.scores.sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0])).splice(this.size);
        return this;
    }


    // constructor(size=5, players=[]){
    //     this.size = size;
    //     this.players = players;
    //  }
    //  get list() {
    //     const sortedPlayers = this.players.sort((a,b)=>b[1]-a[1] ? b[1]-a[1] : b[0]<a[0]).map(([a,b])=>a+': '+b);
    //     return [...Array(this.size)].map((_,i)=>sortedPlayers[i] || '');
    //  }
    //  add(player) {
    //     this.players.push(player)
    //     return this;
    //  }
  }


var top3 = new HallOfFame(3, [["Ada",99], ["Bob",42], ["Clo", 101], ["Dan", 3]])

top3.list //-> ["Clo: 101", "Ada: 99", "Bob: 42"] // -- only 3 players kept 'cause size of the Hall is 3

top3.add(["Dan",54])
top3.list //-> ["Clo: 101", "Ada: 99", "Dan: 54"]

top3.add(["Eva",75])
top3.add(["Fox",120])
top3.list //--> ["Fox: 120","Clo: 101","Ada: 99"]
// top3.list
var top5 = new HallOfFame(); // -- size=5 by default
top5.add(["A",4])
top5.add(["E",3])
top5.add(["I",1])
console.log(top5.list) //--> ["A: 4","E: 3","I: 1","",""] // <-- 2 "empty players" at the end of list

top5.add(["S",5]).add(["T",7])
console.log(top5.list )//--> ["T: 7","S: 5","A: 4","E: 3","I: 1"]