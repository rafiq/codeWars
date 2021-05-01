function dontGiveMeFive(start, end)
{


    let array = Array(end - start + 1).fill(start).reduce((acc,curr,idx,arr) => {
        acc.push(idx + start);
        return acc;
    },[])

    let newArray = array.reduce((acc,curr,idx) => {
        curr === 5 || String(curr).includes("5") ? acc : acc.push(curr);
        return acc;
    },[])
    return newArray.length
}
console.log(
    // dontGiveMeFive(1,9),// 8);
    // dontGiveMeFive(4,17),// 12);
    // dontGiveMeFive(1,90),// 72);
    dontGiveMeFive(-14, -1),// 14);
)