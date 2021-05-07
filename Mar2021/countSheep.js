function countSheeps(arrayOfSheep) {
    let numOfSheep = arrayOfSheep.filter(word => word === true).length;
    if (numOfSheep === 0 || numOfSheep === null || numOfSheep === undefined) numOfSheep = "no"
    // return `There are ${numOfSheep} sheeps in total`
    return "There are " + numOfSheep + " sheeps in total"
  }
console.log(
countSheeps([true,  true,  true,  false,
    true,  true,  true,  true ,
    true,  false, true,  false,
    true,  false, false, true ,
    true,  true,  true,  true ,
    false, false, true,  true]),//17
)