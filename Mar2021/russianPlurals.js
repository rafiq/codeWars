// THis was interesting because I was not supposed to use string or - and +. I really like the given solution. It is very smart.

const makePlural = (options, number) => {
    // let lastTwoDigits = Number(number.toString().slice(-2));
    // let lastDigit = Number(number.toString().slice(-1));
    // if (lastDigit === 1 && lastTwoDigits !== 11) return options[0];
    // else if (lastDigit >= 2 && lastDigit <= 4 && lastTwoDigits !== 12 && lastTwoDigits !== 13 && lastTwoDigits !== 14) return options[1];
    // else return options[2];

    if (number >= 5 && number <= 20) return options[2];
    switch (number % 10) {
      case 1:
        return options[0];
      case 2:
      case 3:
      case 4:
        return options[1];
      default:
        return options[2];
    }
  }
  console.log(
    makePlural(['день', 'дня', 'дней'], 0),// 'дней' )
    makePlural(['день', 'дня', 'дней'], 1), //'день' )
    makePlural(['день', 'дня', 'дней'], 2), //'дня' )
    makePlural(['день', 'дня', 'дней'], 3),// 'дня' )
    makePlural(['день', 'дня', 'дней'], 4),// 'дня' )
    makePlural(['день', 'дня', 'дней'], 5),// 'дней' )
    makePlural(['день', 'дня', 'дней'], 11),// 'дней')
    makePlural(['день', 'дня', 'дней'], 20),// 'дней')
    makePlural(['день', 'дня', 'дней'], 21),// 'день')
    makePlural(['день', 'дня', 'дней'], 22),// 'дня')
  )