function duplicates(array){

    // if (array.length === 0) return 0
    return Object.values(array.reduce((acc,curr) => {
        acc[curr] ? acc[curr]++ : acc[curr] = 1;
        return acc;
    },{})).reduce((acc,curr) => {
        let count = 0;
        if (curr > 1) acc += Math.floor(curr / 2);
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