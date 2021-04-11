function solve(s){

        return Math.max(...s.match(/[0-9]+/g));
        // let nums = "";
        // let numsArray = [];
        // s += "a";

        // for (let i = 0; i < s.length; i++) {
        //     if (isLetter(s[i]) && nums > 0) {
        //         numsArray.push(+nums);
        //         nums = "";
        //     } else if (isNum(s[i])) {
        //         nums += s[i]
        //     }
        // }
        // return Math.max(...numsArray)
    };
    function isLetter(char) {
        return char >= "a" && char <= "z";
    }
    function isNum(num) {

        return num >= 0 && num <= 9;
    }
    console.log(
        solve('gh12cdy695m1'),//695);
        solve('2ti9iei7qhr5'),//9);
        solve('vih61w8oohj5'),//61);
        solve('f7g42g16hcu5'),//42);
        solve('lu1j8qbbb85'),//85);
    )