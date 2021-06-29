class Dog {
    constructor(name, age, gender, species, size, master, loyal) {
      this.name = name;
      this.age = age;
      this.gender = gender;
      this.species = species;
      this.legs = 4;
      this.size = size;
      this.master = master;
      this.loyal = loyal;
    }
  }
  class Labrador extends Dog {
    constructor(name, age, gender, master) {
      super(name, age, gender, "Labrador", "Large", master, true);
    }
  }
// class Labrador extends Dog {
//     constructor(name, age, gender, species, size, master,loyal) {
//       super(name,age,gender,species,size = "large",master = "Donald",loyal = true)
//   }
// }
  var spitsy = new Labrador("Spitsy", 10, "Male", "Donald");
console.log(
    spitsy.name,//"Spitsy");
    spitsy.age,//10);
    spitsy.gender,//"Male");
    spitsy.species,//"Labrador");
    spitsy.legs,//4);
    spitsy.size,//"Large");
    spitsy.master,//"Donald");
    spitsy.loyal,//true);
)