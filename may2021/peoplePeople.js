class Person {
    // constructor(firstName = "John",lastName = "Doe",age = 0,gender = "Male") {
    //     this.firstName = firstName;
    //     this.lastName = lastName
    //     this.age = age;
    //     this.gender = gender;
    // }

    // sayFullName() {
    //     return `${this.firstName} ${this.lastName}`
    // }

    // static greetExtraTerrestrials(raceName) {

    //     return `Welcome to Plane Earth ${raceName}`
    // }
    constructor(firstName = 'John', lastName = 'Doe', age = 0, gender = 'Male') {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.gender = gender;
      }
      sayFullName() {
        return `${this.firstName} ${this.lastName}`;
      }
  }
  Person.greetExtraTerrestrials = raceName => {
    return `Welcome to Planet Earth ${raceName}`;
  };
  console.log(
    new Person().firstName, //"John");
    new Person().lastName,// "Doe");
    new Person().age, //0);
    new Person().gender, //"Male");
    new Person().sayFullName(), //"John Doe");
    // Example Custom Test
    new Person("Jane", "Doe", 25, "Female").firstName, //"Jane");
    new Person("Jane", "Doe", 25, "Female").lastName,// "Doe");
    new Person("Jane", "Doe", 25, "Female").age,// 25);
    new Person("Jane", "Doe", 25, "Female").gender, //"Female");
    // new Person("Jane", "Doe", 25, "Female").sayFullName(), //"Jane Doe");
    new Person("Jane", "Doe", 25, "Female").greetExtraTerrestrials("Martian"), //"Jane Doe");
  )