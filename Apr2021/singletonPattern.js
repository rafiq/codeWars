// var Singleton = (function(){
//    let instance;

//    function createInstance() {
//        let object = new Object();
//        return object;
//    }
//     return {
//         getInstance: function () {
//             if (!instance) {
//                 instance = createInstance();
//             }
//             return instance;
//         }
//     }
//   })();
var Singleton = (function () {
    var instance;
    return function () {
      if (instance) { return instance; }
      else { instance = this; }
    };
  })();
  var obj1 = new Singleton();
  var obj2 = new Singleton();
  console.log(
    obj1 === obj2, // => true
    obj1.test = 1,
    obj2.test, // => 1
  )