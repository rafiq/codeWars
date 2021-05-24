function arithmetic(a, b, operator){

    switch (operator) {
        case "add":
            return a + b;
            break;
        case "subtract":
            return a - b;
            break;
        case "multiply":
            return a * b;
            break;

        default:
            return  a / b //(a / b).toFixed(2)
            break;
    }
    // return operator;
  }
  console.log(
    arithmetic(1, 2, "add"),// 3, "'add' should return the two numbers added together!");
    arithmetic(8, 2, "subtract"),// 6, "'subtract' should return a minus b!");
    arithmetic(5, 2, "multiply"),// 10, "'multiply' should return a multiplied by b!");
    arithmetic(8, 2, "divide"),// 4, "'divide' should return a divided by b!");
  )