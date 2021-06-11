function checkSet(arrToBeSet, checkValue){
    let set = new Set(arrToBeSet);

    let hasTwo = set.has(checkValue);

    let howBig = set.size;

    return [hasTwo,howBig];

    }
    console.log(
        checkSet([4, 5, 6], 3) //[ false, 3 ]
    )