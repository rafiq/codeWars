Array.prototype.zip = function (arr, fn) {


    return arr;
   }
   var a = [1, 2, 3, 4, 5];
   var b = ['a','b','c','d','e'];
   console.log(
	a.zip(b, (a, b) => a + b),// ["1a", "2b", "3c", "4d", "5e"]);
	b.zip(a, (a, b) => a + b),// ["a1", "b2", "c3", "d4", "e5"]);
	b.zip(a.zip(b,(a,b)=>a*b.charCodeAt(0)), (a, b) => a + b),//["a97", "b196", "c297", "d400", "e505"])
   )

   Array.prototype.zip = function (arr, fn) {
    const res = []
    for (let i = 0; i < Math.min(this.length, arr.length); i++) {
      res[i] = fn(this[i], arr[i])
    }

    return res
  }

