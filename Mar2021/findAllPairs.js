function duplicates(array){
    let pairsMap = {};

    array.forEach(num => {
        if (pairsMap[num]) pairsMap[num]++;
        else pairsMap[num] = 1;
    })
    let pairArray =  Object.values(pairsMap);
    return pairArray.reduce((acc,curr,idx) => {
        if (curr >= 2) acc += Math.floor(curr / 2);
        return acc;
    },0);
    }
console.log(
    duplicates([1, 2, 5, 6, 5, 2]),//2 );
    duplicates([1, 2, 2, 20, 6, 20, 2, 6, 2]),//4 );
    duplicates([0, 0, 0, 0, 0, 0, 0]),//3 );
    duplicates([1000, 1000]),//1 );
    duplicates([]),//0 );
    duplicates([54]),//0 );
)