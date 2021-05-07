function Node(data) {
    this.data = data;
    this.next = null;
  }

  function sortedInsert(head, data) {
    var node = new Node(data);
    var curr = head;
    if (!head) {
      head = node;
    } else if (head.data > node.data) {
      node.next = head;
      head = node;
    } else {
      while (curr.next && curr.next.data < node.data) {
        curr = curr.next
      };
      node.next = curr.next;
      curr.next = node;
    }
    return head;
  }

  let ll = new Node();
ll.data = 1;
ll.next = new Node(2);
ll.next.next = new Node(3)
ll.next.next.next = new Node(4)
ll.next.next.next.next = new Node(6)
// ll.next.data = 2
// ll.next.head = 2
  console.log(
    sortedInsert(ll,5),
    ll.next.next,
    )