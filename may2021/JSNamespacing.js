let MyNamespace = MyNamespace || {}

MyNamespace.MyClass = class{
  constructor(arg){
    this.arg = arg
  }

  sayHello(){
    return this.arg
  }
}

// var MyNamespace = MyNamespace || {};

// MyNamespace.MyClass = function(phrase){
//   this.phrase = phrase;
// };

// MyNamespace.MyClass.prototype.sayHello = function(){
//   return this.phrase;
// };
//  console.log(
//     MyNamespace.MyClass("Hi")
//  )