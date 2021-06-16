function twoSum(numbers, target) {
    for (let i = 0; i < numbers.length; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            if (numbers[i] + numbers[j] === target) return [i,j]
        }
    }
    return false;
  }
  console.log(
    twoSum([1,2,3], 4),//sort(numericalCompare), [0,2]);
    twoSum([1234,5678,9012], 14690),//sort(numericalCompare), [1,2]);
    twoSum([2,2,3], 4),//sort(numericalCompare), [0,1]);
  )