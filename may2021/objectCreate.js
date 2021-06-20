Object.create = function(prototype, properties) {
    if (prototype === undefined || typeof prototype !== "object") {
        console.log(`Type Error`)
        return new TypeError;
    }


    return prototype.properties
};

var citizen = {
    sleep: function(){ return "zzZ..."; },
    panic: function(){ return "AaAaAaAa!"; }
}
var veteran = Object.create(citizen, {panic: {
    value: function(){
        return "SNAFU";
    }
}})
console.log(
    veteran !== citizen,// "veteran is equal citizen. wat??");
    veteran instanceof citizen.constructor, //"veteran must inherit citizen");
    veteran.sleep(),// "zzZ...", "first argument was not handled properly");
    veteran.panic(),// "SNAFU", "`properties` argument was not handled properly");
)

// ! Why is this so hard, but then the solutions are so easy?
Object.create = function(prototype, properties) {
    //Your code goes here
    //And remember: you need not to reinvent Object.defineProperties on your own!
    if(prototype === undefined) throw new TypeError;
    var obj = new Object;
    obj.__proto__ = prototype;
    if(properties !== undefined){
      Object.defineProperties(obj, properties);
    }
    return obj;
  };

//
Object.create = function(prototype, properties) {
    if (!arguments.length)
      throw new TypeError();
    var o = { __proto__: prototype };
    typeof properties == 'undefined' || Object.defineProperties(o, properties);
    return o;
  };

