function iqTest(numbers){

    let nums = numbers.split(" ");
    return nums.filter(el => el % 2 === 1).length === 1 ? nums.indexOf(nums.filter(el => el % 2 ===1)[0]) + 1 : nums.indexOf(nums.filter(el => el % 2 === 0)[0]) + 1
  }
  console.log(
    iqTest("88 96 66 51 14 88 2 92 18 72 18 88 20 30 4 82 90 100 24 46"),//4);
    iqTest("2 4 7 8 10"),//3);
    iqTest("1 2 2"),// 1);
  )