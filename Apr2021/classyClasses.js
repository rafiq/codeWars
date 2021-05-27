class Person {
    // constructor(name,age) {
    //     this.name = name;
    //     this.age = age;
    // }
    // get info() {
    //     return this.displayInfo()
    // }
    // displayInfo() {
    //     return `${this.name}s age is ${this.age}`
    // }
    constructor(name, age) {
        this.info = `${name}s age is ${age}`;
  }
  var john = new Person('john', 34)
  console.log(
    john.info,// 'johns age is 34')
  )