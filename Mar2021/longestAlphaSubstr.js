function longest(str) {

    let longestStreak = "";
    let current = "";
    let asciiArray = str.split("").map((val,idx) => str.charCodeAt(idx));

    for (let i = 0; i < asciiArray.length; i++) {
        if (asciiArray[i] <= asciiArray[i + 1]) {
            current += str[i];
        }
        else {
            current += str[i];
            if (longestStreak.length < current.length) {
                longestStreak = current;
            }
            current = "";

        }
    }
        return longestStreak;
  }
  console.log(
    longest('asd'),// 'as'],
    longest('nab'), //'ab'],
    longest('abcdeapbcdef'), //'abcde'],
    longest('asdfaaaabbbbcttavvfffffdf'),//, 'aaaabbbbctt'],
    longest('asdfbyfgiklag'), //'fgikl'],
    // ['z', 'z'],
    // ['zyba', 'z']
  )