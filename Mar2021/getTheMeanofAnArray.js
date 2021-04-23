function getAverage(marks){

    return Math.floor((marks.reduce((acc,curr) => {
        acc += curr;
        return acc ;
    },0)) / marks.length)
  }
console.log(
   getAverage([2,2,2,2]),//2);
   getAverage([1,2,3,4,5,]),//3);
   getAverage([1,1,1,1,1,1,1,2]),//1);
)