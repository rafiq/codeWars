function digPow(n, p){

    let targetNum = n.toString().split("").reduce((acc,curr,idx) => {

        acc += Math.pow(curr,idx + p);
        return acc;
    },0)
    let k = targetNum / n;

    return k % 1 === 0 ? k : -1;
  }
  console.log(
    digPow(89, 1),//1)
    digPow(92, 1),//-1)
    digPow(46288, 3),//51)
  )