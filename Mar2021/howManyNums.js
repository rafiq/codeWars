function consecutive(arr) {
    let max = Math.max(...arr);
    let min = Math.min(...arr);
    if (arr.length === 0) return 0;
    let totalLength = max - min;
    let missingArray = arr.length - 1;

    return totalLength - missingArray;
    }
    console.log(
        consecutive([4,8,6]),//2);
        consecutive([1,2,3,4]),//0);
        consecutive([]),//0);
        consecutive([1]),//0);
    )