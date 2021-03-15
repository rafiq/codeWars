function squareDigits(num){



    return num.toString().split("").reduce((acc,curr) =>{
         acc += String(curr**2)

         return Number(acc )
        },"");

  }
console.log(
    squareDigits(9119),// 811181
)