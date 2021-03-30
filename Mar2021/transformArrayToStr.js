function transform(array) {


    return array.reduce((acc,curr) => acc + curr,"")
}
console.log(
    transform(["BmX", false, 784]),// "BmXfalse784"
    transform([ 5, 7, 8, 9, 0, 5 ]),// "BmXfalse784"
)