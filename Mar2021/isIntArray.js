function isIntArray(arr) {
// Mine worked for the most part but I did have problems when the argument was NaN because I had to check to make sure that the input was an array and not a number so checking for isNaN with the input did not work. I did not know about the isArray method which checks if the input is an array which is really helpful to know. I also did not realize from the beginning that the nums had to be integers. I guess I should have read the title more carefully. I like how the answer below checked for being an integer by seeing if the modulo of 1 equals zero. Genius. I also like another answer which just compared Math.floor(num) === num
    // if (arr === null || arr === undefined) return false;
    // return arr.every(num => /\d/.test(num));
    // return arr.filter(num => !/^\d/.test(Math.abs(num))).length === 0
    // return typeof [1,1]
    return Array.isArray(arr) && arr.every((value) => {
        return !isNaN(value) && typeof value === 'number' && value % 1 === 0
      })
  }
  console.log(
    isIntArray([]),// true, "Input: []");
    isIntArray([ -11, -12, -13, -14 ]),// true, "Input: []");
    isIntArray([1, 2, 3, 4]),// true, "Input: [1, 2, 3, 4]");
    isIntArray([1, 2, 3, NaN]),// false, "Input: [1, 2, 3, NaN]");
  )