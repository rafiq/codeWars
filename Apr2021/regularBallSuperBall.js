var Ball = function(ballType = "regular") {
    // return {
    //     ballType: ballType,
    // }
    // this.ballType = ballType || 'regular';
    this.ballType = ballType;
  };
  console.log(
    new Ball().ballType,// "regular");
    new Ball("super").ballType,// "super");
  )