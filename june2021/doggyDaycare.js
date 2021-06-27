function Dog(name, age, breed,vaccinated, wormed) {
    this.name = name ;
    this.age = age;
    this.breed = breed;
    this.vaccinated = vaccinated ;
    this.wormed = wormed;
}

Dog.prototype.checkDog = function() {

    if (this.vaccinated && this.wormed) {
        return `${this.name} can be accepted`
    } else if (this.vaccinated || this.wormed) {
        return ` ${this.name} can only be accepted by itself`
    } else {
        return `${this.name} can not be accepted`
    }
}


var spot = new Dog("Spot", 5, "Labrador", true, false);
var riley = new Dog("Riley", 3, "GoldenDoodle", true, true);
var clive = new Dog("Clive", 8, "German Shepard", false, false);
console.log(

    spot.checkDog(),// "Spot can only be accepted by itself");
    riley.checkDog(),// "Riley can be accepted");
    clive.checkDog(),// "Clive can not be accepted");
    )

