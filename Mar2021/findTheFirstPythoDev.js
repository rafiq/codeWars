// // var list1 = [
// //     { firstName: 'Mark', lastName: 'G.', country: 'Scotland', continent: 'Europe', age: 22, language: 'JavaScript' },
// //     { firstName: 'Victoria', lastName: 'T.', country: 'Puerto Rico', continent: 'Americas', age: 30, language: 'Python' },
// //     { firstName: 'Emma', lastName: 'B.', country: 'Norway', continent: 'Europe', age: 19, language: 'Clojure' }
// //   ];

// //   var list2 = [
// //     { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 29, language: 'JavaScript' },
// //     { firstName: 'Amar', lastName: 'V.', country: 'Bosnia and Herzegovina', continent: 'Europe', age: 32, language: 'Ruby' },
// //   ];

// // function getFirstPython(list) {

    let dev = list.find(developer => developer.language === "Python");

    if (dev) return dev.firstName + "," + dev.country;
    else return 'There will be no Python developers'
//     // let a = 1;
//     // let b = a;
//     // a *= 2;
//     // return b;

// //     let a = 1;

// // let go = (a) => {
// //   console.log(a);
// // };

// // go;

// // function foo() {
// //     if (true) {
// //       let number = 42;
// //     }

// //     console.log(number);
// //   }

// //   foo();

// // let counter = 100;

// // function decrementCounter() {
// //   let counter = 5;
// //   counter -= 1;
// // }

// // decrementCounter();
// // console.log(counter);

// // let counter = 0;

// // function newCounter(counter) {
// //   counter = 1;
// // }

// // newCounter();
// // console.log(counter);

// // let c;
// // return c;
// // let a = [1, 2, null, 3];
// // let b = 'abc';
// // let c;
// // let d = function(arg) {};

// // function shout(string) {
// //     string = string.toUpperCase();
// //   }

// //   let sentence = "hello world";
// //   shout(sentence);

// //   console.log(sentence); // => hello world
// //   }
// //   console.log(
// //     getFirstPython(list1), //'Victoria, Puerto Rico');
// //     // getFirstPython(list2),// 'There will be no Python developers');
// //   )

// // function shout() {
// //     return  [] === [];
// //     // array[0] = array[0].toUpperCase();
// //   }

// // //   const sentence = ["hello world"];
// //   console.log(shout());

// //   console.log(sentence[0]);



// // let arr = [1, 2, 3].filter(function (n) {
// //     return n - 2;
// //   });

// //   console.log(arr);
// // let arr = [ 1, 2, 3 ];
// // let newArr = arr.map((num) => num);
// // console.log(newArr);
// // arr[3] = 4;
// // console.log(newArr);
// // console.log(arr);
// //   console.log(arr === newArr);
// // let array1 = [23, 9, 157, 1507, 4, 21];
// // let array2 = array1.sort((a,b) => a - b);
// // console.log(array2); // => [ 1507, 157, 21, 23, 4, 9 ]


// // function objectHasProperty(object, property) {
// //     return object.hasOwnProperty(property) ? 1 : 2;
// //   }

// //   let obj = {
// //     something: 3,
// //     enabled: false,
// //     result: undefined,
// //     custom: 0,
// //     custom2: 1,
// //   };
// // console.log(
// //   objectHasProperty(obj, 'something'), // returns 1
// //   objectHasProperty(obj, 'active'),    // returns 2
// //   objectHasProperty(obj, 'enabled'), //=> 1
// //   objectHasProperty(obj, 'custom'), //=> 1
// // )
// // let a = 10;
// // console.log(a - 5)
// // console.log(a)

// function shout(string) {
//     return string = string.toUpperCase();

//   }

//   let sentence = "hello world";
//   console.log(shout(sentence));

//   console.log(sentence); // => hello world

//   run();

// function run() {
//   wasCalled();
//   return function wasCalled() { return true; };
// }

let counter = 0;

function newCounter(counter) {
  return counter = 1;
}

console.log(newCounter(counter));
console.log(counter);