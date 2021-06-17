function SubstringTest(str1, str2)
{
    let longestStr = "";
    let shortestStr = "";

    if (Math.min(str1.length, str2.length) === str2.length) {
        shortestStr = str2.toLowerCase();
        longestStr = str1.toLowerCase();
    } else {
        shortestStr = str1.toLowerCase();
        longestStr = str2.toLowerCase();
    }
    let subStrArray = getSubStrArray(shortestStr)
    for (let i = 0; i < subStrArray.length; i++) {
        if (longestStr.toLowerCase().match(subStrArray[i])) return true;
    }
        return false;
}
function getSubStrArray(str) {
    let subStrArray = [];
    for (let i = 0; i < str.length; i++) {
       for (let j = i + 2; j < str.length + 1; j++) {
           subStrArray.push(str.slice([i],[j]))
       }
    }
   return subStrArray;

}
console.log(
    // SubstringTest("Something","Home"),// true);
    // SubstringTest("Something","Fun"),// false);

    // SubstringTest("OYwccEwA" ,"undefinedcPLzNri"),// false);
    SubstringTest("test", "lllt"),// false);
)