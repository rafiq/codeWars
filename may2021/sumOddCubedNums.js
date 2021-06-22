function cubeOdd(arr) {
    for (let el of arr) {
        if (typeof el !== "number" ) return undefined
    }

    return arr.reduce((acc,curr) => {
        if (Math.abs(curr % 2) === 1) acc += curr**3;
        return acc
    },0)
}
    console.log(
        cubeOdd([1, 2, 3, 4]),// 28);
        cubeOdd([-3,-2,2,3]),// 0);
        cubeOdd(["a",12,9,"z",42]),// undefined);
    )