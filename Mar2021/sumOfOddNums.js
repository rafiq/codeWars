function rowSumOddNumbers(n) {
	let formula = n**2 - n + 1;
    let array = [];
    let i = formula;

    while (n > 0) {
        array.push(i)
        n--;
        i += 2;
    }

    return array.reduce((a,b) => a + b);
}

console.log(
    rowSumOddNumbers(1),//1);
    rowSumOddNumbers(42),//74088);
)