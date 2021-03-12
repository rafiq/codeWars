function twoSort(s) {
    let sorted = s.sort((a,b) => {
        if (a < b) return -1;
        else if (a > b) return 1;
        else if (a === b) return 0;
    })
    let length = sorted[0].length * 4 - 3;
    return sorted[0].split("").reduce((acc,curr) => {
        acc += curr;
        acc += "***";
        return acc.slice(0,length);
    },"")
    // return length
}
console.log(
    twoSort(["bitcoin", "take", "over", "the", "world", "maybe", "who", "knows", "perhaps"]),// 'b***i***t***c***o***i***n' );
    twoSort(["turns", "out", "random", "test", "cases", "are", "easier", "than", "writing", "out", "basic", "ones"]),// 'a***r***e');
)