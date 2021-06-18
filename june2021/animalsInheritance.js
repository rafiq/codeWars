class Animal {
    constructor(name, age, status,legs,species) {
        this.name = name;
        this.age = age;
        this.status = status;
        this.legs = legs;
        this.species = species;
    }
}
class Shark extends Animal {
    constructor(name, age, status) {
      super(name, age, 0, "shark", status);
    }
  }

  class Cat extends Animal {
    constructor(name, age, status) {
      super(name, age, 4, "cat", status);
    }
    introduce() {
      return `${super.introduce()}  Meow meow!`;
    }
  }

  class Dog extends Animal {
    constructor(name, age, status, master) {
      super(name, age, 4, "dog", status);
      this.master = master;
    }
    greetMaster() {
      return `Hello ${this.master}`;
    }
  }
// Animal.prototype.introduce = function () {
//     return `Hello, my name is ${this.name} and I am ${this.age} years old.  ${this.sound}!`
// }
// class Shark extends Animal {
//     constructor(name,age,status) {
//       super(name,age,status);
//       this.species = "shark";
//       this.legs = 0
//       this.sound = ""
//     }
//   }

//   class Cat extends Animal {
//     constructor(name,age,status) {
//         super(name,age,status);
//         this.species = "cat";
//         this.legs = 4
//         this.sound = "Meow meow"
//       }
//   }

//   class Dog extends Animal {
//     constructor(name,age,status,master) {
//         super(name,age,status);
//         this.master = master;
//         this.species = "dog";
//         this.legs = 4
//         this.sound = "woof woof"
//       }
//       greetMaster() {
//         return `Hello ${this.master}`
//       }
//   }
  var billy = new Shark("Billy", 3, "Alive and well");
  var charles = new Shark("Charles", 8, "Finding a mate");
  var cathy = new Cat("Cathy", 7, "Playing with a ball of yarn");
  var spitsy = new Cat("Spitsy", 6, "sleeping");
  var doug = new Dog("Doug", 12, "Serving his master", "Eliza");
  console.log(
    billy.name,//"Billy");
    billy.age,//3);
    billy.legs,//0);
    billy.species,//"shark");
    billy.status,//"Alive and well");
    billy.introduce(),//`Hello, my name is Billy and I am 3 years old.`);
    charles.name,//"Charles");
    charles.age,//8);
    charles.legs,//0);
    charles.species,//"shark");
    charles.status,//"Finding a mate");
    charles.introduce(),//`Hello,//my name is Charles and I am 8 years old.`);
    cathy.name,//"Cathy");
    cathy.age,//7);
    cathy.legs,//4);
    cathy.species,//"cat");
    cathy.status,//"Playing with a ball of yarn");
    cathy.introduce(),//"Hello,//my name is Cathy and I am 7 years old.  Meow meow!");
    spitsy.name,//"Spitsy");
    spitsy.age,//6);
    spitsy.legs,//4);
    spitsy.species,//"cat");
    spitsy.status,//"sleeping");
    spitsy.introduce(),//"Hello,//my name is Spitsy and I am 6 years old.  Meow meow!");
    doug.name,//"Doug");
    doug.age,//12);
    doug.legs,//4);
    doug.species,//"dog");
    doug.status,//"Serving his master");
    doug.introduce(),//"Hello,//my name is Doug and I am 12 years old.");
    doug.greetMaster(),//"Hello Eliza");
  )