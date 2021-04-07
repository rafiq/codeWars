function findUniq(arr) {

    for (let i = 0; i < arr.length; i++) {
        if (arr.indexOf(arr[i]) === arr.lastIndexOf(arr[i])) return arr[i];
    }
    return false;
}
console.log(
    findUniq([ 0, 1, 0 ]),// 1);
    findUniq([ 1, 1, 1, 2, 1, 1 ]),// 2);
    findUniq([ 3, 10, 3, 3, 3 ]),// 10);
)