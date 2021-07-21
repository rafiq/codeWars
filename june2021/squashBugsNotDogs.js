function howManyDalmations(number) {


    return number <= 10 ? "Hardly any" : number <= 50 ?  "More than a handful!" : number === 101 ? "101 DALMATIONS!!!" : "Woah that's a lot of dogs!";
}

//     var dogs ["Hardly any", "More than a handful!", "Woah that's a lot of dogs!", "101 DALMATIONS!!!"];

//     var respond = number <= 10 ? dogs[0] (number <= 50 ? dogs[1] : (number = 101  dogs[3] : dogs[2]

//   return respond

  console.log(
      howManyDalmations(2),//
      howManyDalmations(101),//
      howManyDalmations(200),//
      howManyDalmations(20),//
  )

  const howManyDalmatians = number =>
  number <= 10 ? `Hardly any` : number <= 50 ? `More than a handful!` : number === 101 ? `101 DALMATIANS!!!` : `Woah that's a lot of dogs!`;