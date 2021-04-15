function firstToLast(str,c){
    let firstPos  = str.indexOf(c);
    let lastPos = str.lastIndexOf(c);
    if (str.indexOf(c) === -1) return -1;
    if (firstPos === lastPos) return 0 ;
    else return lastPos - firstPos;
    // return lastPos;

  }
console.log(
firstToLast("ababc","a") ,// return 2(2-0)
firstToLast("ababc","c") ,// return 0(4-4)
firstToLast("ababc","d") ,// return -1
)