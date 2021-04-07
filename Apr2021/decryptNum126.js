function decrypt(s) {
    for (let i = 1; i < 10; i++) {
        if (Number(String(i) + s) % 11 === 0) {
            return (Number(String(i) + s) / 11).toString().slice()
        }
    }
    return "impossible"
  }
  console.log(
    decrypt("8657355522031207" ),//'8968850502002837'
    // decrypt("353"),//"123")

    // decrypt("444"),//"404")

    // decrypt("123456"),//"738496")

    // decrypt("147"),//"377")

    // decrypt("4334"),//"impossible")
  )