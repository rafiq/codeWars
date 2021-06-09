function sc(screws){
    let sum = screws.length - 1 + screws.length;

    for (let i = 1; i < screws.length; i++) {
        if (screws[i] !== screws[i - 1]) {
            sum += 5;
        }
    }
    return sum;
  }
  console.log(
    sc("---+++"),// 16);
    sc("-+-+-+"),// 36);
    sc("-+-+-----------"),// 49);
    sc("-+-+-++++++++++"),// 54);
  )

//   I think the below code looks really clean.
const sc = screws => {
    let time = 1;
    const remove = 1;
    const move = 1;
    const change = 5;
    for(let i = 0; i < screws.length-1; i++){
      time += move + remove + (screws[i] === screws[i+1] ? 0 : change);
    }
    return time;
  }