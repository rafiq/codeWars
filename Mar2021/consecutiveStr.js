function longestConsec(strarr, k) {
    if (strarr.length === 0 || k > strarr.length || k <= 0)
        return "";

    let concatStrs = [];
    for (let i = 0; i < strarr.length + k; i++) {
        concatStrs.push(strarr.slice(i, i + k))
    }
    let strings = concatStrs.filter(el => el.length === k)

    strings = strings.reduce((acc,curr) => {
        acc.push(curr.reduce((acc,curr) => acc += curr ),"")

        return acc;
    },[]);
    let max = ""

    for (let i = 0; i < strings.length; i++) {
        strings[i].length > max.length ? max = strings[i] : max;

    }
    return max;
}
console.log(
    longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], 2),//"abigailtheta")
    longestConsec(["ejjjjmmtthh", "zxxuueeg", "aanlljrrrxx", "dqqqaaabbb", "oocccffuucccjjjkkkjyyyeehh"], 1),//"oocccffuucccjjjkkkjyyyeehh")
    longestConsec([], 3),//"")
    longestConsec(["itvayloxrp","wkppqsztdkmvcuwvereiupccauycnjutlv","vweqilsfytihvrzlaodfixoyxvyuyvgpck"], 2),//"wkppqsztdkmvcuwvereiupccauycnjutlvvweqilsfytihvrzlaodfixoyxvyuyvgpck")
    longestConsec(["wlwsasphmxx","owiaxujylentrklctozmymu","wpgozvxxiu"], 2),//"wlwsasphmxxowiaxujylentrklctozmymu")
    // longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], -2),//"")
    longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 3),//"ixoyx3452zzzzzzzzzzzz")
    // longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 15),//"")
    // longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 0),//"")
)