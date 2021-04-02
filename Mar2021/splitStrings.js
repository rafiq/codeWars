function solution(str){

    let result = [];

    for (let i = 0; i < str.length; i += 2) {
        result.push((str.substr(i,2) + "_").slice(0,2))
    }
        return result;
}
console.log(
    solution("abcdef"),// ["ab", "cd", "ef"]);
    solution("abcdefg"),// ["ab", "cd", "ef", "g_"]);
    solution(""),// []);
)

// This is a nice way to do this as well, but mine is great too. I do like how they handled the last character will either be a character or an underscore.
function solution(str){
    let res = [];
    for (var i = 0; i < str.length; i +=2) res.push(`${str[i] + (str[i+1] || '_')}`)
     return res;
  }