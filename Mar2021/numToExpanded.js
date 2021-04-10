function expandedForm(num) {


    let str = String(num).split("").reverse();
    let newStr = str.reduce((acc,curr,idx) => {
        if (curr === "0") acc;
        else acc += curr + "0".repeat(idx) + " + ";

        return acc;
    },"");

    return newStr.split(" ").reverse().join(" ").slice(3);
  }
console.log(
    expandedForm(12),//'10 + 2');
    expandedForm(42),//'40 + 2');
    expandedForm(70304),//'70000 + 300 + 4');
)

// let str = "";

// let lastDigit = num % 10;

// let remainder = (num - lastDigit) ;

// str += lastDigit + " + ";

// if (remainder < 100) return (str + remainder).split("").reverse().join("");
// else if (String(remainder)[] === ))

// return remainder;

    // let str = num.toString();
    // let i = 0;
    // let newStr = "";

    // while (i < str.length) {
    //     str.split("").forEach((digit,idx) => {
    //         if (Number(digit) > 0) {
    //             newStr += str.substr(idx,1) + "0".repeat((str.length - 1) - idx);
    //             newStr += " + ";
    //             i++;
    //         }  if (idx === str.length - 1) {break};
    //     })
    // }

    // return newStr.slice(0,-3)
    // return str.length - 1;