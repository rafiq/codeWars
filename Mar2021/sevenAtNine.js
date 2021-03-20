function sevenAte9(str){


    return str.split("").reduce((acc,curr,idx) => {
        if (curr === "9" && str[idx - 1] === "7" && str[idx + 1] === "7") {
            acc += "";
        } else acc += curr;

        return acc;
    },"")
}
console.log(
    sevenAte9('165561786121789797'),//'16556178612178977');
    sevenAte9('797'),//'77');
    sevenAte9('7979797'),//'7777');
)