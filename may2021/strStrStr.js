// String.prototype.toString = function () {
//     // console.log(val)
//     // let newVal = val;
//     // if (newVal === "undefined") return "undefined";
//     // if (typeof newVal === "array")
//     //   return "" + newVal;
//     return `${this}`
//     // return this
//   }
  Number.prototype.toString = function() {return "" + this;}
Array.prototype.toString = function() {return "[" + this.join(",") + "]";}
Boolean.prototype.toString = function() {return "" + this;}
Object.prototype.toString = function() {return "" + this;}
  console.log(
    (123).toString(),// "123");
    Math.PI.toString(),// "3.141592653589793");
    Math.E.toString(),// "2.718281828459045");
    true.toString(),// "true");
    false.toString(),// "false");
    [1,2,3,4,5].toString().replace(/\s+/g, ""),// "[1,2,3,4,5]");
  )