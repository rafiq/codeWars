function
 compare(s1, s2) {
    if (s1 === null) s1 = "";
    if (s1.length === 0 || s1.match(/[^A-Z]/gi)) s1 = "";
    if (s2.length === 0 || s2.match(/[^A-Z]/gi)) s2 = "";
        return sumOfChars(s1) === sumOfChars(s2);
}
function sumOfChars(str) {

    return str.toUpperCase().split("").reduce((acc,curr) => acc + curr.charCodeAt() ,0)
}
console.log(
    compare("AD", "BC"),// true);
    compare(null, ""),// true);
    compare("AD", "DD"),// false);
    compare("kl", "lz"),// false);
)
// I like how they dealt with the null and non letter values in the code below.
function compare(s1, s2) {
    let sum1 = 0;
    let sum2 = 0;

    if (!s1 || s1.search(/[^a-zA-Z]+/) !== -1) s1 = '';
    if (!s2 || s2.search(/[^a-zA-Z]+/) !== -1) s2 = '';

    s1.toUpperCase().split('').map((item) => sum1 += item.charCodeAt(0));
    s2.toUpperCase().split('').map((item) => sum2 += item.charCodeAt(0));

    return sum1 === sum2;
  }