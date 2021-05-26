var arrayLeaders = numbers => {
    let result = [];

    numbers.forEach((num,idx) => {
        if (num > numbers.slice(idx + 1).reduce((acc,curr) => acc + curr,0)) {
            result.push(num);
        }
    });
    return result ;
  }
  console.log(
    arrayLeaders([1,2,3,4,0]),// [4])
    arrayLeaders([16,17,4,3,5,2]),// [17,5,2])
    arrayLeaders([-1,-29,-26,-2]),// [-1])
    arrayLeaders([-36,-12,-27]),//  [-36,-12])
    arrayLeaders([5,-2,2]),// [5,2])
    arrayLeaders([0,-1,-29,3,2]),//  [0,-1,3,2])
  )