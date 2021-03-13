function calculator(a,b,sign){
    if (isNaN(a) || isNaN(b)) return "unknown value"

    switch (sign) {
        case "+":
            return a + b
            break;
        case "-":
            return a - b
            break;
        case "/":
            return a / b
            break;
        case "*":
            return a * b
            break;
        default:
            return "unknown value"
            break;
    }

}

console.log(
    calculator(1,2,"+"),// 3, "calculate");
    calculator(1,2,"-"), //-1, "calculate");
    calculator(3,5,"*"),// 15, "calculate");
    calculator(6,2,"/"),// 3, "calculate");
    calculator(6,2,"$"), //"unknown value", "calculate");
    calculator(6,"h","*"),// "unknown value", "calculate");
)