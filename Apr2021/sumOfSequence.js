const sequenceSum = (begin, end, step) => {
    if (end < begin) return 0;
    let len = end - begin;
    let result = 0;
    for (let i = begin; i <= end; i += step) {
        result += i;
    }
    return result
  };
  console.log(
    sequenceSum(2, 6, 2),// 12)
    sequenceSum(1, 5, 1),// 15)
    sequenceSum(1, 5, 3),// 5)
  )