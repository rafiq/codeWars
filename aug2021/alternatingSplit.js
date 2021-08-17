function encrypt(text, n) {
    let count = n
    let copy = text
    if (count < 1 || text === "") return text

    const keyMaker = str => {
        let front = ""
        let back = ""

        for (let i = 0; i < str.length; i++) {
            if (i % 2 === 0) back += str[i]
            else front += str[i]
        }

        return front + back
    }

    while (count) {
        copy = keyMaker(copy)
        count--
    }
    return copy
}

function decrypt(encryptedText, n) {
    let copy = encryptedText
    if (n < 1 || encryptedText === "") return encryptedText

    const keyMaker = str => {
        let i = 0
        let j = Math.floor(str.length / 2)
        let temp = ""

        while (j < str.length) {
            temp += str[j] + str[i]
            i++
            j++
        }
        return temp
    }

    while (n) {
        copy = keyMaker(copy)
        n--
    }
    return copy
}
console.log(
    decrypt("This is a test!", 0),// "This is a test!");
    decrypt("hsi  etTi sats!", 1),// "This is a test!");
    decrypt("s eT ashi tist!", 2),// "This is a test!");
    decrypt(" Tah itse sits!", 3),// "This is a test!");
    decrypt("This is a test!", 4),// "This is a test!");
    decrypt("This is a test!", -1),// "This is a test!");
    decrypt("hskt svr neetn!Ti aai eyitrsig", 1),// "This kata is very interesting!");
        // encrypt("This is a test!", 0),// "This is a test!");
        // encrypt("This is a test!", 1),// "hsi  etTi sats!");
        // encrypt("This is a test!", 2),// "s eT ashi tist!");
        // encrypt("This is a test!", 3),// " Tah itse sits!");
        // encrypt("This is a test!", 4),// "This is a test!");
        // encrypt("This is a test!", -1),// "This is a test!");
        // encrypt("This kata is very interesting!", 1),// "hskt svr neetn!Ti aai eyitrsig");
)

function encrypt(text, n) {
    console.log(text, n);
    if (!text || n <= 0) return text;
    while (n--) {
      let ans = '';
      for (let i = 1; i < text.length; i += 2) {
        ans += text[i];
      }
      for (let i = 0; i < text.length; i += 2) {
        ans += text[i];
      }
      text = ans;
    }
    return text;
  }

  function decrypt(encryptedText, n) {
    if (!encryptedText || n <= 0) return encryptedText;
    const ans = new Array(encryptedText.length);
    while (n--) {
      let j = 0;
      for (let i = 1; i < ans.length; i += 2) {
        ans[i] = encryptedText[j++];
      }
      for (let i = 0; i < ans.length; i += 2) {
        ans[i] = encryptedText[j++];
      }
      encryptedText = ans.join('');
    }
    return encryptedText;
  }