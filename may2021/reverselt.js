function reverseIt(data){

    if (typeof data === "string" || typeof data === "number") {
        if (typeof data === "number") {
            return Number(data.toString().split("").reverse().join(""));
        } else {
            return data.split("").reverse().join("");
        }
    }
    else return data;
}
console.log(
    reverseIt('Hello'),//"olleH", 'Not quite')
    reverseIt(314159),//951413, 'Not quite')
    reverseIt("314159"),//"951413", 'Not quite')
    reverseIt([]),//[], 'Not quite')
)