function doubleton(num){

    for (let i = num + 1; i < num + 10000; i++) {
        if (isTwoDigit(i)) return i;
    }
}
function isTwoDigit(num) {
    let set = new Set();

    num.toString().split("").forEach(digit => set.add(digit));

    return set.size === 2;
}
console.log(
doubleton(120) ,//=,//=,//= 121
doubleton(1234) ,//=,//=,//= 1311
doubleton(10) ,//=,//=,//= 12
)