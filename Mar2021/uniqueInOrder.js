var uniqueInOrder=function(iterable){
    let set = [];

    for (let i = 1; i < iterable.length + 1; i++) {
        if (iterable[i] !== iterable[i - 1]) set.push(iterable[i - 1])
    }
    return set;
  }




console.log(
uniqueInOrder('AAAABBBCCDAABBB') ,//['A', 'B', 'C', 'D', 'A', 'B']
uniqueInOrder('ABBCcAD')         ,//['A', 'B', 'C', 'c', 'A', 'D']
uniqueInOrder([1,2,2,3,3])       ,//[1,2,3]
)