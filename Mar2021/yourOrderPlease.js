function order(words){
    let wordArray = words.split(" ");
    let orderArr = words.replace(/[a-z]/gi,"").split(" ");
    let mapping = {}

    for (let i = 0; i < wordArray.length; i++) {
        mapping[orderArr[i]] = wordArray[i];
    }

    return Object.values(mapping).join(" ");
  }

  console.log(
    order("is2 Thi1s T4est 3a"),// "Thi1s is2 3a T4est")
    order("4of Fo1r pe6ople g3ood th5e the2"),// "Fo1r the2 g3ood 4of th5e pe6ople")
    order(""),// "")
  )