function isPangram(string){
    let set = new Set();
    let alphaArr = "abcdefghijklmnopqrstuvwxyz";



    string.toLowerCase().split("").forEach(letter => {
        if (alphaArr.includes(letter)) {
            set.add(letter)
        }
    })

    return set.size === 26;
}
console.log(
    isPangram("This is not a pangram."),//false
    isPangram("The quick brown fox jumps over the lazy dog."),//true
)