function preFizz(n) {

    return Array.from({length: n}, (v, i) => i + 1);
}

console.log(
    preFizz(1), //[1], `Array should be from 1 to 1`);
    preFizz(2), //[1,2], `Array should be from 1 to 2`);
    preFizz(3), //[1,2,3], `Array should be from 1 to 3`);
    preFizz(4), //[1,2,3,4], `Array should be from 1 to 4`);
    preFizz(5), //[1,2,3,4,5], `Array should be from 1 to 5`);
)