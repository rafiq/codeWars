function cakes(recipe, available) {

    let keys = Object.keys(recipe);
    let result = [];

    keys.forEach(el => {
        result.push(Math.floor(available[el] / recipe[el]))
    })
    return Math.min(...result) ? Math.min(...result) : 0;
  }
  console.log(
    cakes({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200}),// 2,
  )

//   I like how they did this below to take care of infinity or NaN
Math.floor(available[ingredient] / recipe[ingredient] || 0)