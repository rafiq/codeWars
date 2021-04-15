function minSum(arr) {
    let middleIndex = arr.length / 2;
    let sum = 0;
    let sortedArray = arr.sort((a,b) => a - b);
    let i = 0;
    let j = sortedArray.length - 1;

    while (i < j) {
        sum += sortedArray[i] * sortedArray[j];
        i++;
        j--;
    }

    return sum;
  }
  console.log(
    minSum([5,4,2,3]),// 22);
    minSum([12,6,10,26,3,24]),// 342);
    minSum([9,2,8,7,5,4,0,6]),// 74);
  )