let remoteButtons = ["abcde123","fghij456","klmno789","pqrst.@0","uvwxyz_/"]

var tvRemote = function(word) {
    let sum = 0;
    let x = 0;
    let y = 0;
    for (let i = 0; i < word.length; i++) {
        for (let row = 0; row < remoteButtons.length; row++) {
        if (remoteButtons[row].includes(word[i])) {
            sum += Math.abs(x - remoteButtons[row].indexOf(word[i])) + Math.abs(y - row) + 1
            y = row;
            x = remoteButtons[row].indexOf(word[i]);
        }
        }
    }
    return sum;
}

console.log(
    tvRemote("does"),// 16);
    tvRemote("your"),// 23);
    tvRemote("solution"),// 33);
    tvRemote("work"),// 20);
    tvRemote("for"),// 12);
    tvRemote("these"),// 27);
    tvRemote("words"),// 25);
)