function nextBigger(n){
    let numArray = n.toString().split("");

    for (let i = n + 1; n < n**2; i++) {
        if (hasAllDigits(i,numArray)) return i
    }
    return false;
    // return hasAllDigits(12, numArray)
  }
  function hasAllDigits(num, array) {
        num = num.toString().split("")//.every(char => array.includes(char))

        for (let i = 0; i < num.length; i++) {
            if (array.includes(num[i])) {
                array.splice(array.indexOf(num[i]), 1)
            } else {
                return false;
            }
        }
        // return array.every(char => char === "")
        return array.length === 0
  }
  console.log(
    nextBigger(12),//21)
    // nextBigger(513),//531)
    // nextBigger(2017),//2071)
    // nextBigger(414),//441)
    // nextBigger(144),//414)
  )
  function maxWithDigits(n) {
    return parseInt(n.toString().split("").sort(function(a, b) { return b - a; }).join(""));
  }
  function nextBigger(n) {
    let mx = maxWithDigits(n)
    for (i = n + 1; i <= mx; i++)
      if (maxWithDigits(i) === mx)
        return i;
    return -1;
  }