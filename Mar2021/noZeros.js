
function noBoringZeros(n) {
    let str = n.toString().split("")

    while (str[str.length - 1] === "0") {
        str.pop();
    }
    if (str.length === 0) return 0;
    return Number(str.join(""))
  }
  console.log(
    noBoringZeros(1450),//145)
    noBoringZeros(960000),//96)
    noBoringZeros(1050),//105)
    noBoringZeros(-1050),//-105)
    noBoringZeros(-105),//-105)
    noBoringZeros(0),//0)
  )