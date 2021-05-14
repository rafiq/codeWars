function bubbleSort(arr) {
    if (typeof arr[0] === "number") {
        let sortedArray = arr.sort((a,b) => a - b);
    }
    let sortedArray = arr.sort((a,b) => {
        return a > b ? 1 : -1;
    })
    let temp = 0;
    while (arr !== sortedArray) {
        for (let i = 1; i < arr.length; i++) {
            if (arr[i] > arr[i - 1]) {
                temp = arr[i];
                arr[i] = arr[i - 1];
                arr[i - 1] = temp;
            }
        }
    }
    return arr;
}
console.log(
bubbleSort([5, 3]),    // [3, 5]
bubbleSort([6, 2, 7, 1, 4]),// [1, 2, 4, 6, 7]
bubbleSort(['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie']),//// ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]
)