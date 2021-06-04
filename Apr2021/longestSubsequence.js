function LCS(x, y) {
    let [longer,shorter] = x.length > y.length ? [x,y] : [y,x];
    let shorterSubsequence = combu(shorter);
    let longerSubsequence = combu(longer);
    shorterSubsequence.sort((a,b) => b.length - a.length)
    longerSubsequence.sort((a,b) => b.length - a.length)

    for (let i = 0; i < shorterSubsequence.length; i++) {
        if (longerSubsequence.includes(shorterSubsequence[i])) {
            return shorterSubsequence[i]//.join("");
        }
    }
    return "";

  }
  console.log(
    // LCS("a", "b"),// "");
    // LCS("abcdef", "abc"),// "abc");
    LCS("ac", "abc"),// "abc");
  )
  function combString(str){
    var lenStr = str.length;
    var result = [];
    var indexCurrent = 0;

    while(indexCurrent < lenStr){
        var char = str.charAt(indexCurrent);
        var x;
        var arrTemp = [char];

        for(x in result) {
               arrTemp.push(""+result[x]+char);
        }
        result = result.concat(arrTemp);
        indexCurrent++;
    }
    return result;
}
function combu(s){
    var buff = [];
    var res = [];
    for (i=0;i<s.length;i++){
        buff = [s[i]];
        var index=0;
        while(res[index]){
            buff.push(''+res[index]+s[i]);
            index++;
        }
        res = res.concat(buff);
    }
    return res;
    }

    // Different answers
    function LCS(x, y) {
        yChar=y.split("");
        var start=0;
        var arr=[];
        for(var i=0;i<yChar.length;i++){
          pos=x.indexOf(yChar[i],start);
          if(pos>=start){
            arr.push(yChar[i]);
            start=pos+1;
          }
        }
        return arr.join("");
      }
    //   Anotehr  WHAT!?!?!?! I can just splice the answer out!?
    function LCS(x, y) {
        x = x.split("");

        return y.split("").filter((item) => {
          if (x.indexOf(item) !== -1) {
            return x.splice(0, x.indexOf(item) + 1);
          }
        }).join("");
      }

    //   ANTOHER
    function sequences(x) {
        return x.split('').reduce(function (prev, current) {
          return prev.concat(prev.map(function (elem) {
            return elem + current;
          }));
        }, [""]);
      }


      function LCS(x, y) {
        var x_seq = sequences(x);
        var y_seq = sequences(y);
        return x_seq.reduce(function (prev, current) {
          if (current.length > prev.length && y_seq.indexOf(current)> -1) {
            prev = current;
          }
          return prev;
        },"");

      }
//
function LCS(x, y) {

    const [ l, s ] = y.length <= x.length ? [ x, y ] : [ y, x ]

     return s
      .split('')
      .filter((char, i) => ~l
        .slice(i)
        .indexOf(char))
      .join('')
    }