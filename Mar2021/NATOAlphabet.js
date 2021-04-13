function nato(name) {
    // var letters =  {
    //   "A": "Alpha",  "B": "Bravo",   "C": "Charlie",
    //   "D": "Delta",  "E": "Echo",    "F": "Foxtrot",
    //   "G": "Golf",   "H": "Hotel",   "I": "India",
    //   "J": "Juliett","K": "Kilo",    "L": "Lima",
    //   "M": "Mike",   "N": "November","O": "Oscar",
    //   "P": "Papa",   "Q": "Quebec",  "R": "Romeo",
    //   "S": "Sierra", "T": "Tango",   "U": "Uniform",
    //   "V": "Victor", "W": "Whiskey", "X": "X-ray",
    //   "Y": "Yankee", "Z": "Zulu"
    // }

    // return (str.toUpperCase().split("").reduce((acc,curr) => {
    //     acc += letters[curr] + " ";
    //     return acc;
    // },"")).slice(0,-1)

    // var greet = function(name) {
  return `Hello ${name[0].toUpperCase()}${name.slice(1)}!`
// };
  }

  console.log(
    nato('billy'), // --> 'Hotel India'
    nato('abc') // --> 'Alpha Bravo Charlie'
  )