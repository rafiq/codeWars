longestPalindrome=function(s){
    if (!s) return 0;

    for (let c = s.length; c > 0; c--) {
        for (let i = 0; i <= s.length - c; i++) {
            let str = s.slice(i,c);
            if (isPalidrom(str)) return c;
        }
    }
    return longest;
  }
  function isPalidrom(word) {
      return word === word.split("").reverse().join("")
  }
// longestPalindrome=function(s){
//     let longest = 0;

//     for (let i = 0; i < s.length; i++) {
//         for (let j = i + 1; j <= s.length + 1; j++) {
//             let str = s.slice(i,j);
//             let l = str.length;
//             if (isPalidrom(str) && longest < l) {
//                 longest = l;
//             }
//         }
//     }
//     return longest;
//   }
//   function isPalidrom(word) {
//       return word === word.split("").reverse().join("")
//   }
  console.log(
    longestPalindrome("a"),// 1)
    longestPalindrome("aa"),// 2)
    longestPalindrome("baa"),// 2)
    // longestPalindrome("aab"),// 2)
    longestPalindrome("zyabyz"),// 6, "Are you sure that is a palindrome?")
    longestPalindrome("baabcd"),// 4)
    longestPalindrome("baablkj12345432133d"),// 9)
  )