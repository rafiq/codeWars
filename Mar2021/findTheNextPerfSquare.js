function findNextSquare(sq) {
    if (Math.sqrt(sq) % 1 !== 0) return -1;
    for (let i = sq + 1; i < sq * 100000; i++) {
        if (Math.sqrt(i) % 1 === 0) return i;
    }
  }
  console.log(
    findNextSquare(121),// 144, "Wrong output for 121");
    findNextSquare(625),//676, "Wrong output for 625");
    findNextSquare(319225), //320356, "Wrong output for 319225");
    findNextSquare(15241383936), //15241630849, "Wrong output for 15241383936");
  )