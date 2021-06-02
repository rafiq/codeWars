function solution(digits){
    let temp = "";
    let longest = "";
    digits = digits.toString();
    for (let i = 0; i < digits.length; i++) {
        temp = digits.substr(i,5);
        console.log(temp)
        if (Number(temp) > Number(longest)) {
            longest = temp;
            temp = "";
        }
    }
    return longest;
}
console.log(
    solution(1234567890),//67890
)