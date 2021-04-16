// Here is the answer that I was trying to do and I made it way more complicated than necessary. One for loop and two conditionals. Thats it. These things have to be experienced because I could have easily done this, but I need to know where and when to make certain logical steps. This is so simple and lovely for that.
function solve(s) {
    let cur = 0
    let max = 0
    for (let i = 0; i < s.length; ++i) {
      if ("aeiou".includes(s[i])) {
        cur++
        if (cur > max) {
          max = cur
        }
      } else {
        cur = 0
      }
    }
    return max
  }
//   The below is like mine, but I have to admit that this is a lot shorted and more genius.
const solve = s => s.split(/[^aeiou]/).reduce((s,n)=> Math.max(s,n.length),0);
// This below one is pretty cool as well. This is one of those really useful methods like reduce that one should always be thinking about using. Match returns an array with all the sub strings that match your regex. This is very helpful.
function solve(s){
    return Math.max(...s.match(/[aeiou]+/g).map(x => x.length));
   }
