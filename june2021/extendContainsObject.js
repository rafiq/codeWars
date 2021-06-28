String.prototype.contains = function (str,boolean) {
    if (boolean) return this.includes(str)
    return this.toLowerCase().includes(str.toLowerCase());
}

console.log(
'Hello, World!'.contains('Hel'),         // true
'Hello, World!'.contains('wor'),         // true
'Hello, World!'.contains('wor', true),   // false (case-sensitive check)
'Hello, World!'.contains('a'),           // false
)

String.prototype.contains = function (sub, sens) {
    return sens ? this.includes(sub) : this.toLowerCase().includes(sub.toLowerCase());
  }