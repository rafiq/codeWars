// class Animal {
//     constructor(name,type) {
//         this.name = name;
//         this.type = type
//     }
//     toString() {
//         return `${this.name} is a ${this.type}`
//     }
// }
function Animal(name,type) {
    this.name = name
    this.type = type
}

Animal.prototype.toString = function () {
    return `${this.name} is a ${this.type}`
}

var dog = new Animal('Max', 'dog');
console.log(
dog.toString(), // should return 'Max is a dog'
dog.type, // should == 'dog'
dog.name, // should == 'Max'
dog.name = 'Lassie', // should set name to 'Lassie'
)
