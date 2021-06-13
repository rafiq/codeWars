function incrementString (strng) {

    let endNums = strng.match(/[0-9]+/)? strng.match(/[0-9]+/)[0] : "";
    let frontLetters = strng.match(/[^0-9]+/) ? strng.match(/[^0-9]+/)[0] : "";
    if (endNums.match(/0+/)) {
        let len = endNums.length;
        endNums = ("0".repeat(len) + (Number(endNums) + 1)).slice(-len);
        return frontLetters + endNums;
    }
    return strng.match(/[0-9]+/) ? frontLetters + (Number(endNums) + 1) : frontLetters + 1;
    // return endNums.match(/0+/) ? endNums.match(/0+/)[0] : null;
  }
  console.log(
    incrementString("foobar000"),// "foobar001");
    incrementString("foo"),// "foo1");
    incrementString("foobar001"),// "foobar002");
    incrementString("foobar99"),// "foobar100");
    incrementString("foobar099"),// "foobar100");
    incrementString(""),// "1");
  )