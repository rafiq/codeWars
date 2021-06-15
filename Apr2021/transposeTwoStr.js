function transposeTwoStrings(arr) {
  let longer = "";
  let shorter = "";

  arr[0].length > arr[1].length
    ? ([longer, shorter] = [arr[0], arr[1]])
    : ([longer, shorter] = [arr[1], arr[0]]);

  return longer
    .split("")
    .reduce((acc, _, idx) => {
      acc.push((arr[0][idx] || " ") + " " + (arr[1][idx] || " "));
      return acc;
    }, [])
    .join("\n");
}
console.log(
  //   transposeTwoStrings(["Hello", "World"]), // "H W\ne o\nl r\nl l\no d", "Should return H W\ne o\nl r\nl l\no d");
  transposeTwoStrings(["joey", "louise"]), // "j l\no o\ne u\ny i\n  s\n  e", "Should return j l\no o\ne u\ny i\n  s\n  e");
  //   transposeTwoStrings(["a", "cat"]), // "a c\n  a\n  t", "Should return a c\n  a\n  t");
  transposeTwoStrings(["cat", ""]) // "c  \na  \nt  ", "Should return c  \na  \nt  ");
  //   transposeTwoStrings(["!a!a!", "?b?b"]) // "! ?\na b\n! ?\na b\n!
);
