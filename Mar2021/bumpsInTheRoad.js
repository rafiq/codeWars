function bump(x) {
    if (!x || x.length < 15) return "Woohoo";
    return x.match(/n/g).length > 15 ? "Car Dead" : "Woohoo!";
}
console.log(
    bump("_nnnnnnn_n__n______nn__nn_nnn"),//
)

// I like how the below answer handled the null inputs by setting the original equalt to the length of the inptu or an empty array.
function bump(x){
    return (x.match(/n/g) || []).length > 15 ? "Car Dead" : "Woohoo!";
  }