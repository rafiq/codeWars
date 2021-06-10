function rotateArray(arr) {
    if (typeof arr !== "object") return undefined;
    return arr.slice(1).concat(arr.slice(0,1))
}
console.log(
    rotateArray([7, 3, 5, 2, 9, 1]),////       // [3, 5, 2, 9, 1, 7]
    rotateArray(['a', 'b', 'c']),////          // ["b", "c", "a"]
    rotateArray(['a']),////                    // ["a"]
    rotateArray([1, 'a', 3, 'c']),////         // ["a", 3, "c", 1]
    rotateArray([{ a: 2 }, [1, 2], 3]),////    // [[1, 2], 3, { a: 2 }]
    rotateArray([]),////                       // []
    rotateArray(),////                         // undefined
    rotateArray(1),////                        // undefined
    rotateArray([1, 2, 3, 4]),////            // [2, 3, 4, 1]
)