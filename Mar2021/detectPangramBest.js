// This is a great one that takes a string and checks to see if every letter of the alphabet string is present in string which checks by looking if the string's letter is present in the alphabet string.


function isPangram(string){
    string = string.toLowerCase();
    return "abcdefghijklmnopqrstuvwxyz".split("").every(function(x){
      return string.indexOf(x) !== -1;
    });
  }


//   The below is the same as the top and is alittle more simple
function isPangram(string){
    return 'abcdefghijklmnopqrstuvwxyz'
      .split('')
      .every((x) => string.toLowerCase().includes(x));
  }