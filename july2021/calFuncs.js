function zero(param) {
    if (typeof param === "number" || param === undefined) return 0
    else {
        return param(0)
    }
}
function one(param) {
    if (typeof param === "number" || param === undefined) return 1
    else {
        return param(1)
    }
}
function two(param) {
    if (typeof param === "number" || param === undefined) return 2
    else {
        return param(2)
    }
}
function three(param) {
    if (typeof param === "number" || param === undefined) return 3
    else {
        return param(3)
    }
}

function four(param) {
    if (typeof param === "number" || param === undefined) return 4
    else {
        return param(4)
    }
}
function five(param) {
    if (typeof param === "number" || param === undefined) return 5
    else {
        return param(5)
    }
}
function six(param) {
    if (typeof param === "number" || param === undefined) return 6
    else {
        return param(6)
    }
}
function seven(param) {
    if (typeof param === "number" || param === undefined) return 7
    else {
        return param(7)
    }
}
function eight(param) {
    if (typeof param === "number" || param === undefined) return 8
    else {
        return param(8)
    }
}
function nine(param) {
    if (typeof param === "number" || param === undefined) return 9
    else {
        return param(9)
    }
}

function plus(num) {
    return function(firstNum) {
        return firstNum + num
    }
}
function minus(num) {
    return function(firstNum) {
        return firstNum - num
    }
}
function times(num) {
    return function(firstNum) {
        return firstNum * num
    }
}
function dividedBy(num) {
    return function(firstNum) {
        return Math.floor(firstNum / num)
    }
}
console.log(
    seven(times(five())),// 35);
    four(plus(nine())),// 13);
    eight(minus(three())),// 5);
    six(dividedBy(two())),// 3);
)

// ! The below solution is great!!! I like how they did not repeat code! Genius
var n = function(digit) {
    return function(op) {
      return op ? op(digit) : digit;
    }
  };
  var zero = n(0);
  var one = n(1);
  var two = n(2);
  var three = n(3);
  var four = n(4);
  var five = n(5);
  var six = n(6);
  var seven = n(7);
  var eight = n(8);
  var nine = n(9);

  function plus(r) { return function(l) { return l + r; }; }
  function minus(r) { return function(l) { return l - r; }; }
  function times(r) { return function(l) { return l * r; }; }
  function dividedBy(r) { return function(l) { return l / r; }; }

//   ! The below is not the most streamline but it is better than mine because they used the ternary operator very well.
function zero(operator) {
    return operator ? operator(0) : 0;
  }

  function one(operator) {
    return operator ? operator(1) : 1;
  }

  function two(operator) {
    return operator ? operator(2) : 2;
  }

  function three(operator) {
    return operator ? operator(3) : 3;
  }

  function four(operator) {
    return operator ? operator(4) : 4;
  }

  function five(operator) {
    return operator ? operator(5) : 5;
  }

  function six(operator) {
    return operator ? operator(6) : 6;
  }

  function seven(operator) {
    return operator ? operator(7) : 7;
  }
  function eight(operator) {
    return operator ? operator(8) : 8;
  }

  function nine(operator) {
    return operator ? operator(9) : 9;
  }

  function plus(rightVal) {
    return function(leftVal) {
      return leftVal + rightVal;
    }
  }

  function minus(rightVal) {
    return function(leftVal) {
      return leftVal - rightVal;
    }
  }

  function times(rightVal) {
    return function(leftVal) {
      return leftVal * rightVal;
    }
  }

  function dividedBy(rightVal) {
    return function(leftVal) {
      return leftVal / rightVal;
    }
  }