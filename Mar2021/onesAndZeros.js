const binaryArrayToNumber = arr => {

    return parseInt(arr.join(""),2);
  };
  console.log(
    binaryArrayToNumber([0,0,0,1]),// 1);
    binaryArrayToNumber([0,0,1,0]),// 2);
    binaryArrayToNumber([1,1,1,1]),// 15);
    binaryArrayToNumber([0,1,1,0]),// 6);
  )