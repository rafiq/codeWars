function peopleWithAgeDrink(old) {
    return old < 14 ? "drink toddy" : old < 21 ? "drink coke" : "drink whisky";
  };
console.log(
peopleWithAgeDrink(13),// "drink toddy"
peopleWithAgeDrink(17),// "drink coke"
peopleWithAgeDrink(18),// "drink beer"
peopleWithAgeDrink(20),// "drink beer"
peopleWithAgeDrink(30),// "drink whisky"
)