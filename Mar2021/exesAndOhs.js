function XO(str) {
// This is what I was trying to do
function XO(str) {
    let x = str.match(/x/gi);
    let o = str.match(/o/gi);
    return (x && x.length) === (o && o.length);
  }

    // let ohes = str.toLowerCase().match(/o/g).length;
    // let exes = str.toLowerCase().match(/x/g).length;

    // return exes && ohes ? exes === ohes : false;
    let exCount = 0;
    let ohCount = 0;
    if (str.length === 0) return true;
    return str.toLowerCase().split("").reduce((_,curr) => {
        if (curr === "x") exCount++;
        if (curr === "o") ohCount++;
        return exCount === ohCount;
    },0)
}
console.log(
    XO('xo'),//true);
    XO("xxOo"),//true);
    XO("xxxm"),//false);
    XO("Oo"),//false);
    XO("ooom"),//false);
)