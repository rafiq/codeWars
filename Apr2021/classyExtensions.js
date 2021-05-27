class Cat extends Animal {
    constructor(name) {
        super(name)
      }

      speak() {
        return `${this.name} meows.`
      }
    // constructor(name) {
    //     this.name = `${this.name} ${this.speak()}`
    // }
    // get speak() {
    //     return `meows`
    // }
}
var cat = new Cat('Mr Whiskers');
console.log(
        cat.speak(),//'Mr Whiskers meows.')
        cat = new Cat('Lamp'),
        cat.speak(),//'Lamp meows.')
        cat = new Cat('$$Money Bags$$'),
        cat.speak(),//'$$Money Bags$$ meows.')
)