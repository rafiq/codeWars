const makeClass = (...keys) =>
  function (...values) {
    keys.forEach((val, idx) => this[val] = values[idx]);
  };

// function makeClass(...properties) {
//     class Animal {

//     }
//   }
//   function Animal(name,species,age,health,weight,color) {
//       this.name = name;
//       this.species = species;
//       this.age = age;
//       this.health = health;
//       this.weight = weight;
//       this.color = color;
//     }
//     const Animal = makeClass('name','species','age','health','weight','color')
//   console.log(


//       describe("Basic Tests", function() {
//         const dog1 = new Animal('Bob','Dog','5','good','50lb','brown')
//         const dog2 = new Animel('Bob','Dog','5','good','50lb','brown')
//         it("check for object similarity", function() {
//           Test.assertEquals(Object.keys(dog1).join`,`,Object.keys(dog2).join`,`)
//           Test.assertEquals(Object.values(dog1).join`,`,Object.values(dog2).join`,`)
//   )