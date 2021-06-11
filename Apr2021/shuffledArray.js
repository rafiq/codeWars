function shuffledArray(shuffled) {
    shuffled.sort((a,b) => b - a)
    for (let i = 0; i < shuffled.length; i++) {
        if (shuffled[i] === getArraySum(shuffled.slice(0,i).concat(shuffled.slice(i + 1)))) {
            shuffled.splice(i,1)
        }
    }
    return shuffled.sort((a,b) => a - b);
  }
  function getArraySum(arr) {
      return arr.reduce((acc,curr) => acc + curr,0)
  }
  console.log(
    shuffledArray([1, 12, 3, 6, 2]),//[1, 2, 3, 6])

    shuffledArray([1, -3, -5, 7, 2]),//[-5, -3, 2, 7])

    shuffledArray([2, -1, 2, 2, -1]),//[-1, -1, 2, 2])

    shuffledArray([-3, -3]),//[-3])

  )