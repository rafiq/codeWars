function triangle(row) {
    let rowArray = row.split("");
    if (row.length < 2) return row;
    let result = [];

    while (rowArray.length > 1) {
        result = [];
        for (let i = 1; i < rowArray.length ; i++) {
            if (rowArray[i - 1] === rowArray[i]) result.push(rowArray[i]);
            else result.push(getMissingColor(rowArray[i - 1], rowArray[i]));
        }
        rowArray = result;
    }
    return rowArray.join("")
    }
    function getMissingColor(clr1,clr2) {
        const colorSet = clr1 + clr2;
        if (!colorSet.includes("R")) return "R";
        if (!colorSet.includes("B")) return "B";
        if (!colorSet.includes("G")) return "G";
    }
    console.log(
        triangle('GB'),//'R');
        triangle('RRR'),//'R');
        triangle('RGBG'),//'B');
        triangle('RBRGBRB'),//'G');
        triangle('RBRGBRBGGRRRBGBBBGG'),//'G');
        triangle('B'),//'B');
    )