function Default(x, y = 7) {
    return x + y;
  }

  function Rest(x, ...y) {
    return x * y.length;
  }

  function Spread(x, y, z) {
    return x + y + z;
  }

  const Default  = (x, y = 7) => x + y,
      Rest     = (x, ...y) => x * y.length,
      Spread   = (...nums) => nums.reduce((s, x) => s + x, 0);



// function defaultExample(x, y = 7) {
//     return x + y;
//   }

//   function restExample(x, ...args) {
//     return x * args.length;
//   }

//   function spreadExample(x) {
//     return ...x + ...x;
//   }
  console.log(
    defaultExample(3, 7),// 10)
    defaultExample(3),// 10)
    defaultExample(5),// 12)

    // console.log('Rest')
    restExample(3,'14',6),// 6)
    restExample(5,'854',7,4),// 15)
    restExample(9),// 0)

    // console.log('Spread')
    spreadExample(...[1,2,3]),// 6)
    spreadExample(...[6,6,6]),// 18)
    spreadExample(...[1,1,1]),// 3)
  )