function Hex(value){
    this.valueOf = function(){
        return value;
    };

    this.toString = this.toJSON = function(){return "Ox" + value.toString(16).toUpperCase()};

    // this.toJSON = function(){
    //     return "Ox" + value.toString(16).toUpperCase();
    // };

    this.plus = function(val){
        return new Hex(value + +val)
    };

    this.minus = function(val){
        return new Hex(value - +val)
    }

  }

  Hex.parse = function(string){
    return parseInt(string,16);
  }
  FF = new Hex(255)

  console.log(
    FF.toString(), //"0xFF")
    FF + 1, //256)
    FF.toJSON(), //"0xFF")
    FF.minus(1).toString(),// "0xFE")
    FF.minus(FF).valueOf(),// == 0, "Should be zero")
    new Hex(10).plus(5).toString(),// "0xF")
  )

//
function Hex(value) {
    this.value = value;
    this.valueOf = () => Number(this.value);
    this.toString = () => '0x' + this.value.toString(16).toUpperCase();
    this.toJSON = this.toString;
    this.plus  = (a) => new Hex(this.value + a);
    this.minus = (a) => new Hex(this.value - a);
}
Hex.parse = (s) => parseInt(s, 16);

class Hex {
    constructor(value) { this.value = value; }
    valueOf() { return this.value; }
    toString() { return '0x' + this.value.toString(16).toUpperCase(); }
    toJSON() { return this.toString(); }
    plus(n) { return new Hex(this.value + n); }
    minus(n) { return new Hex(this.value - n); }
    static parse(string) { return parseInt(string, 16); }
  }