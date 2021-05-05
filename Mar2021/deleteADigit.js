function deleteDigit(n) {
    let originalArray = n.toString().split("");
    let newArray = [];

    for (let i = 0; i < originalArray.length; i++) {
        originalArray[i] = "";
        newArray.push(+(originalArray.join("")));
        originalArray = n.toString().split("");
    }
return Math.max(...newArray)
  }

  console.log(
    deleteDigit(152),//52)

    deleteDigit(1001),//101)

    deleteDigit(10),//1)
  )