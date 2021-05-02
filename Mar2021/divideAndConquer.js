function divCon(x){
    let numsSum = 0;
    let strSum = 0;

    return x.reduce((acc,curr) => {
        if (typeof curr === "string") acc -= Number(curr);
        else acc += curr;

        return acc;
    },0);
}
console.log(
    divCon([9, 3, '7', '3']),// 2);
    divCon(['5', '0', 9, 3, 2, 1, '9', 6, 7]),// 14);
    divCon(['3', 6, 6, 0, '5', 8, 5, '6', 2,'0']),// 13);
)