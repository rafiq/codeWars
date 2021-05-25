var widget = {
    foo: "bar"
  }

  var gadget = {
    bar: "foo"
  }

  var thingamabob = {
    bar: "food"
  }
//   Object.prototype.description = "TODO: GIVE ME A DESCRIPTION";
var objects = [widget, gadget, thingamabob];

var prototype = {
  description: "TODO: GIVE ME A DESCRIPTION"
};

objects.forEach(object => Object.setPrototypeOf(object, prototype));

  console.log(
    widget.description,//"TODO: GIVE ME A DESCRIPTION"
  )