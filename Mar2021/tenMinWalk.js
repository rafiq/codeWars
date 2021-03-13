function isValidWalk(walk) {

    let eastWestCount = 0;
    let northSouthCount = 0;


    walk.forEach((curr) => {
        if (curr === "e") eastWestCount += -1;
        if (curr === "s") northSouthCount += -1;
        if (curr === "n") northSouthCount += 1;
        if (curr === "w") eastWestCount += 1;
    });

    return eastWestCount === 0 && northSouthCount === 0 && walk.length === 10;
    // return eastWestCount
  }
console.log(
    isValidWalk(['n','s','n','s','n','s','n','s','n','s']), //'should return true');
    isValidWalk(['w','e','w','e','w','e','w','e','w','e','w','e']),// 'should return false');
    isValidWalk(['w']),//'should return false');
    isValidWalk(['n','n','n','s','n','s','n','s','n','s']),// 'should return false');
)