// THis is a good way to check if there is a zero at the end and account for if the number is not zero. Then they also just chopped off the last digit by dividing the number and reassigning that number back to the original number. This is short, and works great. I need to remember that numbers can be treated as numbers.

function noBoringZeros(n) {
    while(n%10==0 && n!=0){n/=10;}
    return n;
  }

//   Here is a nice recursive way of handling this problem that I really like. I like how this function uses the || expression to take care of the conditions and then it either returns the original number or goes into recursion and checks the original number with the zero chopped off.genius.
function noBoringZeros(n) {
    return n % 10 || n === 0 ? n : noBoringZeros(n / 10);
  }