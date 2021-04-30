function solution(str, ending){
    let length = ending.length;
    let firstStrEnding = str.slice(-length);
    if (ending.length === 0) return true;
    return ending === firstStrEnding;
  }
console.log(
    solution('abcde', 'cde'),// true)
    solution('abcde', 'abc'),// false)
)