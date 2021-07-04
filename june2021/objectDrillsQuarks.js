class Quark{
    constructor(color,flavor) {
        this.color = color;
        this.flavor = flavor;
        this.baryon_number = 1 / 3;

    }
    interact(quark2) {
        return [this.color, quark2.color] = [quark2.color,this.color]

    }
  }
  let q1 = new Quark("red", "up")
  let q2 = new Quark("blue", "strange")
  console.log(
    q1.color,// "red")
    q2.flavor, //"strange")
    q2.baryon_number,// 1 / 3)
    q1.flavor,//"up"
    q2.color,//"blue"
    q2.baryon_number,//0.3333333333333333
    q1.interact(q2),
    q1.color,//"blue"
    q2.color,//"red"
  )