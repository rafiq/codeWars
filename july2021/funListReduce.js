function Node(data, next = null) {
    this.data = data;
    this.next = next;
  }

function reduce(head, f, init) {
    let curr = head;
    let result = init;

    while (curr !== null) {
        result = f(result,curr.data)
        curr = curr.next
    }

    return result
  }
  console.log(
    reduce(null, (a, b) => a + b, 0),// 0);
    reduce(new Node(1, new Node(2, new Node(3))), (a, b) => a + b, 0),// 6);
    reduce(new Node(1, new Node(2, new Node(3, new Node(4)))), (a, b) => a * b, 1),// 24);
    reduce(new Node('a', new Node('b', new Node('c'))), (a, b) => a + b, ''), //'abc');
  )