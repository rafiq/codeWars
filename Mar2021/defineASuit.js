const DECK = ['2♣','3♣','4♣','5♣','6♣','7♣','8♣','9♣','10♣','J♣','Q♣','K♣','A♣',
'2♦','3♦','4♦','5♦','6♦','7♦','8♦','9♦','10♦','J♦','Q♦','K♦','A♦',
'2♥','3♥','4♥','5♥','6♥','7♥','8♥','9♥','10♥','J♥','Q♥','K♥','A♥',
'2♠','3♠','4♠','5♠','6♠','7♠','8♠','9♠','10♠','J♠','Q♠','K♠','A♠'];

function defineSuit(card) {
    let index = DECK.indexOf(card);

    if (index <= 12) return "clubs";
    else if (index <= 25) return "diamonds";
    else if (index <= 38) return "hearts";
    else if (index <= 51) return "spades";
  }
  console.log(
    defineSuit('3♣'), //'clubs');
    defineSuit('Q♠'),// 'spades');
    defineSuit('9♦'),// 'diamonds');
    defineSuit('J♥'), //'hearts');
  )