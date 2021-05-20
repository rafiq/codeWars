function bouncingBall(h,  bounce,  window) {
    const RATE_OF_DECREASE = bounce;
    let count = 0;
    let heightOfBounce = h;

    if (h <= 0 || window > h || bounce >= 1 || bounce  <= 0) return -1;

    while (heightOfBounce > window) {
        console.log(heightOfBounce = heightOfBounce * RATE_OF_DECREASE)
        count++;
    }
    return  (count * 2) - 1

  }
  console.log(
   bouncingBall(3.0, 0.66, 1.5),// 3);
   bouncingBall(30.0, 0.66, 1.5),// 15);
  )