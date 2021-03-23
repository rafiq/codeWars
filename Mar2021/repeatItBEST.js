// This one was actually good to see with the use of Array and .join. I really have not understand fully how to use Array.

var repeatIt = function(str, n) {
    return typeof str === 'string' ? Array(n+1).join(str) : 'Not a string';
  }