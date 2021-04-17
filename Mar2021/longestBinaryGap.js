function gap(num) {
    // let binaryNum = (num).toString(2);
    // let max = 0;
    // let startIndex = 0;
    // let endIndex = 0;
    // let currentMaxLength = [];

    // for (let i = 0; i < binaryNum.length; i++) {
    //     if (binaryNum[i - 1] === 1 && binaryNum[i] === 0) {
    //         max++;
    //     }
    // // }
    // return binaryNum.split("").map((el,idx) => {
    //     if (el === String(1)) {
    //         return idx
    //     } else return el
    // })

    const bin = Math.abs(num).toString("2")
    let finalMax = 0, currentMax=0

    for(i=0;i < bin.length; i++ ) {
        if(bin[i] == "0") {
            currentMax++
        }

        if(bin[i] == "1" && i != 0) {
            finalMax = Math.max(finalMax, currentMax)
            currentMax = 0
        }

    }

    return parseInt(finalMax)

}
console.log(
    gap(9),//2);
    gap(529),//4);
    gap(20),//1);
    gap(15),//0);
)