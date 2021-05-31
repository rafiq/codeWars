function myFunction() {
    var myObject = {
        objProperty: "string",
        objMethod: function objMethod() {
          return myObject.objProperty;
        }
      }

      return myObject;
  };

  const myFunction = () => ({
    objProperty: `string`,
    objMethod() {return this.objProperty;}
  });

  console.log(
    myFunction().objMethod(),// 'string', 'myFunction did not return "string"');
  )