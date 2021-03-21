function solve(a,b){
    let mergedLetters = a + b;

    return mergedLetters.split("").reduce((acc,curr) => {
        if (a.includes(curr) && !b.includes(curr)) acc += curr;
        else if (!a.includes(curr) && b.includes(curr)) acc += curr;
        else acc;

        return acc;
    },"")
   };

   console.log(
    solve("xyab","xzca"),//"ybzc");
    solve("xyabb","xzca"),//"ybbzc");
    solve("abcd","xyz"),//"abcdxyz");
    solve("xxx","xzca"),//"zca");
   )