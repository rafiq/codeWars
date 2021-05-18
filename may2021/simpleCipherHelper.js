function SubstitutionCipher(abc1, abc2) {

    // this.encode = function (str) {
    //     let result = "";

    //     for (let i = 0; i < str.length; i++) {
    //        if (abc1.includes(str[i])) {
    //            result += abc2[abc1.indexOf(str[i])]
    //        } else {
    //            result += str[i]
    //        }
    //     }
    //     return result;
    // }
    // this.decode = function (str) {
    //   let result = "";

    //   for (let i = 0; i < str.length; i++) {
    //       if (abc2.includes(str[i])) {
    //           result += abc1[abc2.indexOf(str[i])]
    //       } else {
    //           result += str[i]
    //       }
    // }
    // return result;
    // }

// ! My answer above worked fine and is proabably faster than the answer below, but the answer below is quick and
    this.encode = function (s) {
        return s.split('').map(function(_){ return t[f.indexOf(_)] || _; }).join('');
      }
      this.decode = function (s) {
        return s.split('').map(function(_){ return f[t.indexOf(_)] || _; }).join('');
      }
  }

  var abc1 = "abcdefghijklmnopqrstuvwxyz";
  var abc2 = "etaoinshrdlucmfwypvbgkjqxz";

  var sub = new SubstitutionCipher(abc1, abc2);

  console.log(
    sub.encode("abc"), // => "eta"
    sub.encode("xyz"), // => "qxz"
    sub.encode("aeiou"), // => "eirfg"
    sub.encode("t_fo&*83"), // => "eirfg"

    sub.decode("eta"), // => "abc"
    sub.decode("qxz"), // => "xyz"
    sub.decode("eirfg") ,// => "aeiou"
    sub.decode("t_fo&*83") ,// => "aeiou"
  )