function digital_root(n) {
    let sum = 0;
    // if (n < 10) return n
    // if (n < 10) return n;
    // while (n > 10) {
    //     let lastDigit = n % 10;
    //     let remainder = (n - lastDigit )/ 10
    //     sum = lastDigit + remainder;
    // }
    // return sum;


    let result = n.toString().split("").reduce((acc,curr,idx) => {
        acc += Number(curr)

        return acc;
    },0)
    if (result > 9) {
        result = digital_root(result)
    }
    return result
  }

  console.log(
    digital_root(16),// 7 )
    digital_root(456), //6 )
  )