function maxProduct(numbers, size){

    let sortedArr = numbers.sort((a,b) => a - b)
    return sortedArr.slice(-size).reduce((acc,curr) => {
        acc *= curr;

        return acc;
    },1)
    // return numbers.sort((a,b) => a - b).reduce((acc,curr,idx) => );
  }
  console.log(
    maxProduct([4,3,5], 2),//20);
    maxProduct([10,8,7,9], 3),//720);
    maxProduct([8,6,4,6], 3),//288);
    maxProduct([10,2,3,8,1,10,4], 5),//9600);
    maxProduct([13,12,-27,-302,25,37,133,155,-14], 5),//247895375);
    maxProduct([-4,-27,-15,-6,-1], 2),//4);
    maxProduct([-17,-8,-102,-309], 2),//136);
    maxProduct([10,3,-27,-1], 3),//-30);
    maxProduct([14,29,-28,39,-16,-48], 4),//-253344);
    maxProduct([1], 1),//1);
  )