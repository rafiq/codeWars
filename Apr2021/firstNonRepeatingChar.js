function firstNonRepeatingLetter(s) {
    let result = "";
    let copyStr = s.slice().toLowerCase();

    for (let i = 0; i < copyStr.length; i++) {
        if (copyStr.indexOf(copyStr[i]) === copyStr.lastIndexOf(copyStr[i])) {
            result += s[i];
            break;
        }
    }
    return result;
  }
  console.log(
    firstNonRepeatingLetter('a'),//'a');
    firstNonRepeatingLetter('sTress'),//'t');
    firstNonRepeatingLetter('moonmen'),//'e');
    firstNonRepeatingLetter('sTreSS'),//'T');
  )
// This was a nice way to solve this problem and find the non repeating char by using new regex of each letter and matching that letter globally in the original string. If the length of the resulting array is one, then you know that is the non repeating char. However, I didn't know this would stop at the first one. How would we know that? I guess you can't have a single letter if it is duplicated. Duh!
  function firstNonRepeatingLetter(s) {
    for(var i in s) {
      if(s.match(new RegExp(s[i],"gi")).length === 1) {
        return s[i];
      }
    }
    return '';
  }