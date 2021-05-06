// I really like this one because it is splitting the original array and reassigning each character with a hash symbol and then join up until the last four characters. So that takes care of any strings that are less than four chars. Then joins at the end.

function maskify(cc) {
    cc = cc.split("");
    for(var i = 0; i < cc.length - 4; i++){
      cc[i] = "#";
  }

  cc = cc.join("");
  return cc
  }

//   The below is pretty smooth and short but using the replace method seems pretty good.
function maskify(cc) {
    return cc.slice(0, -4).replace(/./g, '#') + cc.slice(-4);
  }