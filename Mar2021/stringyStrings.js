function stringy(size) {
    let string = "";

    for (let i = 0; i < size; i++) {
        string += 1 ;
        string += 0
    }

    return string.slice(0,size);
  }
  console.log(
    stringy(3),
    stringy(6),
    stringy(4),// 'string',
    //'Make sure it\'s a string not a number (the function is called stringy after all!)');
//   });

//   Test.it('Should start with a 1', function() {
//     Test.assertEquals(stringy(3)[0], '1',
//     'Whoops your string doesnt start with a 1?');
//   });

//   Test.it('Should have the correct length', function() {
//     for(let i = 0; i < 10; ++i){
//       let parameter = (Math.random() * 50 + 1) | 0;
//       Test.assertEquals(stringy(parameter).length, parameter, 'Wrong length on ' + parameter);
//     }
//   });
  )