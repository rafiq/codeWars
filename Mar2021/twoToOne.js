function longest(s1, s2) {
    let array = s1.concat(s2).split("")

    return Array.from(new Set(array)).sort().join("");
  }
  console.log(
    longest("aretheyhere", "yestheyarehere"), //"aehrsty")
    longest("loopingisfunbutdangerous", "lessdangerousthancoding"),// "abcdefghilnoprstu")
    longest("inmanylanguages", "theresapairoffunctions"),// "acefghilmnoprstuy")
  )