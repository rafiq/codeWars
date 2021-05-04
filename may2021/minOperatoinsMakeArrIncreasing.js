/**
 * @param {number[]} nums
 * @return {number}
 */
 var minOperations = function(nums) {
    let count = 0;

    for (let i = 1; i < nums.length ; i++) {
        if (nums[i - 1] >= nums[i]) {
            count += (nums[i - 1] + 1) - nums[i];
            nums[i] = nums[i - 1] + 1;
        }
    }

    return count
};
console.log(
    minOperations([1,1,1]),//3
    minOperations([1,5,2,4,1]),//14
    minOperations([8]),//0
)