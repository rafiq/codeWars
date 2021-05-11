function checkExam(array1, array2) {



    let points = array2.reduce((acc,curr,idx) => {
        if (curr === "") acc += 0;
        else if (curr === array1[idx]) acc += 4;
        else acc += -1;



        return acc;
    },0)

    return points > 0 ? points : 0;
   }

   console.log(
    checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"]), //6);
    checkExam(["a", "a", "c", "b"], ["a", "a", "b",  ""]), //7);
    checkExam(["a", "a", "b", "c"], ["a", "a", "b", "c"]),// 16);
    checkExam(["b", "c", "b", "a"], ["",  "a", "a", "c"]), //0);
   )