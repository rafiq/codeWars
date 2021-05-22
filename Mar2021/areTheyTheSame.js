let a1 = [121, 144, 19, 161, 19, 144, 19, 11];
let a2 = [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19];

function comp(array1, array2){
    if (!array1 || !array2 || array1.length !== array2.length) return false;
    let sortedArr1 = array1.sort((a,b) => a - b);
    let sortedArr2 = array2.sort((a,b) => a - b);

    for (let i = 0; i < sortedArr1.length; i++) {
        if (sortedArr1[i]**2 !== sortedArr2[i]) return false;
    }
    return true;
    // return `${sortedArr1}\n${sortedArr2}\n`
  }

  console.log(
    comp(a1, a2),// true);
    comp([ 0 ] ,[ 0 ]),// true);
    comp([121, 144, 19, 161, 19, 144, 19, 11],[132, 14641, 20736, 361, 25921, 361, 20736, 361]),// false
  )