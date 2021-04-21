function high(x){
    const SCORES_PER_LETTER = " abcdefghijklmnopqrstuvwxyz";
    let array = x.split(" ");

    let numArray = array.map(word => word.split("").reduce((acc,curr) => {
        acc += SCORES_PER_LETTER.indexOf(curr)

        return acc;
    },0) );
    return array[numArray.indexOf(Math.max(...numArray))]
}
console.log(
    high('man i need a taxi up to ubud'),//'taxi');
    high('what time are we climbing up the volcano'),//'volcano');
    high('take me to semynak'),//'semynak');
    high('aa b'),//'aa');
)