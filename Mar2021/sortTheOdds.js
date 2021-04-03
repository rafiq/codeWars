function sortArray(array) {


    let oddsArray = array.filter(num => Math.abs(num) % 2 === 1).sort((a,b) => b - a);
    return array.reduce((acc,curr) => {
        if (Math.abs(curr) % 2 === 1) acc.push(oddsArray.pop())
        else acc.push(curr)
        return acc;
    },[])
    // return oddsArray
  }
  console.log(
    sortArray([ -29, 7, -30, 25, 22, -42, -34, 17, 0, -22, 34, 50, 48, -21, -10, 22, 19 ]),// [-29, -21, -30, 7, 22, -42, -34, 17, 0, -22, 34, 50, 48, 19, -10, 22, 25]
    // sortArray([5, 3, 2, 8, 1, 4]),// [1, 3, 2, 8, 5, 4]);
    // sortArray([5, 3, 1, 8, 0]),// [1, 3, 5, 8, 0]);
    // sortArray([]),//[]);
  )