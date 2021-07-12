// function Point(x, y) {
//     if (this.constructor == Point) throw this.constructor;
//     this.x = x;
//     this.y = y;
//     return this;
//   }

//   Point.create = function(x, y){
    //     var fn = function(){};
    //     fn.prototype = Object.create(Point.prototype)
    //     fn.constructor = Point;
    //     return Point.call(fn, x, y);
    //   }
    // function Point(x, y) {

        //     this.x = x;
        //     this.y = y;
        //   }
        // Point.

          function Point() {
            throw "Can't call constructor";
          }

          Point.create = function(x, y) {
            var p = Object.create(Point.prototype);
            p.x = x;
            p.y = y;
            return p;
          }
  let bar =  Point.create(5,4)
  console.log(
    bar,
    bar.x,
    bar.y,
  )

//   function Point(x, y) {throw 'Use Point.create() instead.'}
// Point.create = (x, y) => (obj = Object.create(Point.prototype), obj.x = x, obj.y = y, obj);