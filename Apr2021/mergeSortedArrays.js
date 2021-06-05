function merge(arr1,arr2) {
    let pointerOne = 0;
    let pointerTwo = 0;
    let result = [];
    let arr1Copy = arr1.slice();
    let arr2Copy = arr2.slice();

    while (arr1Copy.length > 0 && arr2Copy > 0) {
        // console.log(result)
        if (arr1Copy[pointerOne] < arr2Copy[pointerTwo]) {
            result.push(arr1Copy.shift());
            // arr1Copy =
            // pointerOne++;
        }
        if (arr2Copy[pointerTwo] < arr1Copy[pointerOne]) {
            result.push(arr2Copy.shift());
            // pointerTwo++;
        }
    }
    // while (arr1Copy.length > 0) {
    //     // console.log(result)
    //     result.push(arr1Copy.shift())
    // }
    // return result
    // while (pointerOne < arr1.length  && pointerTwo < arr2.length ) {
    //     console.log(arr1[pointerOne])
    //     // if (arr1[pointerOne] < arr2[pointerTwo]) {
    //     //     result.push(arr1[pointerOne]);
    //     //     result.push(arr2[pointerTwo]);
    //     //     pointerOne++;
    //     //     pointerTwo++;
    //     // }
    //     // if (arr2[pointerTwo] < arr1[pointerOne]) {
    //     //     result.push(arr2[pointerTwo]);
    //     //     result.push(arr1[pointerOne]);
    //     //     pointerTwo++;
    //     //     pointerOne++;
    //     // }
    //     if (arr1[pointerOne] < arr2[pointerTwo]) {
    //         result.push(arr1[pointerOne]);
    //         pointerOne++;
    //     }
    //     if (arr2[pointerTwo] < arr1[pointerOne]) {
    //         result.push(arr2[pointerTwo]);
    //         pointerTwo++;
    //     }
    // }
    return result;
    // let fullArray = arr1.concat(arr2);

    // return arr1.reduce((acc,curr,idx) => {

    //     if (curr < arr2[idx]) {
    //         acc.push(curr);
    //         acc.push(arr2[idx])
    //     } else {
    //         acc.push(arr2[idx]);
    //         acc.push(curr);
    //     }
    //     return acc;
    // },[])
}
console.log(
    merge([1, 5, 9], [2, 6, 8]),      // [1, 2, 5, 6, 8, 9]
    merge([1, 1, 3], [2, 2]),         // [1, 1, 2, 2, 3]
    merge([], [1, 4, 5]),             // [1, 4, 5]
    merge([1, 4, 5], []),             // [1, 4, 5]
)