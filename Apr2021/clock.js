function past(h, m, s){

    return h * 3600000 + m * 60000 + s * 1000;
  }
  console.log(
    past(0,1,1),//61000)
    past(1,1,1),//3661000)
    past(0,0,0),//0)
    past(1,0,1),//3601000)
    past(1,0,0),//3600000)
  )