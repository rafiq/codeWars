function longest(str) {
    let initial = str[0];
    let max = 0;
    let tempStr = "";
    let maxStr = str[0];

    for (let i = 0; i < str.length; i++) {
        if (str[i] >= initial) {
            tempStr += str[i]
            initial = str[i];
        } else {

            initial = str[i];
            if (maxStr.length < tempStr.length) {
                maxStr = tempStr;
                tempStr = "";
            }
        }


    }
    return tempStr;
  }
  console.log(
    longest('asd'),//as'],
    longest('nab'),//ab'],
    longest('abcdeapbcdef'),//abcde'],
    longest('asdfaaaabbbbcttavvfffffdf'),//aaaabbbbctt'],
    longest('asdfbyfgiklag'),//fgikl'],
    longest('z'),//z'],
    longest('zyba'),//z'])
  )

  function longest(str) {
    let max = 0;
    let cur = 0;
    let pos = 0;
    for (let i = 1; i < str.length; ++i) {
      if (str[i-1] <= str[i]) {
        ++cur;
        if (cur > max) {
          max = cur;
          pos = i - max;
        }
      } else {
        cur = 0;
      }
    }
    return str.slice(pos, max+1+pos);
  }