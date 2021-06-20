// THis is the solution and I did try.
function Card(suit, rank) {
    this.suit = suit
    this.rank = rank
  }

  Card.SUITS = [
    Card.CLUBS    = 'Clubs',
    Card.DIAMONDS = 'Diamonds',
    Card.HEARTS   = 'Hearts',
    Card.SPADES   = 'Spades'
  ]

  Card.prototype = {
    get face_card() {
      return this.rank > 10
    },
    valueOf: function() {
      return this.rank
    },
    toString: function() {
      var rank = {1: 'Ace', 11: 'Jack', 12: 'Queen', 13: 'King'}[this.rank] || this.rank
      return rank + ' of ' + this.suit
    }
  }

  function Deck() {
    this.cards = []

    for (var i = 0; i < Card.SUITS.length; i++) {
      for (var rank = 1; rank <= 13; rank++) {
        this.cards.push(new Card(Card.SUITS[i], rank))
      }
    }

    this.shuffle()
  }

  Deck.prototype = {
    count: function() {
      return this.cards.length
    },
    draw: function(n) {
      return this.cards.splice(-n, n)
    },
    shuffle: function() {
      this.cards.sort(function() { return Math.random() - 0.5 })
    }
  };

  function Card(suit, rank) {
    this.suit = suit
    this.rank = rank
  }

  Card.SUITS = [
    Card.CLUBS    = 'Clubs',
    Card.DIAMONDS = 'Diamonds',
    Card.HEARTS   = 'Hearts',
    Card.SPADES   = 'Spades'
  ]

  Card.prototype = {
    get face_card() {
      return this.rank > 10
    },
    valueOf: function() {
      return this.rank
    },
    toString: function() {
      var rank = {1: 'Ace', 11: 'Jack', 12: 'Queen', 13: 'King'}[this.rank] || this.rank
      return rank + ' of ' + this.suit
    }
  }

  function Deck() {
    this.cards = []

    for (var i = 0; i < Card.SUITS.length; i++) {
      for (var rank = 1; rank <= 13; rank++) {
        this.cards.push(new Card(Card.SUITS[i], rank))
      }
    }

    this.shuffle()
  }

  Deck.prototype = {
    count: function() {
      return this.cards.length
    },
    draw: function(n) {
      return this.cards.splice(-n, n)
    },
    shuffle: function() {
      this.cards.sort(function() { return Math.random() - 0.5 })
    }
  };


  function Card(suit, rank) {
      this.suit=suit;
      this.rank=rank;
      this.face_card=rank>10;
  }
  Card.COLORS = [ Card.DIAMONDS, Card.HEARTS, Card.CLUBS, Card.SPADES] = "Diamonds Hearts Clubs Spades".split(' ');
  Card.RANKS  = " Ace 2 3 4 5 6 7 8 9 10 Jack Queen King".split(' ');

  Card.prototype = {
    toString: function(){ return `${ Card.RANKS[this.rank] } of ${ this.suit }`; },
    valueOf:  function(){ return this.rank; },
  };


  function Deck() {
      this.cards=Array.from({length:52},(_,i)=>new Card(Card.COLORS[i/13|0], i%13+1));
      this.shuffle();
  }

  Deck.prototype = {
    count:   function()  { return this.cards.length; },
    draw:    function(n) { return this.cards.splice(-n,n); },
    shuffle: function() {
        for(let i=0;i<this.cards.length;i++){
            let j = Math.random() * this.cards.length | 0;
            [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
        }
    },
  };
