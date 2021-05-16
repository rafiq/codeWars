function save(sizes, hd) {
let total = 0;
let count = 0;

for (let i = 0; i < sizes.length; i++) {
    if (total + sizes[i] > hd) return count;
    else {
        // console.log(total,count)
        total += sizes[i];
        count++;
    }
}

    return count;
  }
  console.log(
    save([4, 4, 4, 3, 3], 12),// 3));
    save([4, 4, 4, 3, 3], 11), //2));
    save([4, 8, 15, 16, 23, 42], 108), //6));
    save([13], 13), //1));
    save([1, 2, 3, 4], 250),// 4));
    save([100], 500), //1));
    save([11, 13, 15, 17, 19], 8), //0));
   save([45], 12), //0));
   save([19, 20, 13, 4, 13, 13, 10, 20, 5, 8, 10, 0, 5, 13, 7], 60), //3
   save([9, 1, 5, 9, 6, 5, 15, 5, 20, 7, 3, 0, 18, 6, 10, 9, 3, 13, 5, 17, 15, 19, 18, 3, 17, 4, 8, 3, 13, 19], 96), //13;
  )