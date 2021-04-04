function isFlush(cards) {
    let initialCard = cards[0].slice(-1);

    for (let i = 0; i < cards.length; i++) {
        if (cards[i].slice(-1) !== initialCard) return false;
    }
    return true;
  }
  console.log(
    isFlush([  "AS", "3S",  "9S", "KS", "4S" ]),//  true );
    isFlush([  "AD", "4S",  "7H", "KC", "5S" ]),// false );
    isFlush([  "AD", "4S", "10H", "KC", "5S" ]),// false );
    isFlush([  "QD", "4D", "10D", "KD", "5D" ]),//  true );
    isFlush([ "10D", "4D",  "QD", "KD", "5D" ]),//  true );
  )


//   `great quick solution. Genius
function isFlush(cards) {
    return cards.every(a=>cards[0].slice(-1)===a.slice(-1))
  }