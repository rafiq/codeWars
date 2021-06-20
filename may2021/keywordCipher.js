function KeywordCipher(abc, keyword) {
    this.encode = function (str) {
      let result = "";
      for (let letter of str) {
          if (abc.indexOf(letter) < key.length - 1) {
            result += key[abc.indexOf(letter)]
          } else {
              result += letter;
          }
      }
        return result
    }
    this.decode = function (str) {
        let result = "";
        for (let letter of str) {
            if (key.indexOf(letter) < key.length - 1) {
              result += abc[key.indexOf(letter)]
            } else {
                result += letter;
            }
        }
        return result;
    }
}
var abc = "abcdefghijklmnopqrstuvwxyz";
var key = "keyword";
var cipher = new KeywordCipher(abc, key);
  console.log(

    cipher.encode("abc"),// "key");
    cipher.encode("xyz"),// "vxz");
    cipher.decode("key"),// "abc");
    cipher.decode("vxz"),// "xyz");
  )

  this.encode = function (str) {
    // ...
    let e=[...new Set([...keyword+abc])].join('');
    return [...str].map(x=>e[abc.indexOf(x)]||x).join('')
  }
  this.decode = function (str) {
    // ...
   let e=[...new Set([...keyword+abc])].join('');
    return [...str].map(x=>abc[e.indexOf(x)]||x).join('')
  }