function NameMe(first, last) {
    this.firstName = first;
    this.lastName = last;
    this.name = this.firstName + ' ' + this.lastName;
}

var n = new NameMe('John', 'Doe');
console.log(
n.firstName, //Expected: John
n.lastName, //Expected: Doe
n.name, //Expected: John Doe
)