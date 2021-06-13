function substringTest(str1,str2) {
     str1 = str1.toLowerCase();
     str2 = str2.toLowerCase();
    let largerStr ;
    let smallerStr;
    if (str1.length > str2.length) {
        smallerStr = str2;
        largerStr = str1;
    } else {
        smallerStr = str1;
        largerStr = str2;
    }
    let subStrArray = [];

    for (let i = 0; i < smallerStr.length; i++) {
        for (let j = i + 2; j <smallerStr.length + 1; j++) {
            if (smallerStr.slice(i,j).length < smallerStr.length) {
                subStrArray.push(smallerStr.slice(i,j))
                console.log(smallerStr.slice(i,j))
            }
        }
    }
    for (let i = 0; i < subStrArray.length; i++) {
        if (largerStr.includes(subStrArray[i])) return true;
    }
    return false;
}
console.log(
    // substringTest("Something","Fun"),//false;
    // substringTest("",""),//false;
    // substringTest("1234567","541265"),//true;
    // substringTest("Something","Home"),//true;
    substringTest("manuscript","ban11111111111ana"),//true;
)