String.prototype.trim = function (c = " ") {
  let result = "";
  let i = 0;
  let j = this.length - 1;

  while (i !== this.length && this[i].toLowerCase() === c.toLowerCase()) i++;

  while (j !== 0 && this[j].toLowerCase() === c.toLowerCase()) j--;

  for (; i <= j; i++) {
    result += this[i];
  }
  return result;
  //   for (let i = 0; i < this.length; i++) {
  //     if (this[i].toLowerCase() === c || this[i].toUpperCase() === c) continue;
  //     else {
  //       result += this.slice(i);
  //       break;
  //     }
  //   }
  //   for (let i = result.length - 1; i >= 0; i--) {
  //     if (result[i].toLowerCase() === c || this[i].toUpperCase() === c) continue;
  //     else {
  //       result = result.slice(0, i + 1);
  //       break;
  //     }
  //   }
  //   return result;
};
console.log(
  "LLLHello Worldlll".trim("l"), // "Hello World");
  "   Hello World                 ".trim(), // "Hello World");
  "XVisca ElbarcaXX".trim("X") // "Visca Elbarca");
);

// String.prototype.trim = function (c = " ") {
//   var s = "";
//   var i = 0;
//   while (i != this.length && this[i].toLowerCase() == c.toLowerCase()) i++;
//   var j = this.length - 1;
//   while (j != 0 && this[j].toLowerCase() == c.toLowerCase()) j--;
//   for (; i <= j; ++i) s += this[i];
//   return s;
// };

// String.prototype.trim = function(c = ' '){
//     arr = this.toString().split('');
//     for(let i=0;i<arr.length;i++) {
//       if (arr[i].toLowerCase()===c.toLowerCase()) arr[i]='';
//       else break;
//     }
//       for(let i=arr.length-1;i>0;i--) {
//       if (arr[i].toLowerCase()===c.toLowerCase()) arr[i]='';
//       else break;
//     }

//     return arr.join('');
//   }
