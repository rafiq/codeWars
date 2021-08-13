function squareOrSquareRoot(array) {
    let result = []

    for (let el of array) {
        if (Math.sqrt(el) % 1 !== 0) result.push(el * el)
        else result.push(Math.sqrt(el))
    }

    return result;
}
input = [ 100, 101, 5, 5, 1, 1 ];
expected = [ 10, 10201, 25, 25, 1, 1 ];
  console.log(
    squareOrSquareRoot(input), //expected)
  )