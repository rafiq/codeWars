var ArrowFunc = function(arr) {
    return arr.map(num => String.fromCharCode(num)).join("");
  }
  console.log(
    ArrowFunc([84,101,115,116]), //'Test', 'Convert those numbers to letters')
    ArrowFunc([70,85,83,32,82,79,72,32,68,65,72]), //'FUS ROH DAH', 'Keep it up!')
  )