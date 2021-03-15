function longest(s1, s2) {
    let set = new Set();
    let array = s1.concat(s2).split("")

    for (let el of array) {
        set.add(el)
    }
    return set.values();

  }
  console.log(
    longest("aretheyhere", "yestheyarehere"), //"aehrsty")
    longest("loopingisfunbutdangerous", "lessdangerousthancoding"),// "abcdefghilnoprstu")
    longest("inmanylanguages", "theresapairoffunctions"),// "acefghilmnoprstuy")
  )