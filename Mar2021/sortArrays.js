sortme = function( names ){
    let copiedArray = names.slice();

        return copiedArray.sort((a,b) => {
            return a.toLowerCase() < b.toLowerCase() ? -1 : a.toLowerCase() === b.toLowerCase() ? 0 : 1;
        })
}
console.log(
sortme(["Hello", "there", "I'm", "fine"]),//["fine", "Hello", "I'm", "there"]
sortme(["C", "d", "a", "B"]),//["a", "B", "C", "d"]
)