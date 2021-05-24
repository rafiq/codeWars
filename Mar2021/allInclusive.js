function containAllRots(strng, arr) {
    let subStrArray = [];
    if (strng.length === 0) return true;

    for (let i = 0; i < strng.length; i++) {
        subStrArray.push(strng.slice(i) + strng.slice(0,i))
    }

    for (let i = 0; i < subStrArray.length; i++) {
        if (subStrArray.every(el => arr.some(word => el === word))) return true;
    }
    return false;

}
console.log(
    containAllRots("", []),//true)
    containAllRots("", ["bsjq", "qbsj"]),//true)
    containAllRots("bsjq", ["bsjq", "qbsj", "sjqb", "twZNsslC", "jqbs"]),//true)
    containAllRots("XjYABhR", ["TzYxlgfnhf", "yqVAuoLjMLy", "BhRXjYA", "YABhRXj", "hRXjYAB", "jYABhRX", "XjYABhR", "ABhRXjY"]),//false)
)