function chooseBestSum(t, k, ls) {
    // if (!ls || ls.length === 0) return [[]];
    // let firstElement = ls[0] //? ls[0] : 0;
    // let theRest = ls.slice(1);
    // let combinationsWithoutFirst = chooseBestSum(theRest);
    // let combsWithFirst = [];

    // combinationsWithoutFirst.forEach(el => {
    //     let comboWithFirst = [...el,firstElement];
    //     combsWithFirst.push(comboWithFirst);
    // })

    // return [...combinationsWithoutFirst, ...combsWithFirst]
    // let combinations = [];

    // for (let i = 0; i < ls.length; i++) {
    //     for (let j = i + 1; j < ls.length + 1; j++) {
    //         combinations.push(ls.slice(i,j))
    //     }
    // }
    // return combinations.filter(el => el.length === k);
}
console.log(
    chooseBestSum(163, 3, [50, 55, 56, 57, 58]),// 163)
    // chooseBestSum(163, 3, [50]),// null)
    // chooseBestSum(230, 3, [91, 74, 73, 85, 73, 81, 87]),// 228)
)