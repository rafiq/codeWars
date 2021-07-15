// class Cube {
//     constructor(length) {
//         this.length = length;
//     }
//     surfaceArea() {
//         return this.length * 2
//     }

//     volume() {
//         return this.length * this.length * this.length
//     }
// }
class Cube {
    constructor(length){
      this.length = length;
    }
    get volume() {
      return Math.pow(this.length, 3);
    }
    set volume(volume){
      this.length = Math.cbrt(volume);
    }
    get surfaceArea() {
      return 6 * Math.pow(this.length, 2);
    }
    set surfaceArea(surfaceArea){
      this.length = Math.sqrt(surfaceArea / 6);
    }
  }

var cube = new Cube(1);
console.log(
cube.length,//1);
cube.surfaceArea,//6);
cube.volume,//1);
cube.length = 2,
cube.surfaceArea,//24);
cube.volume,//8);
cube.surfaceArea = 54,
cube.length,//3);
cube.volume,//27);
cube.surfaceArea = 96,
cube.length,//4);
cube.volume,//64);
cube.volume = 125,
// Math.roundTo(cube.length,//5),//5);
// Math.roundTo(cube.surfaceArea,//5),//150);
cube.volume = 1000,
// Math.roundTo(cube.length,//5),//10);
// Math.roundTo(cube.surfaceArea,//5), 600);
)