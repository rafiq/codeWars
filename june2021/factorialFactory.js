function factorial (n) {

    if (n < 0) return null;

    return Array(n).fill(0).reduce((acc,curr,idx) => {
        // console.log(idx + 1, acc)
        acc *= idx + 1;
        return acc;
    },1)
}
console.log(
    factorial(5),
    factorial(-1),
    factorial(2),
    factorial(0)
)