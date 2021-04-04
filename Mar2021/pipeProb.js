function pipeFix(numbers){
    let max = Math.max(...numbers)
    let min = Math.min(...numbers)
    let array = []  ;

    for (let i = min; i <= max; i++) {
        array.push(i)
    }

    return array;
    // return numbers.reduce((acc,curr,idx) => {
    //     acc.push(min);

    //     return acc;
    // },[]);
}
console.log(
    pipeFix([1,2,3,5,6,8,9]),//[1,2,3,4,5,6,7,8,9]);
    pipeFix([1,2,3,12]),//[1,2,3,4,5,6,7,8,9,10,11,12]);
    pipeFix([6,9]),//[6,7,8,9]);
    pipeFix([-1,4]),//[-1,0,1,2,3,4]);
    pipeFix([1,2,3]),//[1,2,3]);
)