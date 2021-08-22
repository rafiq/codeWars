function maxMultiple(divisor, bound){
    let i = bound

    while (i > 0) {
        if (i % divisor === 0) return i
        i--
    }
    return false
  }
  console.log(
    maxMultiple(2,7),//6);
    maxMultiple(3,10),//9);
    maxMultiple(7,17),//14);
    maxMultiple(10,50),//50);
    maxMultiple(37,200),//185);
    maxMultiple(7,100),//98);
  )