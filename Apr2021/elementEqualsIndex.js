function indexEqualsValue(a) {
    // return a.find((el,idx) => el === idx) !== undefined ? a.find((el,idx) => el === idx) : -1;
    // console.log(a)
    let i = 0;
     for (; i < a.length; i++) {
       if (a[i] === i) {
        break;
       };
     }
    return i === a.length ? -1 : i;
  }
  console.log(
    indexEqualsValue([-8,0,2,5]),// 2 );
    indexEqualsValue([-1,0,3,6]),// -1 );
    indexEqualsValue([-3,0,1,3,10]),// 3 );
    indexEqualsValue([-5, 1, 2, 3, 4, 5, 7, 10, 15]),// 1 );
    indexEqualsValue([9,10,11,12,13,14]),// -1 );
    indexEqualsValue([0]),// 0 );
  )