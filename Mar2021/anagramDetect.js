var isAnagram = function(test, original) {

    let testArray = test.slice().toLowerCase().split("");
    if (test.length !== original.length) return false;
    original.toLowerCase().split("").forEach((letter,idx) => {

        if (testArray.includes(letter)) testArray.splice(testArray.indexOf(letter),1)
    })
    return testArray.length === 0;
};

console.log(
    isAnagram("foefet", "toffee"), //true, 'The word foefet is an anagram of toffee')
    isAnagram("Buckethead", "DeathCubeK"), //true, 'The word Buckethead is an anagram of DeathCubeK')
    isAnagram("Twoo", "WooT"), //true, 'The word Twoo is an anagram of WooT')

    isAnagram("dumble", "bumble"), //false, 'Characters do not match for test case dumble, bumble')
    isAnagram("ound", "round"),// false, 'Missing characters for test case ound, round')
    isAnagram("apple", "pale"),// false, 'Same letters, but different count')
)