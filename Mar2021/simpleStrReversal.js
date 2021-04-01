function solve(str){
    let spaceArray = [];
    let reversedStr = str.split(" ").join("").split("").reverse()

    for (let i = 0; i < str.length; i++) {
        if (str[i] === " ") spaceArray.push(i);
    }
    spaceArray.forEach(el => {
        reversedStr.splice(el,0," ")
    })
    return reversedStr.join("")

 }
 console.log(
    solve("codewars"),//"srawedoc");
    solve("your code"),//"edoc ruoy");
    solve("your code rocks"),//"skco redo cruoy");
    solve("i love codewars"),//"s rawe docevoli");
 )