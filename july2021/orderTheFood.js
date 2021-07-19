function orderFood(list) {

    return list.reduce((acc,curr) => {
        acc[curr.meal] ? acc[curr.meal]++ : acc[curr.meal] = 1;
        return acc
    },{})

    //     let foodArray = list.map(obj => obj.meal)
// console.log(list)
//    return foodArray.reduce((acc,curr) => {
//        acc[curr] ? acc[curr]++ : acc[curr] = 1;
//        return acc;
//    },[]);
}
var list1 = [
    { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'C',
      meal: 'vegetarian' },
    { firstName: 'Anna', lastName: 'R.', country: 'Liechtenstein', continent: 'Europe', age: 52, language: 'JavaScript',
      meal: 'standard' },
    { firstName: 'Ramona', lastName: 'R.', country: 'Paraguay', continent: 'Americas', age: 29, language: 'Ruby',
      meal: 'vegan' },
    { firstName: 'George', lastName: 'B.', country: 'England', continent: 'Europe', age: 81, language: 'C',
      meal: 'vegetarian' },
  ];

  var answer = { vegetarian: 2, standard: 1, vegan: 1 };
console.log(
     orderFood(list1), //{ vegetarian: 2, standard: 1, vegan: 1 } answer);
)