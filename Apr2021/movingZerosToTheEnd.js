var moveZeros = function (arr) {

    let nums = arr.filter(el => el !== 0)
    let zeros = arr.join("").replace(/[^0]/g,"").split("").map(x => {
        if (Number(x) === 0 || Number(x)) return Number(x);
        else return x;
    });
    return  nums.concat(zeros)
  }
  console.log(
    moveZeros([ 'a',
    0,
    0,
    'b',
    null,
    'c',
    'd',
    0,
    1,
    false,
    0,
    1,
    0,
    3,
    [],
    0,
    1,
    9,
    0,
    0,
    {},
    0,
    0,
    9 ]),//["a","b",null,"c","d",1,false,1,3,[],1,9,{},9,0,0,0,0,0,0,0,0,0,0]
    moveZeros([1,2,0,1,0,1,0,3,0,1]),
    moveZeros([ 'a', 0, 0, 'b', 'c', 'd', 0, 1, 0, 1, 0, 3, 0, 1, 9, 0, 0, 0, 0, 9 ]),//["a","b","c","d",1,1,3,1,9,9,0,0,0,0,0,0,0,0,0,0]
    // JSON.stringify([ 1, 2, 1, 1, 3, 1, 0, 0, 0, 0 ])
  )