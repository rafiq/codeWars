function anagrams(word, words) {
    let wordMap = {};

    word.split("").forEach(el => {
        wordMap[el] ? wordMap[el]++ : wordMap[el] = 1;
    })

    return words.filter(el => {
        return isSameletters(wordMap,el)
    })

}
function isSameletters(needle,haystack) {
    let wordMap = needle;

    let tempMap = haystack.split("").reduce((acc,curr) => {
        acc[curr] ? acc[curr]++ : acc[curr] = 1;
        return acc;
    },{})
    let keys = Object.keys(tempMap)

    for (let i = 0; i < keys.length; i++) {
        if (tempMap[keys[i]] !== wordMap[keys[i]]) return false
    }
    return true;

}
console.log(
    anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']), //=> ['aabb', 'bbaa']
    anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']) ,// ['carer', 'racer']

anagrams('laser', ['lazing', 'lazy',  'lacer']) ,// []
)