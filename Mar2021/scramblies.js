function scramble(str1, str2) {
    let count = 0;
    let str1Map = getCharFreq(str1);
    let str2Map = getCharFreq(str2);

    for (let i = 0; i < str2.length; i++) {
        if (str2Map[str2[i]] > str1Map[str2[i]]) return false;
        if (str1.includes(str2[i])) count++;
    }
    return count === str2.length;
   }
   function getCharFreq(str) {
       return str.split("").reduce((acc,curr) => {
        acc[curr] ? acc[curr]++ : acc[curr] = 1;
        return acc;
       },[])
   }
   function isSameCharCount(map1, map2, str2) {

        for (let i = 0; i < str2.length; i++) {
            if (map2[str2[i]] < map1[str2[i]] && map1[str2[i]] > 0) return false;
        }
        return true;
   }
   console.log(
    scramble('rkqodlw','world'),//true);
    scramble('cedewaraaossoqqyt','codewars'),//true);
    scramble('katas','steak'),//false);
    scramble("scriptjavx", "javascript"),//false);
    scramble('scriptjava','javascript'),//true);
    scramble('scriptingjava','javascript'),//true);
    scramble('scriptsjava','javascripts'),//true);
    scramble('jscripts','javascript'),//false);
    scramble('aabbcamaomsccdd','commas'),//true);
   )
//    function scramble(str1, str2) {
//  let count = 0;
//  let str1Map = {};
//  let str2Map = {};

//  for (let i = 0; i < str1.length; i++) {
//      str1Map[str1[i]] ? str1Map[str1[i]]++ : str1Map[str1[i]] = 1
//  }

//  for (let i = 0; i < str2.length; i++) {
//      if (str1.includes(str2[i])) count++;
//          str2Map[str2[i]] ? str2Map[str2[i]]++ : str2Map[str2[i]] = 1;
//  }
//      return isSameCharCount(str1Map,str2Map,str2) && count === str2.length
// }
// function isSameCharCount(map1, map2, str2) {

//      for (let i = 0; i < str2.length; i++) {
//          if (map2[str2[i]] > map1[str2[i]]) return false;
//      }
//      return true;
// }