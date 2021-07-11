reverse = function(array) {

    let temp;

    for (let i = 0; i < array.length / 2; i++) {
        temp = array[i]
        array[i] = array[array.length - 1 - i]
        array[array.length - 1 - i] = temp
    }

    return array
  }

console.log(
    reverse([1,2,3]),// [3,2,1] )
reverse([1,null,14,"two"]),// ["two",14,null,1] )
)