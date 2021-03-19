function communicationModule(packet)
{

    let splitArray = [];
    let returnValue = "FFFF";
    let num1 = 0;
    let num2 = 0;
    let result = 0;

    for (let i = 0; i < packet.length; i += 4) {
        splitArray.push(packet.slice(i, i + 4))
    }
    let key = splitArray[1];
    num1 = splitArray[2];
    num2 = splitArray[3];
    if (key === "B7A2") {
        result = +num1 - +num2;
    } else if (key === "0F12") {
        result = +num1 + +num2;
    } else {
        result = +num1 * +num2;
    }

    if (result < 0) result = "0000";
    if (result > 9999) result = "9999";

    return splitArray[0] + returnValue +  String(result).padStart(4,"0") + "0000" +  splitArray[4];
}
console.log(
    communicationModule("H1H10F1200120008F4F4"),//"H1H1FFFF00200000F4F4");

    // Subtraction
    communicationModule("X7X7B7A201400058L0L0"),//"X7X7FFFF00820000L0L0");

    // Multiplication
    communicationModule("R5R5C3D900120008K4K4"),//"R5R5FFFF00960000K4K4");
)