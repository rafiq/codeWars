function check(a,x){
    // console.log(a,x)
    return a.filter(el => {
      return el === x
    }).length > 0
  };
  console.log(
    check([66, 101], 66),//true);
    check([80, 117, 115, 104, 45, 85, 112, 115], 45),//true);
    check(['t', 'e', 's', 't'], 'e'),//true);
    check(['what', 'a', 'great', 'kata'], 'kat'),//false);
  )