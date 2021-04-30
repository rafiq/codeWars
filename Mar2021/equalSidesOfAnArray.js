function findEvenIndex(arr)
{
    let leftArr = [];
    let rightArr = [];
    for (let i = 0; i < arr.length; i++) {
        leftArr = arr.slice(0,i);
        rightArr = arr.slice(i + 1)

        if (leftArr.reduce((a,b) => a + b,0) === rightArr.reduce((a,b) => a + b,0)) {
            return i;
        }
    }
    return -1
    // return arr.slice(0,0).reduce((a,b) => a + b,0) ;
}
console.log(
    findEvenIndex([1,2,3,4,3,2,1]),//3, "The array was: [1,2,3,4,3,2,1] \n");
    findEvenIndex([1,100,50,-51,1,1]),//1, "The array was: [1,100,50,-51,1,1] \n");
    findEvenIndex([1,2,3,4,5,6]),//-1, "The array was: [1,2,3,4,5,6] \n");
    findEvenIndex([20,10,30,10,10,15,35]),//3, "The array was: [20,10,30,10,10,15,35] \n");
)