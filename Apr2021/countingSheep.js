var countSheep = function (num){
  return new Array(num).fill(0).map((el,idx) => `${idx + 1} sheep...`).join("");
}
console.log(
  countSheep(1),// "1 sheep...");
  countSheep(2),// "1 sheep...2 sheep...");
  countSheep(3),// "1 sheep...2 sheep...3 sheep...");
)

// function countSheeps(arrayOfSheep) {
//     //    let numOfSheep = arrayOfSheep.filter(word => word === true).length;
//     //     if (numOfSheep === 0 || numOfSheep === null || numOfSheep === undefined) numOfSheep = "no"
//     //     // return `There are ${numOfSheep} sheeps in total`
//     //     return "There are " + numOfSheep + " sheeps in total"


//       return arrayOfSheep.filter(x => x === true) ? arrayOfSheep.filter(x => x === true).length : 0;
//     }
//     console.log(
//         countSheeps([true,  true,  true,  false,
//             true,  true,  true,  true ,
//             true,  false, true,  false,
//             true,  false, false, true ,
//             true,  true,  true,  true ,
//             false, false, true,  true ]),//17
//     )