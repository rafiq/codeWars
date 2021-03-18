


// ****************************




let b = 2;

function test(b) {
  return b += 5;
}

console.log(test());
// NaN because when trying to use a mathematical operation on a undefined returns NaN
// ****************************

let b = 2;

function test(a) {
  a = b;
  return a;
}

test(5);
console.log(b);
console.log(a);

// // a is not defined


// ****************************

function test(str) {
    str + "!!!"
  }

  let word = test("Hello");

  if (word) {
    console.log("Hi");
  } else {
    console.log("Goodbye");
  }


// ****************************

let greeting = ["Hello"];

const test = arr => {
  arr = arr.push("World!");
  return arr;
}

test(greeting);
console.log(greeting);

// ****************************

let greeting = "Hello";

const test = str => {
  str = str.concat(" World!");
  return str;
}

test(greeting);
console.log(greeting);

// ****************************
let greeting = ["Hello"];

function test(arr) {
  arr = arr.concat("World!");
  return arr;
}

test(greeting);
console.log(greeting);

// What does the following code output and why?

const FOO = 'bar';
{
  const FOO = 'qux';
}

console.log(FOO);

// What does the following code output and why?

function foo() {
    function bar() {
      console.log("BAR");
    }

    bar();
    bar();
  }

  foo();
  bar();

// ***************************************************
  function foo() {
    function bar() {
      console.log("BAR");
    }

    bar(); // => BAR
    bar(); // => BAR
  }

  foo();
  bar(); // ReferenceError: bar is not defined