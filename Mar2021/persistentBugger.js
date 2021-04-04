function persistence(num, count = 0) {
    // function persistence(num, cnt=0) {
    //     let arrayNum = num.toString().split('');
    //     return arrayNum.length === 1 ?
    //       cnt :
    //       persistence(arrayNum.reduce((x,y) => x*y), ++cnt)
    //   }
// The below is my attempt at recursion which did not work and the above is a answer that used recursion and did work. Well I will be a monkey's uncle. I guess I have done a couple things wrong. First I didn't declare the count variable inside the arguments and set it equal to zero. Next, I didn't have the count argument present when I was recalling the function in the if statement. Lastly, is that I was suppposed to increment the count function by putting two plus signs infrom of the count variable as opposed to behind it as I had been doing before. This must mean that the two plus signs in front have a  different meaning than two in the back. I need to find out about this.

    let arrayNum = String(num).split("");

    return arrayNum.length === 1 ? count : persistence(arrayNum.reduce((acc,curr) => acc *= curr),++count);

    // let count = 0;
    // let newNum = num;

    // while (newNum >= 10) {
    //     newNum = String(newNum).split("").reduce((acc,curr) => {
    //         acc *= curr;
    //         return acc;
    //     },1);
    //     count++;
    // }
    // return count;
 }
 console.log(
    persistence(39),//3);
    persistence(4),//0);
    persistence(25),//2);
    persistence(999),//4);
 )