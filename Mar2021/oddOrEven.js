function oddOrEven(array) {

    return array.reduce((a,b) => a + b,0) % 2 === 0 ? "even" : "odd";

}
console.log(
    oddOrEven([0]),//'even')
    oddOrEven([1]),//'odd')
    oddOrEven([]),//'even')
    oddOrEven([0, -1, -5]),//'even')
)