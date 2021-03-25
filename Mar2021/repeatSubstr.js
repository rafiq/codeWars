function f(s) {
    let subStrArray = [];

    for (let i = 1; i <= s.length; i++) {
        subStrArray.push(s.slice(0,i))
    }
    let cleanSubStr = subStrArray.filter(el => el.length > 1)
    let subStrLenArray = cleanSubStr.map(el => s.match(new RegExp(el,"g")));

    if (subStrLenArray.every(el => el.length === 1)) return [subStrLenArray[subStrLenArray.length - 1]+"",1]
    let lenArray = subStrLenArray.map(el => el.length)
    let longestSubElement = lenArray.indexOf(Math.max(...lenArray));
    return [subStrLenArray[longestSubElement][0],Math.max(...lenArray)]
    // return subStrLenArray(Math.max(...(subStrLenArray.map(el => el.length))))
    // return s.match(subStrLenArray.reduce((acc,curr,idx) => {
    //     let max = 0;
    //     acc.length < curr.length ? acc.push(curr[0]) : acc;

    //     return acc;
    // },[])+"")
  }
  console.log(
    f("ababab"),//["ab", 3])
    f("abcde"),//["abcde", 1])
  )