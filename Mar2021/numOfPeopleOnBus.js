var number = function(busStops){



    return busStops.reduce((acc,curr) => {

        acc += curr[0];
        acc -= curr[1]
        return acc;
    },0)
  }
  console.log(
    number([[10,0],[3,5],[5,8]]),//5);
    number([[3,0],[9,1],[4,10],[12,2],[6,1],[7,10]]),//17);
    number([[3,0],[9,1],[4,8],[12,2],[6,1],[7,8]]),//21);
  )