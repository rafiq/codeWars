function countWords(str) {
    // str.replace(/[""]/g,"")
//   return  str.length === 0 || str === "" ?  0 :  str.match(/[^" "]+/g).
return (str.match(/[^\s]+/g) || []).length;
// return  str.length === 0 || str === "" ?  0 : str.match(/[^" "]+/g) ? str.match(/[^" "]+/g).length : 0;
  }
  console.log(
    countWords("Hello"),//1);
    countWords("Hello, World!"),//2);
    countWords("Hello﻿World"),//2);
    countWords("Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."),//19);
    countWords(""),//0);
    countWords("With! Symbol@ #Around! (Every) %Word$"),//5);
    countWords("Dear   Victoria, I love  to press   space button."),//8);
  )