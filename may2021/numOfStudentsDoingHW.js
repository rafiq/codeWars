/**
 * @param {number[]} startTime
 * @param {number[]} endTime
 * @param {number} queryTime
 * @return {number}
 */
 var busyStudent = function(startTime, endTime, queryTime) {
    let count = 0;

    for (let i = 0; i < endTime.length; i++) {
        if (endTime[i] >= queryTime && startTime[i] <= queryTime) count++;
    }

    return count;
};
console.log(
    busyStudent([1,2,3], [3,2,7], 4),// 1
    busyStudent([9,8,7,6,5,4,3,2,1],  [10,10,10,10,10,10,10,10,10], 5),// 1
)