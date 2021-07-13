// function Number(params) {

// }
Number.prototype.add = function (num) {
    return this + num;
}
Number.prototype.sub = function (num) {
    return this - num;
}
Number.prototype.pow = function (num) {
    return Math.pow(this,num);
}
Number.prototype.div = function (num) {
    return this / num;
}
Number.prototype.mul = function (num) {
    return this * num;
}
Number.prototype.sqr = function (num) {
    return Math.sqrt(this);
}

var n = 25;
console.log(
n.add(4),  // 29   (addition)
n.sub(3),  // 22   (subtraction)
n.mul(2),  // 50   (multiplication)
n.div(5),  // 5    (division)
n.pow(2),  // 625  (power)
n.sqr(),   // 5    (square root)
)

const { pow, sqrt } = Math;
Object.assign(Number.prototype, {
  add(n) { return (this + n); },
  sub(n) { return (this - n); },
  mul(n) { return (this * n); },
  div(n) { return (this / n); },
  pow(n) { return pow(this, n); },
  sqr( ) { return sqrt(this); },
});

