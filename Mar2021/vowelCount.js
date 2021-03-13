function getCount(str) {
    var vowelsCount = 0;
    let vowels = "aeiouAEIOU"
    str.split("").forEach(letter => {
        if (vowels.includes(letter)) {
            vowelsCount++;
        }
    })

    return vowelsCount;
  }

  console.log(
    getCount("abracadabra"),// 5)
  )