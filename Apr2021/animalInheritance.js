class Animal {
    constructor(name, age, legs, species, status) {
      this.name = name;
      this.age = age;
      this.legs = legs;
      this.species = species;
      this.status = status;
    }
    introduce() {
      return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
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
// class Shark extends Animal {
//     constructor(name,age,legs,species,status) {
//       super(name,age,legs,species,status);
//     }
//   }

//   class Cat extends Animal {
//     // Do the same here as you did for Shark - define your constructor function and any other methods you need
//   }

//   class Dog extends Animal {
//     // On your own now - you can do it :D
//   }
  var billy = new Shark("Billy", 3, "Alive and well");
  var charles = new Shark("Charles", 8, "Finding a mate");
  console.log(
    billy.name,//"Billy");
    billy.age,//3);
    billy.legs,//0);
    billy.species,//"shark");
    billy.status,//"Alive and well");
    billy.introduce(),//`Hello,//my name is Billy and I am 3 years old.`);
    charles.name,//"Charles");
    charles.age,//8);
    charles.legs,//0);
    charles.species,//"shark");
    charles.status,//"Finding a mate");
    charles.introduce(),//`Hello,//my name is Charles and I am 8 years old.`);
  )