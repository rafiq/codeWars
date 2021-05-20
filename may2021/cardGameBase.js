const SUITS = ['♥', '♦', "♠", "♣"];
const VALUES = [1,2,3,4,5,6,7,8,9,10,11,12,13];

function Card(suit, rank) {
    this.suit = suit;
    this.rank = rank
    // return suit,rank
}

Card.prototype = {

  toString: function() {
    return this.toString();
  }
};

function Deck() {
    this.deck = [];

    for (let suitIndex = 0; suitIndex < SUITS.length; suitIndex++) {
      let suit = SUITS[suitIndex];

      for (let valueIndex = 0; valueIndex < VALUES.length; valueIndex++) {
        let value = VALUES[valueIndex];
        this.deck.push();
      }
    }


    shuffle = () => {
        for (let first = array.length - 1; first > 0; first--) {
            let second = Math.floor(Math.random() * (first + 1)); // random index from 0 to i
            [array[first], array[second]] = [array[second], array[first]]; // swap elements
        }

        return array;
    }
    return shuffle(this.deck);
}

Deck.prototype = {
  count: function() {
    let count = 0;

    this.forEach(card => {
        count++;
    })
    return count;
  },
  draw: function(n) {
    return Deck.shift();
  },

};
var queen_of_spades = new Card(Card.SPADES, 12);
var ten_of_clubs = new Card(Card.CLUBS, 10);
let game = new Deck();
console.log(
    game,
    // queen_of_spades.suit,// Card.SPADES);
    // queen_of_spades.rank,// 12);
    // queen_of_spades.face_card, //true);
    // queen_of_spades.toString(),// "Queen of Spades");
    // queen_of_spades > ten_of_clubs,//true);
    // ten_of_clubs.rank,// 10);
    // ten_of_clubs.face_card,// false);
)