

class Student {
    constructor(name, fives, tens, twenties) {
      this.name = name;
      this.fives = fives;
      this.tens = tens;
      this.twenties = twenties;
    }

  }

  const andy = new Student("Andy", 0, 0, 2);
    const stephen = new Student("Stephen", 0, 4, 0);
    const eric = new Student("Eric", 8, 1, 0);
    const david = new Student("David", 2, 0, 1);
    const phil = new Student("Phil", 0, 2, 1);
    const cam = new Student("Cameron", 2, 2, 0);
    const geoff = new Student("Geoff", 0, 3, 0);

function mostMoney(args) {
    let maxAmount = 0;
    let maxStudent = "";
    let currentMax = 0;

    for (let i = 0; i < args.length; i++) {

        [maxAmount] = Math.max((args[i].fives * 5) + (args[i].twenties * 20) + (args[i].tens * 10), maxAmount);
        // maxStudent =
    }


    return maxAmount
}

console.log(
    mostMoney([andy, stephen, eric, david, phil]), //"Eric")
    mostMoney([cam, geoff, andy, stephen, eric, david, phil]), //"Eric")
)