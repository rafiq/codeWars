function Counter(){
    // var self = this;
    this.count = 0;

    this.updateCount = () => {
      this.count++
    };
  }
  var counter = new Counter();
  console.log(
    counter.count, //0, "Counter should be reset");

    counter.updateCount(),
    counter.count,// 1, "Counter should have been updated");
  )

  class Counter {
    constructor() {
      this.count = 0;
    }
    updateCount() {
      this.count++
    }
  }