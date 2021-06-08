class Person {
    constructor(myName) {
        this.name = myName
    }
    // greet(yourName) {
    //     return "Hello " + yourName + ", my name is " + this.name;
    //   }
}

Person.prototype.greet = function(yourName) {
    return "Hello " + yourName + ", my name is " + this.name;
  }
  var joe = new Person('Joe');

console.log(
    joe.greet('Kate'), // should return 'Hello Kate, my name is Joe'
    joe.name           // should == 'Joe'
)