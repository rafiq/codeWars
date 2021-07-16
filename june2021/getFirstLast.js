Array.prototype.first = function () {
    if (this.length === 0) return undefined
    return this[0]
}
Array.prototype.last = function () {
    if (this.length === 0) return undefined
    return this[this.length - 1]
}

var a = [2, 5, 7, 3 ,4];
console.log(
a.first(),  // 2
a.last(),   // 4
)

Object.assign(Array.prototype, {
    first() {
      return this[0];
    },
    last() {
      return this[this.length - 1];
    },
  });