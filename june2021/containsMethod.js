function Journey(object, crew, balloons) {
    this.object = object;
    this.crew = crew;
    this.balloons = balloons;
  }
const LIFT_OF_ONE_BALLOON = .0048;

Journey.prototype.isPossible = function() {
    let totalCrewWeight = this.crew * 80
    let totalWeight = this.object.weight + totalCrewWeight
    let totalLift = this.balloons * LIFT_OF_ONE_BALLOON;
    return totalWeight < totalLift;
}

var letterToEllie = {'weight': 0.004536};
var house = {'weight': 45000};
var pushCart = {'weight': 95};
var lawnChair = {'weight': 5};
var flyingCart = new Journey(pushCart, 0, 50);
var loveOfMyLife = new Journey(letterToEllie, 0, 1);
var gravityFalls = new Journey(house, 2, 20622);

console.log(
    flyingCart.isPossible(), //false, "should be false as 50 balloons is not enough!");
    loveOfMyLife.isPossible(), //true, "should be true as 1 balloon is just enough to express one's love on a sheet of paper!");
    gravityFalls.isPossible(),// false, "should be false as 20622 balloons is not enough!");
  )

//   ! Writing the constructor function method inside the constructor, So they didn't have to use the this keyword because all the variables were in scope.
function Journey(object, crew, balloons) {
    this.isPossible = function(){
     return (object.weight+crew*80) <= balloons*4.8/1000;
    }
  }
//   !