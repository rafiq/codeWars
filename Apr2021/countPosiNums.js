function countPositivesSumNegatives(input) {
    let negNums = 0;
    let posiNums = 0;

    // for (let i = 0; i < input.length; i++) {
    //     if (input[i] < 0) negNums += input[i];
    //     else posiNums++;
    // }

    // return [posiNums,negNums]


    return input.reduce((acc,curr) => {
      if (curr) {
          if (curr < 1) negNums += curr;
          else  posiNums++;
        }
      return [posiNums,negNums];
    },[]);


  }
  console.log(
    countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]),//[10, -65]
    countPositivesSumNegatives([ 0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14 ]),//[8, -50]

  )