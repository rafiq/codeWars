function perfectRoots(n){
    // let unitDigit = Math.floor(n % 10);
    let secondRoot = Math.pow(n, 1/2);
    let fourthRoot = Math.pow(n, 1/4);
    let eigthRoot = Math.pow(n, 1/8);

    if (secondRoot % 1 === 0 && fourthRoot % 1 === 0 && eigthRoot % 1 === 0) return true;
    else return false;
    // return `${secondRoot} ${fourthRoot} ${eigthRoot}`
    // let count = 0;
    // let squaresObj = {0:10,1:9,2:4
    // let squareArray [[0,10],[1,9,1] ]
    // // }
    // while (n > 0) {
    //     n /= 8;
    //     count++
    // }

    // for (let i = 0; i < 2; i++) {
    // // }
    // return Math.pow(n, 1/root);;



}

console.log(
    perfectRoots(256), // returns true
    perfectRoots(24) // returns true
)