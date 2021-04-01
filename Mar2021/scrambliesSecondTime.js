function scramble(str1, str2) {
    // let str1Map = str1.split("").reduce((acc,curr) => {
    //     acc[curr] ? acc[curr]++ : acc[curr] = 1;
    //     return acc;
    // },{});
    // let str2Map = str2.split("").reduce((acc,curr) => {
    //     acc[curr] ? acc[curr]++ : acc[curr] = 1;
    //     return acc;
    // },{})
    // let str2Keys = Object.keys(str2Map);

    //     for (let i = 0; i < str2Keys.length; i++) {
    //         console.log(str2Keys[i])
    //         if (str2Map[str2Keys[i]] > str1Map[str2Keys[i]] || !str1Map[str2Keys[i]]) {
    //             return false;
    //         }
    //     }
    //     return true;

    // I am having a hard time understanding what is happening in the code bleow. It seems that they are making an array with letter of str 2 being added to the array in its ascii number, and then it is deleting each ascii number from the array that is in the second string, and if the string is length zero, then that means that all the letters in str1 were in str2.
    var hashtab = [...new Array(256)].map(x => 0);

  str2.split('').forEach(ele => console.log(hashtab[ele.charCodeAt(0)]++));
  str1.split('').forEach(ele => hashtab[ele.charCodeAt(0)]--);

  hashtab = hashtab.filter (x=>x > 0);

  return hashtab.length == 0;
    }

   console.log(
    scramble('rkqodlw','world'),//true);
    scramble('cedewaraaossoqqyt','codewars'),//true);
    scramble('katas','steak'),//false);
    scramble('scriptjava','javascript'),//true);
    scramble('scriptingjava','javascript'),//true);
    scramble('scriptsjava','javascripts'),//true);
    scramble('jscripts','javascript'),//false);
    scramble('aabbcamaomsccdd','commas'),//true);
   )