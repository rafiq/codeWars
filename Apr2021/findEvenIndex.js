function findEvenIndex(arr) {
    let leftSum = 0;
    let rightSum = 0;

    for (let i = 0; i < arr.length; i++) {
        leftSum = arr.slice(0,i).reduce((acc,curr) => acc + curr,0);
        rightSum = arr.slice(i + 1).reduce((acc,curr) => acc + curr,0);
        // console.log([leftSum,rightSum,i])
        if (leftSum === rightSum) return i;
    }
    return -1;
}
console.log(
    findEvenIndex([1,2,3,4,3,2,1]),//3;
    findEvenIndex([1,2,3,4,5,6]),//-1
    findEvenIndex([20,10,-80,10,10,15,35]),//3;
    findEvenIndex([-1,-2,-3,-4,-3,-2,-1]),//3;
    // findEvenIndex([1,2,3,4,3,2,1]),//3;
)