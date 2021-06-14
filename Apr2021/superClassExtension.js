class Animal {
    constructor(name) {
      this.name = name;
    }

    speak() {
      return this.name + ' makes a noise, ' + this.name + " goes meow.";
    }
  }

  class Cat extends Animal {
    constructor(name) {
        super(name);
    }
    speak() {
        return super.speak() + this.name + ' goes meow.';
  }
}
  let cat = new Cat('Mr Whiskers');
  console.log(
    cat.speak(),//'Mr Whiskers makes a noise, Mr Whiskers goes meow.')
  )