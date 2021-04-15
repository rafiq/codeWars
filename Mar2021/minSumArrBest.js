// I really like this solution because they did away with having to use indexes and just kept chopping up the array and multiplying and addind the parts until the array was empty. Genius.

function minSum(arr) {
    arr.sort((x,y)=>x-y)
    s=0
    while(arr.length)s+=arr.pop()*arr.shift()
    return s
  }