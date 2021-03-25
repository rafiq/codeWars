String.prototype.toString =function (val) {
    if (val === "undefined") return "undefined";
    return "" + val;
}

console.log(
    (123).toString(),// "123");
    undefined.toString(),// "123");
    Math.PI.toString(),// "3.141592653589793");
    Math.E.toString(),// "2.718281828459045");
    true.toString(),// "true");
    false.toString(),// "false");
    [1,2,3,4,5].toString().replace(/\s+/g, ""),// "[1,2,3,4,5]");
)
