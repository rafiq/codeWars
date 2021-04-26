var capitals = function (word) {

    return word.split("").reduce((acc,curr,idx) => {
        if (curr.toUpperCase() === curr) acc.push(idx)

        return acc;
    },[])
};
console.log(
    capitals('CodEWaRs'),// [0,3,4,6] );
)