class Vector{
    constructor(x,y) {
        this.x = x;
        this.y = y;
    }
    add(addend2) {
        return new Vector(this.x + addend2.x, this.y + addend2.y)
    }
  }

let bar =  new Vector(3, 4)
let baz = new Vector(3, 4)

console.log(
    bar.x,// 3
    bar.y,// 4
    new Vector(3, 4).add(new Vector(1, 2)), //{4,6}
    new Vector(3, 4).add(new Vector(1, 2)).constructor.name, //Vector
    bar.add(baz),//{6,8}
    bar.add(baz).constructor.name,//Vector
)

// >>> a = Vector(3, 4)
// >>> a.x
// 3
// >>> a.y
// 4
// >>> b = Vector(1, 2)
// >>> c = a.add(b)
// >>> c.x
// 4
// >>> c.y
// 6
