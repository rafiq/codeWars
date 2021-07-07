function Hex(value){
    constructor(value) {
        this.value = value;
    }

    this.valueOf = function(){
        return this.value;
    };

    this.toString = function(){
        return `${this.value}`
    };

    this.toJSON = function(){};

    this.plus = function(){};

    this.minus = function(){}

  }

  Hex.parse = function(string){
    //...
  }
  var FF = new Hex(255);
  console.log(
    FF.toString(),// == "0xFF",
    FF.valueOf() + 1,// == 256;

  )

  class Hex {
    constructor(value) { this._value = value; }
    valueOf() { return this._value; }
    toString() { return '0x' + this._value.toString(16).toUpperCase(); }
    toJSON() { return this.toString(); }
    plus(other) { return new Hex(this + other); }
    minus(other) { return new Hex(this - other); }
    static parse(string) { return Number.parseInt(string, 16); }
  }

  function Hex(val){
    this.valueOf = function(){ return val };
    this.toString = this.toJSON = function(){ return "0x"+val.toString(16).toUpperCase() }

    this.plus = function(other){ return new Hex(val+ +other) }
    this.minus = function(other){ return new Hex(val- +other) }
  }

  Hex.parse = function(str){ return parseInt(str,16) }

  function Hex(decimal) {
    this.decimal = decimal;
  }

  Hex.prototype.valueOf = function() {
    return this.decimal;
  };

  Hex.prototype.toString = Hex.prototype.toJSON = function() {
    return '0x' + this.decimal.toString(16).toUpperCase();
  };

  Hex.prototype.plus = function(n) {
    return new Hex(this.decimal + n);
  };

  Hex.prototype.minus = function(n) {
    return new Hex(this.decimal - n);
  };

  Hex.parse = (hexChar) => parseInt(hexChar, 16);