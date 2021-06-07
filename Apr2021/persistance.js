function per(n) {
    let result = [];
    while (n > 9) {
        n = Number(String(n).split("").reduce((acc,curr) => {
            acc *= curr;
            return acc;
        },1));
        result.push(n);
    }
    return result;
  }
  console.log(
    per(1),// [])
    per(10),// [0])
    per(69),// [54, 20, 0])
    per(277777788888899),// [4996238671872, 438939648, 4478976, 338688, 27648, 2688, 768, 336, 54, 20, 0])
  )