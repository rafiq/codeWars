function f(s) {
    // let subStrArray = substrings(s);
    // // let subStrArray = [];
    // let result = []
    // // for (let i = 1; i < s.length + 1; i++) {
    // //     subStrArray.push(s.substr(0,i))
    // // }
    // for (let i = 0; i < subStrArray.length; i++) {
    //     let length = s.length / subStrArray[i].length
    //     if (subStrArray[i].repeat(length) === s) {
    //         result.push(subStrArray[i]);
    //         result.push(length)
    //     }
    // }
    // return result.slice(0,2)
    // return subStrArray
    return substrings(s);
    // return s.match(/^(.*?)\1+$/);
   }
   console.log(
    f("ababab"),// ["ab", 3])
    // f("abcde"),// ["abcde", 1])
   )

//    This is interesting way to do it.
// for(var i = 1; i < (s.length+1)/2 ; i++){
//     var substring = s.substr(0,i);
//     if(s.length == s.match(new RegExp("("+ substring + ")+"))[0].length){
//       return [substring,s.length/i];
//     };
//   }
//   return [s,1];
function substrings(str) {
    let substrings = [];
    for (let idx = 0; idx < str.length; idx += 1) {
        substrings.push(...leadingSubstrings(str.slice(idx)));
    }
    return substrings;
}
function leadingSubstrings(str) {
    let leadingSubs = [];
    for (let idx = 0; idx < str.length; idx += 1) {
        // console.log(str.slice(idx))
      leadingSubs.push(str.slice(0, idx + 1));
    }
    return leadingSubs;
  }