function letterCount(s){


    return s.split("").reduce((acc,curr) => {
        acc[curr] ? acc[curr]++ : acc[curr] = 1;

        return acc;
    },{})
  }
  console.log(
    letterCount("codewars"),// {"a": 1, "c": 1, "d": 1, "e": 1, "o": 1, "r": 1, "s": 1, "w": 1});
    letterCount("activity"),// {"a": 1, "c": 1, "i": 2, "t": 2, "v": 1, "y": 1});
    letterCount("arithmetics"),// {"a": 1, "c": 1, "e": 1, "h": 1, "i": 2, "m": 1, "r": 1, "s": 1, "t": 2});
    letterCount("traveller"),// {"a": 1, "e": 2, "l": 2, "r": 2, "t": 1, "v": 1});
    letterCount("daydreamer"),// {"a": 2, "d": 2, "e": 2, "m": 1, "r": 2, "y": 1});
  )