function findOutlier(integers){



    let numArray = integers.filter(num => Math.abs(num) % 2 === 0) ;


    if (numArray.length === 1) return numArray[0]
    else return integers.filter(num => Math.abs(num) % 2 === 1)[0]
  }
console.log(
    findOutlier([0, 1, 2]),// 1)
    findOutlier([1, 2, 3]), //2)
    findOutlier([2,6,8,10,3]), //3)
    findOutlier([0,0,3,0,0]),// 3)
    findOutlier([1,1,0,1,1]),// 0)
)