function person(firstName, lastName, age, gender, employed, occupation, married) {
    return {
      firstName: firstName,
      lastName: lastName,
      age: age,
      gender: gender,
      employed: employed,
      occupation: occupation,
      married: married,
      sayName: function () {
        return `${this.firstName} ${this.lastName}`;
      },
      introduce: function () {
        return `Hello, my name is ${this.sayName()}.  I am ${this.age} years old.  I am a ${this.gender}.`;
      }
    };
  }

function constructionWorker(firstName, lastName, age, gender, married, boss) {
    let obj = person(firstName,lastName,age,gender,true,"construction worker");
    obj.married = married;
    obj.boss = boss;

    obj.sayBossName = function() {
        return `My boss is called ${this.boss} and is a very nice person!`
    }

    return obj
  }
  var alfie = constructionWorker("Alfie", "Ching", 13, "Male", false, "Ethan");
  console.log(
    alfie.firstName,//"Alfie");
    alfie.lastName,//"Ching");
    alfie.age,//13);
    alfie.gender,//"Male");
    alfie.employed,//true);
    alfie.occupation,//"construction worker");
    alfie.married,//false);
    alfie.boss,//"Ethan");
    alfie.sayName(),//"Alfie Ching");
    alfie.introduce(),//"Hello,//my name is Alfie Ching.  I am 13 years old.  I am a Male.");
    alfie.sayBossName(),//"My boss is called Ethan and is a very nice person!");
  )

//   ! using Object.assign
function constructionWorker(firstName, lastName, age, gender, married, boss) {
    let worker = Object.assign(person(firstName, lastName, age, gender, true, "construction worker", married)
      , {boss});
    worker.sayBossName = function() { return`My boss is called ${boss} and is a very nice person!`;}
    return worker;
  }

