function parseMolecule(formula) {
    let periodicTable = {};
    let alphaNum = "ABCDEFGHIJKLMNOPQRTUVWXYZ0123456789";
    let lowercase = "ABCDEFGHIJKLMNOPQRTUVWXYZ".toLowerCase();
    // for (let i = formula.length - 1; i >= 0; i--) {
    //     if (alphaNum.includes(formula[i])) {
    //         if (typeof Number(formula[i]) === "number") {
    //             periodicTable[formula[i - 1]] ? periodicTable[formula[i - 1]]++ : periodicTable[formula[i - 1]] = Number(formula[i])
    //         } else {
    //             if (periodicTable[formula[i]]) {
    //                 periodicTable[formula[i]]++
    //             } else {
    //                 periodicTable[formula[i]] = 1;
    //             }
    //         }
    //     } //else if (what to do if brackets) {}
    // }
    // return periodicTable
    let elementsStr = formula.replace(/[^A-Z]/gi,"")
    for (let char = 0; char < elementsStr.length; char++) {
        if (lowercase.includes(elementsStr[char + 1])) {
            periodicTable[elementsStr[char] + elementsStr[char + 1]] ? periodicTable[elementsStr[char] + elementsStr[char + 1]]++ : periodicTable[elementsStr[char] + elementsStr[char + 1]] = 1;
        } else {
            periodicTable[elementsStr[char]] ? periodicTable[elementsStr[char]]++ : periodicTable[elementsStr[char]] = 1;
        }
    }
        return periodicTable
  }
  console.log(
    parseMolecule("H2O"),//// {H: 2, O: 1}),// "Should parse water");
    parseMolecule("Mg(OH)2"),//// {Mg: 1, O: 2, H: 2}),// "Should parse magnesium hydroxide: Mg(OH)2");
    parseMolecule("K4[ON(SO3)2]2"),//// {K: 4, O: 14, N: 2, S: 4}), "Should parse Fremy's salt: K4[ON(SO3)2]2");
  )

  function mul(a, b) {
    return a * b;
  }

  function isLower(char) {
    return char == char.toLowerCase() && char != char.toUpperCase();
  }

  function isUpper(char) {
    return char != char.toLowerCase() && char == char.toUpperCase();
  }

  function isCloseBracket(char) {
    return c == ')' || c == ']' || c == '}';
  }

  var open  = { '{':'}',
                '[':']',
                '(':')', };
  var close = { '}':'{',
                ']':'[',
                ')':'(', };

  function parseMolecule(formula) {
    "use strict";
    var chars = formula.split('').reverse().map(function(c){return open[c] || close[c] || c});
    var elem = "";
    var curMult = 1;
    var stack = [];
    var elements = {};
    for (let i = 0; i < chars.length; i++) {
      var c = chars[i];
      if (isLower(c)) elem = c;
      else if (isUpper(c)) {
        elem = c + elem;
        if (elem in elements) {
          elements[elem] += curMult * stack.reduce(mul, 1);
        } else {
          elements[elem] = curMult * stack.reduce(mul, 1);
        }
        curMult = 1;
        elem = "";
      }
      else if (c in open) {
        stack.push(curMult);
        curMult = 1;
      }
      else if (c in close) stack.pop();
      else if (!isNaN(c)) {
        curMult = (curMult === 1) ? c : c + curMult;
      }
    }
    return elements;
  }

  const unbracket = str => {
    let pattern = /[{[(](\w+)[)\]}](\d*)/g; // '(OH)2', '[HNO3]4'
    while (pattern.test(str)) {
      str = str.replace(pattern, (_, group, n) => group.repeat(n || 1));
    }
    return str;
  };

  const undigit = str => {
    let pattern = /([A-Z][a-z]*)(\d+)/g; // 'O2', 'Fe3'
    return str.replace(pattern, (_, atom, n) => atom.repeat(n));
  };

  const countIt = str => {
    let atoms = str.match(/[A-Z][a-z]?/g); // 'O', 'H', 'Fe'
    let composition = {};
    for (let atom of atoms) composition[atom] = (composition[atom] || 0) + 1;
    return composition;
  };

  const parseMolecule = formula => countIt(undigit(unbracket(formula)));