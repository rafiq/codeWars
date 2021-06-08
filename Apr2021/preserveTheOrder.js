
const encode = (number) => {
    var list = '5678901234'.split('');
    return (number+"").split('').map(function(e){return list[e]}).join('');
};

const decode = (encoded) => {
    return parseInt(encode(encoded), 10);
}

console.log(
    // encode(5),
    // encode(1.2893),
    // encode(-3.5),
    // encode(1.3542542e287),
    decode(encode(42)), //42);
   encode(5) < encode(6),
// // it("floats", () => {
    decode(encode(1.2893)),// 1.2893),
   encode(1.2893) < encode(1.398),
// // })
// // it("negative", () => {
    decode(encode(-3)), //-3),
   encode(-3.5) < encode(-3),//;
// // })
// // it("big numbers", () => {
    decode(encode(1.3542542e287)),// 1.3542542e287);
   encode(1.3542542e287) < encode(1.3542542e288)//;
)