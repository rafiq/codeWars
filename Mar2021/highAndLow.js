function highAndLow(numbers){
    // return Math.max(numbers.split(" "))
    return Math.max(...numbers.split(" ").map(str => +str)) + " " + Math.min(...numbers.split(" ").map(str => +str))
  }

  console.log(
    highAndLow("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6"), //"542 -214");
  )