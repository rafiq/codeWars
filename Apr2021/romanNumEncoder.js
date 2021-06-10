function solution(number){
    let romanNums = {
        I    :      1,
V       :   5,
X     :     10,
L      :    50,
C       :   100,
D        :  500,
M         : 1000,
    }
    let result = "";

    while (number >= 0) {
        if (number > 1000) {
            result += "M";
            number -= 1000
        } else if (number > 500) {
            result += "D";
            number -= 500;
        } else if (number > 100) {
            result += "C";
            number -= 100;
        } else if (number > 50) {
            result += "L";
            number -= 50
        } else if (number > 10) {
            result += "X"
            number -= 10;
        } else if (number > 5) {
            result += "V";
            number -= 5;
        } else if (number > 1) {
            result += "I";
            number -= 1;
        }
    }
    return result;
  }
  console.log(
    solution(1),// 'I', '1 should, "I"')
    solution(2),// 'II', '2 should, "II"')
    solution(3),// 'III', '3 should, "III"')
    solution(4),// 'IV', '4 should, "IV"')
    solution(5),// 'V', '5 should, "V"')
    solution(9),// 'IX', '9 should, "IX"')
    solution(10),// 'X', '10 should, "X"')
    solution(11),// 'XI')
    solution(19),// 'XIX')
    solution(22),// 'XXII')
    solution(15),// 'XV')
    solution(1000),// 'M', '1000 should, "M"')
    solution(1001),// 'MI', '1001 should, "MI"')
    solution(1990),// 'MCMXC', '1990 should, "MCMXC"')
    solution(2007),// 'MMVII', '2007 should, "MMVII"')
    solution(2008),// 'MMVIII', '2008 should, "MMVIII"')
  )