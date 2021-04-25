function findOdd(A) {


    // for (let i = 0; i < A.length; i++) {
    //     for (let j = i + 1; j < A.length; j++) {
    //         if (A[i])
    //     }
    // }

    let mapping = {}

    A.forEach(num => {
        if (mapping[num]) mapping[num]++;
        else mapping[num] = 1;
    })
    let result = 0;
   Object.entries(mapping).map(num => {
        if (num[1] % 2 === 1) result = Number(num[0])
    });

    return result;
  }

  console.log(
    findOdd([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5]), //5);
    findOdd([1,1,2,-2,5,2,4,4,-1,-2,5]),// -1);
    findOdd([20,1,1,2,2,3,3,5,5,4,20,4,5]),// 5);
    findOdd([10]), //10);
    findOdd([1,1,1,1,1,1,10,1,1,1,1]),// 10);
    findOdd([5,4,3,2,1,5,4,3,2,10,10]),//1);
  )