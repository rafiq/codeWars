function findOutlier(integers){


    return [integers.filter(odds => Math.abs(odds) % 2 === 1) , integers.filter(evens => Math.abs(evens) % 2 === 0)].reduce((acc,curr) => {
        if (curr.length === 1) acc = curr[0];
        return acc;
    },0)
  }
  console.log(
    findOutlier([0, 1, 2]),//1)
    findOutlier([1, 2, 3]),//2)
    findOutlier([2,6,8,10,3]),//3)
    findOutlier([0,0,3,0,0]),//3)
    findOutlier([1,1,0,1,1]),//0)
    findOutlier([ 2, -6, 8, -10, -3 ]),//-3)
  )