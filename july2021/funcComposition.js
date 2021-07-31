function compose(f,g) {

    return f
  }
  add1 = function(a){return a + 1}
  id = function(a){return a}
  console.log(

     compose(add1,id)(0)// == 1
  )

  function compose(f, g) {
    return function() {
      return f(g.apply(this, arguments));
    };
  }

  function compose(f,g) {
    return function(...a) {
      return f(g(...a));
    }
  }