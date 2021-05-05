function descendingOrder(n){
    return (+n.toString().split("").map(el => Number(el)).sort((a,b) => b - a).join(""));
  }
  console.log(
    descendingOrder(0),//0)
    descendingOrder(1),//1)
    descendingOrder(123456789),//987654321)
  )