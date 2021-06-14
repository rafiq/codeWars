function queueTime(customers, n) {


    let linesArray = new Array(n).fill(0);
    let lowestIndex = 0;
    for (let i = 0; i < customers.length; i++) {
        linesArray[lowestIndex] += customers[i];
        lowestIndex = linesArray.indexOf(Math.min(...linesArray));
    }
    return   Math.max(...linesArray)
  }
  console.log(
    queueTime([], 1),// 0),////
    queueTime([1,2,3,4], 1),// 10),////
    queueTime([2,2,3,3,4,4], 2),// 9),////
    queueTime([1,2,3,4,5], 100),// 5),////
  )