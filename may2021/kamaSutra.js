function KamaSutraCipher(key) {
    //...
    this.encode = function (str) {

        let result = "";

        for (let letter of str) {
            for (let el of key) {
                if (el.includes(letter)) {
                    result += el[0] === letter ? el[1] : el[0]
                }
        }
    }
    return result
    };
    this.decode = function (str) {
        let result = "";

        for (let letter of str) {
            for (let el of key) {
                if (el.includes(letter)) {
                    result += el[0] === letter ? el[1] : el[0]
                }
        }
    }
    return result
    }
  }
  var key = [
    ['d', 'p'],
    ['n', 'o'],
    ['a', 'w'],
    ['f', 'c'],
    ['h', 's'],
    ['l', 'v'],
    ['m', 'j'],
    ['x', 'b'],
    ['e', 'z'],
    ['r', 'i'],
    ['k', 'y'],
    ['u', 'q'],
    ['t', 'g']
  ];
  var c = new KamaSutraCipher(key);
  console.log(
    c.encode('mutt'),// 'jqgg'),
    c.encode('panda'), //'dwopw'),
  )
  function KamaSutraCipher(key) {
    var dict = key.reduce(function(dict, pair) {
      dict[pair[0]] = pair[1]
      dict[pair[1]] = pair[0]
      return dict
    }, {})

    this.encode = this.decode = function(str) {
      return str.replace(/./g, function(c) {
        return dict[c] || c
      })
    }
  }