Array.prototype.reverse = function() {
    let j = this.length - 1;
    let temp;

    for (let i = 0; i < Math.floor(this.length / 2); i++) {
        temp = this[i];
        this[i] = this[j];
        this[j] = temp;
        j--;
    }
    return this
  };
  console.log(
    [1, 2, 3, 4].reverse(),// [4,3,2,1]);
    ["a", "b", "c"].reverse(),// ["c", "b", "a"]);
    [].reverse(),// []);
  )
// ! IT is cool how he put all his variables in the for line.
  Array.prototype.reverse = function() {
    for(var i = 0, j = this.length-1; i < j; i++, j--) {
      var tmp = this[i];
      this[i] = this[j];
      this[j] = tmp;
    }
    return this;
  };