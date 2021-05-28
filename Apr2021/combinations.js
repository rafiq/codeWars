const combinations = (elements) => {
    if (elements.length === 0) return [[]];
    let firstElement = elements[0].split("")[0];
    let theRest = elements[0].split("").slice(1);

    let combinationsWithoutFirst = combinations(theRest);
    let combsWithFirst = [];

    combinationsWithoutFirst.forEach(el => {
        let comboWithFirst = [...el, firstElement];
        combsWithFirst.push(comboWithFirst);
    })

    return [...combinationsWithoutFirst, ...combsWithFirst];
}

console.log(
    combinations(["abc"]),
)