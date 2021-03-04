Array.prototype.filter = function (func) {
    var filtered = [];
    for(let i = 0; i < this.length; i++) {
      if (func(this[i], i, this)) filtered.push(this[i]);
    }
    return filtered;
  }

  consolel.log(
    [1,2,3,4].filter(num => 3)//4
  )