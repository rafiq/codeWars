function remove(str, what) {
    let newStr = "";
        for (let i = 0; i < str.length; i++) {
            if (what[str[i]] > 0) {
                what[str[i]]--;
            } else {
                newStr += str[i]
            }
        }
    return newStr
  }

  console.log(
    remove('this is a string',{'t':1, 'i':2}),//'hs s a string');
    remove('hello world',{'x':5, 'i':2}),//'hello world');
    remove('apples and bananas',{'a':50, 'n':1}),//'pples d bnns');
    remove('a',{'a':1, 'n':1}),//'');
    remove('codewars',{'c':5, 'o':1, 'd':1, 'e':1, 'w':1, 'z':1, 'a':1, 'r':1, 's':1}),//'');
  )