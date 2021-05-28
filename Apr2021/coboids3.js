class Cuboid {
    constructor(length, width, height) {
        this.length = length,
        this.width = width,
        this.height = height
    }

    get volume() {
        if (this.width > 0 && this.height  > 0 && this.length > 0) {
            return this.height * this.length * this.width;
        } else return "A cube needs three sides."
    }

    get surfaceArea() {
        if (this.width  > 0 && this.height  > 0 && this.length > 0) {
            return (2 * (this.height * this.length)) + (2 * (this.width * this.length)) + (2 * (this.height * this.width))
        }
    }
}
class Cube extends Cuboid {
constructor(length) {
    super(length, length, length)
    }
}
// get surfaceArea(){
//     let [l, w, h] = [this.length, this.width, this.height];
//     return (l*w + w*h + h*l) * 2;
//   }
    let cube = new Cube(1);
var cuboid = new Cuboid(1, 2, 3);
console.log(
    cuboid.length,// 1);
    cuboid.width,// 2);
    cuboid.height,// 3);
    cuboid.volume,// 6);
    cuboid.surfaceArea,// 22);
    cuboid.length = 4,
    cuboid.volume,// 24);
    cuboid.surfaceArea,// 52);
    cuboid.width = 5,
    cuboid.volume,// 60);
    cuboid.surfaceArea,// 94);
    cuboid.height = 6,
    cuboid.volume,// 120);
    cuboid.surfaceArea,// 148);
    [cuboid.length, cuboid.width, cuboid.height] ,//= [7, 8, 9];
    cuboid.volume,// 504);
    cuboid.surfaceArea, //382);
//   });
// });

// describe("class Cube extends Cuboid", _ => {
//   it("should initialize properly and have the same getters as the parent class", _ => {
    cube.length,//1);
    cube.width,//1);
    cube.height,//1);
    cube.volume,//1);
    cube.surfaceArea,//6);
    cube.length = cube.width = cube.height = 2,
    cube.volume,//8),
    cube.surfaceArea,//24),
    cube.length = cube.width = cube.height = 3,
    cube.volume,//27),
    cube.surfaceArea,//54),
    cube.length = cube.width = cube.height = 5,
    cube.volume,//125),
    cube.surfaceArea,//150),
    cube.length = cube.width = cube.height = 10,
    cube.volume,//1000),
    cube.surfaceArea,//600),
)