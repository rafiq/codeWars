const combinations = (elements) => {
  if (elements.length === 0) return [[]];
  let firstElement = elements[0];
  let theRest = elements.slice(1);

  let combinationsWithoutFirst = combinations(theRest);
  let combsWithFirst = [];

  combinationsWithoutFirst.forEach(el => {
      let comboWithFirst = [...el, firstElement];
      combsWithFirst.push(comboWithFirst);
  })

  return [...combinationsWithoutFirst, ...combsWithFirst];
}
function BracketCombinations(num) {
    let elements = [];
    for (let i = 0; i < num; i++) {
        elements.push("(");
        elements.push(")");
    }

    return combinations(elements).length;
  }

  // keep this function call here
  console.log(BracketCombinations(3));//5
  console.log(BracketCombinations(2));//2