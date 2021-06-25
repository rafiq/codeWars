var Vector = function (components) {
    this.components = components

    this.add = function(arg) {
        if (this.components.length !== arg.components.length) return new Error(`These need to be the same length`)
        let result = [];
        for (let i = 0; i < arg.components.length; i++) {
            result.push(this.components[i] + arg.components[i])
        }
        return new Vector(result)
    }
    this.subtract = function(arg) {
        if (this.components.length !== arg.components.length) return new Error(`These need to be the same length`)
        let result = [];
        for (let i = 0; i < arg.components.length; i++) {
            result.push(this.components[i] - arg.components[i])
        }
        return new Vector(result)
    }
    this.dot = function(arg) {
        if (this.components.length !== arg.components.length) return new Error(`These need to be the same length`)
        let result = [];
        for (let i = 0; i < arg.components.length; i++) {
            result.push(this.components[i] * arg.components[i])
        }
        return result.reduce((acc,curr) => acc + curr,0)
    }
    this.norm = function() {
        let result = 0;
        for (let i = 0; i < this.components.length; i++) {
            result += this.components[i]**2

        }
        return Math.sqrt(result)
    }

  };
  var a = new Vector([1,2]);
  var b = new Vector([3,4]);
  var c = new Vector([5, 6, 7, 8]);
  console.log(

    // a.add(b)//.equals(new Vector([4,6])));
    a.add(b),      // should return a new Vector([4, 6, 8])
a.subtract(b), // should return a new Vector([-2, -2, -2])
a.dot(b),      // should return 1*3 + 2*4 + 3*5 = 26
a.norm(),      // should return sqrt(1^2 + 2^2 + 3^2) = sqrt(14)
a.add(c),      // throws an error
  )

//   function Vector (v) {
//     this.v = v;

//     this.add = function (b) {
//       if (this.v.length !== b.v.length )
//         throw Error('Vectors are not same length.');

//       const result = [];
//       for (let i = 0, l = this.v.length; i < l; i++)
//         result.push(this.v[i] + b.v[i]);

//       return new Vector(result);
//     };

//     this.subtract = function (b) {
//       if (this.v.length !== b.v.length)
//         throw Error('Vectors are not same length.');

//       const result = [];
//       for (let i = 0, l = this.v.length; i < l; i++)
//         result.push(this.v[i] - b.v[i]);

//       return new Vector(result);
//     };

//     this.dot = function(b) {
//       if (this.v.length !== b.v.length)
//         throw Error('Vectors must be the same length.');

//       const result = [];
//       for (let i = 0, l = this.v.length; i < l; i++)
//         result.push(this.v[i] * b.v[i]);

//       return result.reduce((a,b) => a + b);
//     };

//     this.norm = function () {
//       return Math.sqrt(this.v.reduce((a,b) => a + Math.pow(b, 2)));
//     };

//     this.equals = function(b) {
//       if (this.v.length !== b.v.length) return false;

//       for (let i = 0, l = this.v.length; i < l; i++)
//         if (this.v[i] !== b.v[i])
//           return false;
//       return true;
//     };

//     this.toString = function () {
//       return '(' + this.v.join(',') + ')';
//     };
//   };

//   class Vector {
//     constructor(components) {
//       this.arr = components;
//     }

//     add({arr}) {
//       if (this.arr.length !== arr.length) throw new Error();
//       return new Vector(this.arr.map((val, idx) => val + arr[idx]));
//     }

//     subtract({arr}) {
//       if (this.arr.length !== arr.length) throw new Error();
//       return new Vector(this.arr.map((val, idx) => val - arr[idx]));
//     }

//     dot({arr}) {
//       if (this.arr.length !== arr.length) throw new Error();
//       return this.arr.reduce((pre, val, idx) => pre + val * arr[idx], 0);
//     }

//     norm() {
//       return Math.hypot(...this.arr);
//     }

//     toString() {
//       return `(${this.arr})`;
//     }

//     equals({arr}) {
//       return this.arr.every((val, idx) => val === arr[idx]);
//     }
//   }

//   'use strict'

// class Vector extends Array {

//   constructor(components) {

//     super()

//     this.push(...components)
//   }

//   add(vector) {

//     if (! sameComponents(this, vector))
//       throw new TypeError('This vector is from a different dimension')

//     const components = []

//     for (let i = 0; i < vector.length; i++)
//       components[i] = this[i] + vector[i]

//     return new Vector(components)
//   }

//   subtract(vector) {

//     if (! sameComponents(this, vector))
//       throw new TypeError('This vector is from a different dimension')

//     const components = []

//     for (let i = 0; i < vector.length; i++)
//       components[i] = this[i] - vector[i]

//     return new Vector(components)
//   }

//   dot(vector) {

//     if (! sameComponents(this, vector))
//       throw new TypeError('This vector is from a different dimension')

//     const multiple = []

//     for (let i = 0; i < vector.length; i++)
//       multiple[i] = this[i] * vector[i]

//     return multiple.reduce((sum, item) => sum + item, 0)
//   }

//   norm() {

//     return Math.sqrt(this.reduce((sum, item) => sum + item * item, 0))
//   }

//   equals(vector) {

//     if (! sameComponents(this, vector))
//       return false

//     for (let i = 0; i < vector.length; i++)
//       if (this[i] !== vector[i])
//         return false

//     return true
//   }

//   toString() {

//     return `(${this.join(',')})`
//   }
// }

// function sameComponents(a, b) {

//   return a.length === b.length
// }
// function Vector(components) { this.array = components; };
// Vector.prototype.operation = function(a, f) {
//   if (this.array.length != a.array.length) throw 'Mismatched length';
//   return new Vector(a.array.map((v,i) => f(this.array[i], v)));
// }
// Vector.prototype.add      = function(a) { return this.operation(a,(x,y) => x+y); }
// Vector.prototype.subtract = function(a) { return this.operation(a,(x,y) => x-y); }
// Vector.prototype.dot      = function(a) { return this.operation(a,(x,y) => x*y).array.reduce((s,v) => s+v, 0); }
// Vector.prototype.equals   = function(a) { return a.array.every((v,i) => v == this.array[i]); }
// Vector.prototype.norm     = function( ) { return Math.sqrt(this.array.reduce((s,v) => s + v*v, 0)); }
// Vector.prototype.toString = function( ) { return '(' + this.array.join(',') + ')'; }

var Vector = function (components) {
    this.x = components;
  };
  Vector.prototype.add = function(b){
    var a = this.x
    b = b.x;
    if(a.length !== b.length) throw new TypeError("Vectors have different length");
    return new Vector(a.map(function(x,i){ return x + b[i]; }));
  }
  Vector.prototype.subtract = function(b){
    var a = this.x;
    b = b.x;
    if(a.length !== b.length) throw new TypeError("Vectors have different length");
    return new Vector(a.map(function(x,i){ return x - b[i]; }));
  }
  Vector.prototype.dot = function(b){
    var a = this.x;
    b = b.x;
    if(a.length !== b.length) throw new TypeError("Vectors have different length");
    return a.reduce(function(s,x,i){ return s + x * b[i]; },0);
  }
  Vector.prototype.equals = function(b){
    var a = this.x;
    b = b.x;
    if(a.length !== b.length) return false;
    return a.every(function(x,i){ return x === b[i]; });
  }
  Vector.prototype.norm = function(){
    var a = this.x;
    return Math.sqrt(a.reduce(function(s,x){ return s + x*x }, 0));
  }
  Vector.prototype.toString = function(){
    return '(' + this.x.join(',') + ')';
  }