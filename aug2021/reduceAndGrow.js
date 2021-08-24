function grow(x){


    return x.reduce((acc,curr) => {
        acc *= curr;
        return acc
    },1)
}
console.log(
    grow([1, 2, 3]),// 6);
    grow([4, 1, 1, 1, 4]),// 16);
    grow([2, 2, 2, 2, 2, 2]),// 64);
)