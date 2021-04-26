function divisors(integer) {
    let arrayOfDivisors = [];

    for (let i = 2; i < integer; i++) {
        if (integer % i === 0) arrayOfDivisors.push(i);
    }

    return arrayOfDivisors.length > 0 ? arrayOfDivisors : `${integer} is prime`
};
console.log(
    divisors(15),// [3, 5]);
    divisors(12),// [2, 3, 4, 6]);
    divisors(13),// "13 is prime");
)