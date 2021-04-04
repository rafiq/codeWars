function sc(width,length,gaps){



    return (width * 2) + (2 * length) / gaps;
  }

  console.log(
    sc(3,3,1),// 4);
    sc(3,3,3),// 2);
    sc(3,3,2),// 0);
    sc(7,7,3),// 6);
    sc(3,3,0),// 8);
    sc(3,3,10),// 0);
  )