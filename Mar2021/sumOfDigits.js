function digital_root(n) {

    // let lastDigit = n % 10;
    // let remainder = (n - lastDigit) / 10;
    // let sum = 0;
    // while (n > 0) {
    //     sum += lastDigit;
    //     digital_root(remainder);
    // }
    // return sum;

    return n.toString().split("").reduce((acc,curr) => {
        acc += Number(curr);
        if (acc > 9) return digital_root(acc);
        else return acc;
    },0)
}
console.log(
    digital_root(16), //7 )
    digital_root(456), //6 )
)