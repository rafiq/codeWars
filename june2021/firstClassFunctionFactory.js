function factory(x){

    return array => array.map(el => el * x)
    // return function (a) {return a.map((b)=>b*x)}
}
var myArray = [1, 2, 3];
var threes = factory(3);
console.log(
    threes(myArray), //[3, 6, 9])
)