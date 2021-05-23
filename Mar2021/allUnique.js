function hasUniqueChars(str){

    for (let i = 0; i < str.length; i++) {
        if (str.indexOf(str[i]) !== str.lastIndexOf(str[i])) return false;
    }
    return true;
  }
  console.log(
    hasUniqueChars("  nAa"),//false) // because there are two spaces ' '
    hasUniqueChars("abcdef"),//true)
    hasUniqueChars("aA"),//true) // case - sensitivity
    hasUniqueChars("++-"),//false) // because there are two '+'
  )