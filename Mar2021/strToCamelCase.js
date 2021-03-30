function toCamelCase(str){
    // if (str.length === 0) return "";
    // let newStr = "";
    // if (str.includes("-")) newStr = str.split("-");
    // if (str.includes("_")) newStr = str.split("_");

    //     return newStr.reduce((acc,curr,idx) => {

    //         if (idx > 0) acc += curr[0].toUpperCase() + curr.slice(1);
    //         else acc += curr;

    //         return acc;
    //     },"")
    return str.split(/-|_/g);
}
console.log(
    toCamelCase(''),//'', "An empty string was provided but not returned")
    toCamelCase("the_stealth_warrior"),//"theStealthWarrior", "toCamelCase('the_stealth_warrior') did not return correct value")
    toCamelCase("The-Stealth-Warrior"),//"TheStealthWarrior", "toCamelCase('The-Stealth-Warrior') did not return correct value")
    toCamelCase("A-B-C"),//"ABC", "toCamelCase('A-B-C') did not return correct value")
)