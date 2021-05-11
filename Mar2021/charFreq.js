function charFreq(message) {
    return message.split("").reduce((acc,curr) => {
        if (acc[curr] === undefined) acc[curr] = 1;
        else acc[curr]++;
        return acc;
    },{})
    }
console.log(
charFreq("I like cats") // Returns {'a': 1, ' ': 2, 'c': 1, 'e': 1, 'I': 1, 'k': 1, 'l': 1, 'i': 1, 's': 1, 't': 1}
)