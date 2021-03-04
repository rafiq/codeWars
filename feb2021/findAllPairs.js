function duplicates(array){
    if (array.length <= 1) return 0;
    let arrayTable = {};

    for (let i = 0; i < array.length; i++) {

        if (arrayTable[array[i]] === undefined) {
            arrayTable[array[i]] = 1;
        } else {
            arrayTable[array[i]]++;
        }
    }

    let results = Object.entries(arrayTable);
    return results;

}
console.log(
    duplicates([1, 2, 5, 6, 5, 2]),//2
)