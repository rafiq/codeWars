function dbSort(a){
    let numsArray = [];
    let strArray = [];

    a.forEach(el => {
        if (typeof el === "number")numsArray.push(el);
        if (typeof el === "string") strArray.push(el);
    });

    return numsArray.sort((a,b) => a - b).concat(strArray.sort())
    }
    console.log(
        dbSort([6, 2, 3, 4, 5]),// [2, 3, 4, 5, 6]);
        dbSort([14, 32, 3, 5, 5]),// [3, 5, 5, 14, 32]);
        dbSort([1, 2, 3, 4, 5]),// [1, 2, 3, 4, 5]);
        dbSort(["Banana", "Orange", "Apple", "Mango", 0, 2, 2]),// [0,2,2,"Apple","Banana","Mango","Orange"]);
        dbSort(["C", "W", "W", "W", 1, 2, 0]),// [0,1,2,"C","W","W","W"]);
    )