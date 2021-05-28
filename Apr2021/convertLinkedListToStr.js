class Node {
    constructor(data, next = null) {
      this.data = data;
      this.next = next;
    }
  }

function stringify(list) {
// Here is short sweet recursive solution\
    return list === null ? "null" : `${list.data} -> ${stringify(list.next)}`;

    // Here is a solution using a while loop which seems to work very well
    let data = [];
    while (list !== null) {
      data.push(list.data);
      list = list.next;
    }
    data.push('null');
    return data.join(' -> ');

    // A slightly short way to write it
    var res = "";

  while(list) {
    res+=(list.data+" -> ");
    list = list.next;
  }

  return res+"null"

    // My result below came close to working but it did not get the null value at the end
    // let result = [];
    // if (list === null) return null;

    // let data = Object.entries(list)// ? Object.keys(list) : 0;

    // data.forEach(arr => {
    //     if (arr === null) {
    //         result.push("null");
    //         return;
    //     };
    //     if (arr[0] === "data") result.push(arr[1])
    //     if (arr[0] === "next") result.push(stringify(arr[1]))
    // })
    // return result.join(" -> ");
  }
  console.log(
    stringify(new Node(1, new Node(2, new Node(3)))),// "1 -> 2 -> 3 -> null");
    stringify(new Node(0, new Node(1, new Node(4, new Node(9, new Node(16)))))),// "0 -> 1 -> 4 -> 9 -> 16 -> null");
    stringify(null),// "null");
  )