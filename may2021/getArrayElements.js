Array.prototype.only = function(keys)
{
    // keys = keys.sort((a,b) => a - b)
    // return keys.reduce((acc,curr,idx,arr) => {
    //     acc.push(this[curr])
    //     return acc;
    // },[]);

    return keys.sort((a,b) => a - b).map(el => this[el])
}
var array = ['a', 'b', 'c', 'd', 'e'];
let bar = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k' ];
console.log(
    // array.only([0, 3]),// ['a', 'd']);
    // array.only([1]),// ['b']);
    // array.only([0,1,3,4]),// ['a', 'b', 'd', 'e']);
    bar.only([ 7, 2, 6, 3, 5 ]),// ['c', 'd', 'f', 'g', 'h']
)

// I like the below solution for its simplicity.
Array.prototype.only = function(k) {
    return this.filter((e, i) => k.includes(i));
  }

  Array.prototype.only = function(keys) {
    return keys.sort((a,b) => a-b).map(x => this[x])
  }