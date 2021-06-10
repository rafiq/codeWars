function rot13(message){
    let alpha = "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz";
    let capitalAlpha = alpha.toUpperCase();
    return message.split("").reduce((acc,curr) => {
        if (curr === curr.toLowerCase() && alpha.includes(curr.toLowerCase())) {
            acc += alpha[alpha.indexOf(curr) + 13]
        } else if (alpha.includes(curr.toLowerCase())) {
            acc += capitalAlpha[capitalAlpha.indexOf(curr) + 13]
        } else acc += curr;
        return acc;
    },"")
  }
  console.log(
    rot13("test"),// grfg , Actual Output: " + rot13("test"))

  rot13("Test"),//  Grfg , Actual Output: " + rot13("Test"))
  rot13("Ruby is cool!"),// Ehol vf pbby!
  )
//   VERY smooth solution below again using the replace function which I need to start doing.
//   function rot13(message) {
//   var a = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
//   var b = "nopqrstuvwxyzabcdefghijklmNOPQRSTUVWXYZABCDEFGHIJKLM"
//   return message.replace(/[a-z]/gi, c => b[a.indexOf(c)])
// }

// I see and like how they put the two alphabets adjacent to each other and then just got the index of the regular alhapbet and got the corresponding letter from the cipher alphabet which is genius.
var alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXWZ";
var cipher   = "nopqrstuvwxyzabcdefghijklmNOPQRSTUVWXWZABCDEFGHIJKLM";

function rot13(message){
  return message.split('').map(function(c) {
    var i = alphabet.indexOf(c);
    if (i < 0) {
      // not in alphabet, return char
      return c;
    }

    return cipher[i];
  }).join('');
}