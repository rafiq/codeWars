function topThreeWords(text) {
    let regex = /[a-zA-Z']+/g;
    text = text.toLowerCase();
    let cleanWords = text.match(regex,"");

    if (!cleanWords) return [];

    let mapping = {};

    for (let word of cleanWords) {
        if (mapping[word]) mapping[word]++;
        else mapping[word] = 1;
    }

    let WORDS = Object.entries(mapping)
    return WORDS.sort((a,b) => b[1] - a[1]).reduce((acc,curr,idx) => {
        if (idx < 3) acc.push(curr[0]);
        return acc//.flat();
    },[])
    // return getTop3(WORDS).reduce((acc,curr) => {

    //     acc.push(curr[0])
    //     return acc;
    // },[]);
    // return wordWord;

    // let regex = ".*[a-zA-Z].*";
    // if (text.match(regex)) {
    //     let wordMap = new Map();
    //     text.split(' ').forEach(word => {
    //         if (word) {
    //             word = word.toLowerCase();
    //             if (wordMap.has(word)) {
    //                 let count = wordMap.get(word);
    //                 count ++;
    //                 wordMap.set(word, count);
    //             } else {
    //                 wordMap.set(word, 1);
    //             }
    //         }
    //     })
    //     const sortedWordMap = new Map([...wordMap.entries()].sort((a, b) => b[1] - a[1]));

    //     let result = Array.from(sortedWordMap.keys()).filter( (word, index) => index < 3);
    //     result = result.map(res => {
    //         res = res.replace(/[/.,]/g, '')
    //         if (res !== "") {
    //             return res
    //         }
    //     })
    //     return result.filter(res => res !== undefined)

    // } else {
    //     return [];
    // }

}
function getTop3(arr) {
    while ( arr.length > 3) {
        if (arr[3][1] > arr[2][1]) {
            arr.splice(2,1);
        } else if (arr[3][1] > arr[1][1]) {
            arr.splice(1,1);
        } else if (arr[3][1] > arr[0][1]) {
            arr.splice(0,1);
        } else {
            arr.splice(3,1);
        }
    }

    return arr;
}
console.log(
    topThreeWords("a a a  b  c c  d d d d  e e e e e"), //['e','d','a'])

    topThreeWords("a a c b b"), //['a','b','c'])

    topThreeWords("e e e e DDD ddd DdD: ddd ddd aa aA Aa, bb cc cC e e e"),//['e','ddd','aa'])

    topThreeWords("  //wont won't won't "),// ["won't", "wont"])

    topThreeWords("  , e   .. "), //["e"])

    topThreeWords("  ...  "),// [])

    topThreeWords("  '  "), //[])

    // topThreeWords(`In a village of La Mancha, the name of which I have no desire to call to
    // mind, there lived not long since one of those gentlemen that keep a lance
    // in the lance-rack, an old buckler, a lean hack, and a greyhound for
    // coursing. An olla of rather more beef than mutton, a salad on most
    // nights, scraps on Saturdays, lentils on Fridays, and a pigeon or so extra
    // on Sundays, made away with three-quarters of his income.`), //['a','of','on'])
)