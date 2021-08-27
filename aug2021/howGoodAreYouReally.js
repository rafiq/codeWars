function betterThanAverage(classPoints, yourPoints) {


    let average = 0

    for (let i = 0; i < classPoints.length; i++) {
        average += classPoints[i]
    }


    return yourPoints > (average / classPoints.length)
  }
  console.log(
    betterThanAverage([2, 3], 5), //true);
    betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75), //true);
    betterThanAverage([12, 23, 34, 45, 56, 67, 78, 89, 90], 69), //true);
  )