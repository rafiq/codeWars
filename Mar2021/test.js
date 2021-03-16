// function randomNumberBetween(min, max) {
//     return Math.floor(Math.random() * (max - min + 1) + min);
//   }

//   let tries = 0;
//   let result = 0

//   while (result <= 2) {
//     result = randomNumberBetween(1, 6);
//     tries += 1;
//   }

//   console.log('It took ' + String(tries) + ' tries to get a number greater than 2');



function factorial(num) {
    if (num === 1) return num;

    return num * factorial(num - 1)
}
console.log(factorial(1));     // => 1
console.log(factorial(2));     // => 2
console.log(factorial(3));     // => 6
console.log(factorial(4));     // => 24
console.log(factorial(5));     // => 120
console.log(factorial(6));     // => 720
console.log(factorial(7));     // => 5040
console.log(factorial(8));     // => 40320


// let array = [3, 1, 5, 9, 2, 6, 4, 7]
// let indexOfFive = -1;

// for (let i = 0; i < array.length; i += 1) {
//     console.log(array[i])
//   if (array[i] === 5) {
//     indexOfFive = i;

//   }
// }

// console.log(indexOfFive);
