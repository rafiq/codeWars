function push(head, data) {
    return new Node(data, head);
  }

  function buildOneTwoThree() {
    return [3, 2, 1].reduce( (head, data) => push(head, data), null );
  }

  function Node(data, next = null) {
    this.data = data;
    this.next = next;
  }

// ! Class style
// class Node {
//     constructor(data, next = null) {
//       Object.assign(this, {data, next});
//     }
//   }

//   const push = (head, data) =>
//     new Node(data, head);

//   const buildOneTwoThree = () =>
//     [3, 2, 1].reduce(push, null);
// ! new function style
// var push = (head, data) => new Node(data, head);

// var build = (...args) => args.reduce(push, null);

// var buildOneTwoThree = build.bind(null, 3, 2, 1);

// var Node = (data, next = null) => ( {data, next} );