function basicOp(operation, value1, value2)
{

    switch (operation) {
        case "+":
            return value1 + value2;
            break;
        case "-":
            return value1 - value2;
            break;
        case "/":
            return value1 / value2;
            break;
        case "*":
            return value1 * value2;
            break;

        default:
            break;
    }
    return false;
}
console.log(
    basicOp('+', 4, 7),// 11);
    basicOp('-', 15, 18),// -3);
    basicOp('*', 5, 5),// 25);
    basicOp('/', 49, 7),// 7);
)