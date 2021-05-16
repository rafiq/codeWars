function isDivideBy(number, a, b) {
    return number % b ? false : number % a ? false: true;
  }
  console.log(
    isDivideBy(-12, 2, -6), //true);
    isDivideBy(-12, 2, -5), //false);
    isDivideBy(45, 1, 6), //false);
    isDivideBy(45, 5, 15), //true);
    isDivideBy(4, 1, 4), //true);
  )