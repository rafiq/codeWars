function solve(arr){
    const LETTERS = ["", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    return arr.map(word => {
        return word.split("").reduce((acc,curr,idx) => {
            if (curr.toLowerCase() === LETTERS[idx + 1]) {
                acc++;
            } else {
                acc;
            }
            return acc;
        },0)
    })

    };
console.log(
solve(["abode","ABc","xyzD"])// = [4, 3, 1]
)