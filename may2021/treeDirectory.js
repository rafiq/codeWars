let tree = {
    value: 5,
    children: [
      {
        value: 4,
        children: []
      },
      {
        value: 7,
        children: [
          {
            value: 3,
            children: []
          },
          {
            value: 15,
            children: []
          }
        ]
      }
    ]
  };

  let bst = {
    value: 5,
    left: {
      value: 3,
      left: {
        value: 1,
        left: null,
        right: null
      },
      right: {
        value: 4,
        left: null,
        right: null
      }
    },
    right: {
      value: 7,
      left: {
        value: 6,
        left: null,
        right: null
      },
      right: {
        value: 9,
        left: null,
        right: null
      }
    }
  };

  function createTreeDirectory(tree) {
    var stack = [[tree, []]];
    var result = {};
    while (stack.length) {
        let [tree, path] = stack.pop();
        result[tree.value] = path;
        tree.children.forEach((child, i) => stack.push([child, path.concat([i])]));
    }
    return result;
}

function createBSTDirectory(BST) {
    var stack = [[BST, []]];
    var result = {};
    while (stack.length) {
        let [tree, path] = stack.pop();
        result[tree.value] = path;
        ["left", "right"].forEach(child => (tree[child])? stack.push([tree[child], path.concat([child])]): null);
    }
    return result;
}
console.log(
    result['5'],// true, "should contain a '5' property");
    result['4'],// true, "should contain a '4' property");
    result['7'],// true, "should contain a '7' property");
    result['3'],// true, "should contain a '3' property");
    result['15'],// true, "should contain a '15' property");
    result['5'],// true, "should contain a '5' property");
    result['3'],// true, "should contain a '3' property");
    result['1'],// true, "should contain a '1' property");
    result['4'],// true, "should contain a '4' property");
    result['7'],// true, "should contain a '7' property");
    result['6'],// true, "should contain a '6' property");
    result['9'],// true, "should contain a '9' property");
)