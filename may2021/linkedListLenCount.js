
function Node(data) {
    this.data = data;
    this.next = null;
  }

  function length(head) {
    let count = 0;
    let curr = head;

    if (head === null) return 0;

    while (curr !== null) {
        curr = curr.next
        count++
    }

    return count;
  }
let list = new Node()



  function count(head, data) {
    if (head === null) return 0;
    let count = 0;
    let curr = head;

    while (curr !== null) {
        if (curr.data === data) count++;
        curr = curr.next;
    }
    return count;
  }

  console.log(
    length(null),// 0, "Length of null list should be zero.");
    length(new Node(99)),// 1, "Length of single node list should be one.");
    length(list),// 3, "Length of the three node list should be three.");
  )