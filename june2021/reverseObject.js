String.prototype.reverse = function () {
    let result = "";

    for (let i = this.length - 1; i >= 0; i--) {
        result += this[i]
    }
    return result
}

console.log(
    'Hello, World!'.reverse(),//'!dlroW ,olleH'
)

String.prototype.reverse = function() {
    return [...this].reverse().join("")
  };
