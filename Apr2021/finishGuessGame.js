class Guesser {
    constructor(number, lives) {
      this.number = number;
      this.lives = lives;
    }

    guess(n) {
        if (this.lives === 0) return false;
        this.lives--;
        return n === this.number
    }
  }
  let guesser = new Guesser(10, 2);
  console.log(
    guesser.guess(10),
    guesser.guess(1),
  )