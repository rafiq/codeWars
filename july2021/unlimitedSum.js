function sum(...args){

    let total = 0;
    args.forEach(el => {
        if (typeof el === "number" || el % 1 === 0) total += Math.floor(el)
    })
    return total
  }
  console.log(
    sum(1,11,111), ///123);
    sum(4,true,4,"A",4,"99"),// 12, "should reject non integers");
  )