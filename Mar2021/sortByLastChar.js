function last(x){
    let wordArray = x.split(" ");
    return wordArray.sort((a,b) => {
        if (a[a.length - 1] > b[b.length - 1]) return 1;
        if (a[a.length - 1] < b[b.length - 1]) return -1;
        if (a[a.length - 1] === b[b.length - 1]) return 0;
    });
}
console.log(
    last('man i need a taxi up to ubud'),//['a', 'need', 'ubud', 'i', 'taxi', 'man', 'to', 'up']);
    last('what time are we climbing up the volcano'),//['time', 'are', 'we', 'the', 'climbing', 'volcano', 'up', 'what']);
    last('take me to semynak'),//['take', 'me', 'semynak', 'to']);
)