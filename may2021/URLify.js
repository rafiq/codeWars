function URLify(str) {

    return str.match(/[^ ]+/gi).join("%20")
    // return str.split(" ").filter(el => el !== "").join("%20");
}
console.log(
    URLify(" Mr. John     Smith      "),//
)