function bigToSmall(arr){
    let result = [];
    arr.forEach(array => result = result.concat(array))
    return result.sort((a,b) => b - a).join(">");
  }
  console.log(
      bigToSmall([[1,2],[3,4],[5,6]]) ,// "6>5>4>3>2>1");
      bigToSmall([[1,3,5],[2,4,6]]) , //"6>5>4>3>2>1");
      bigToSmall([[1,1],[1],[1,1]]) , //"1>1>1>1>1");),//
  )