function reverseWords(str) {



    return str.split(" ").map(word => word.split("").reverse().join("")).join(" ");
  }
  console.log(
    reverseWords('The quick brown fox jumps over the lazy dog.'),// 'ehT kciuq nworb xof spmuj revo eht yzal .god');
    reverseWords('apple'),// 'elppa');
    reverseWords('a b c d'),// 'a b c d');
    reverseWords('double  spaced  words'),// 'elbuod  decaps  sdrow');
  )