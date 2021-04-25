function createTreeDirectory(tree){
    if (!tree || tree.constructor !== Object) return null;
    let result = {};

    for (let i in tree) {
        result["value"] = tree["value"];
        createTreeDirectory(tree["children"]);
    }
    return result;
}

function createBSTDirectory(BST){

}
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

  let treeResult = {5: [], 4: [0], 7: [1], 3: [1, 0], 15: [1, 1]};
  let bstResult = {5: [], 3: ['left'], 1: ['left', 'left'], 4: ['left', 'right'], 7: ['right'], 6: ['right', 'left'], 9: ['right', 'right']};

console.log(
    // createBSTDirectory(bst),
    createTreeDirectory(tree)
)