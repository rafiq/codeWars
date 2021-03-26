function scf(array){


    return array.reduce((acc,curr,_,arr) => {
        for (let i = 2; i < Math.max(...arr); i++) {
            if (arr.every((el) => el % i === 0)) {
                acc = i;
                break;
            }
        }

        return acc;
    },1)
  }

  console.log(
    scf([200, 30, 18, 8, 64, 34]),// 2);
    scf([21, 45, 51, 27, 33]),// 3);
    scf([133, 147, 427, 266]),// 7);
    scf([3,5,7]),// 1);
    scf([]),// 1);
  )