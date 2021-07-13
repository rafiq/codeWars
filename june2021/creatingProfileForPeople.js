function person(firstName,lastName,age,gender, employed,occupation,married,) {

// return {
//     firstName,
//     lastName,
//     age,
//     gender,
//     employed,
//     occupation,
//     married,

//     sayName() {
//         return `${firstName} ${lastName}`
//     },
//     introduce() {
//         return `Hello, my name is ${firstName} ${lastName}. I am ${age} years old. I am a ${gender}.`
//     }
// }
return {
    firstName,
    lastName,
    age,
    gender,
    employed,
    occupation,
    married,
    sayName() {
      return `${firstName} ${lastName}`;
    },
    introduce() {
      return `Hello, my name is ${this.sayName()}.  I am ${this.age} years old.  I am a ${this.gender}.`;
    }
  };
  }
  let baz = person("James","Smith",20,"male",true,"surfer",true)
  var john = person("John", "Doe", 18, "male", false, null, true);
  console.log(
      baz.firstName,
      baz.sayName(),
      baz.introduce(),
    john.firstName,//"John");
    john.lastName,//"Doe");
    john.age,//18);
    john.gender,//"male");
    john.employed,//false);
    john.occupation,//null);
    john.married,//true);
    john.sayName(),// "John Doe");
    john.introduce(),//"Hello, my name is John Doe.  I am 18 years old.  I am a male.");
  )

// firstName
// lastName
// age
// gender
// employed
// occupation
// married