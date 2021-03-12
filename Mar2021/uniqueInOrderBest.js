// I really like this one which is taking the array and it doesn't matter if it is an array or a string and then filters out the elements if the current index does not equal the previous index.

var uniqueInOrder=function(iterable){
    return [...iterable].filter((a, i) => a !== iterable[i-1])
}
