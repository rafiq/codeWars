function listSquared(m, n) {
    let divisors = [];
    let sum = 0;
    while (m <= n) {
        if (isSquared(getSumOfDivisors(getDivisors(m)))) {
            divisors.push([m,getSumOfDivisors(getDivisors(m))])
        }
        m++;
    }
    return divisors;
}
function isSquared(num) {
    return Math.pow(num,.5) % 1 === 0;
}
function getDivisors(num) {
    let divisors = [];
    for (let i = 0; i <= num; i++) {
        if (num % i === 0) {
            divisors.push(i);
        }
    }
    return divisors;
}
function getSumOfDivisors(arr) {
    return arr.reduce((acc,curr) => {
        acc += curr * curr;
         return acc;
    },0)
}
console.log(
    listSquared(1, 250),// [[1, 1], [42, 2500], [246, 84100]])
    listSquared(42, 250),// [[42, 2500], [246, 84100]])
    listSquared(250, 500),// [[287, 84100]])
)
