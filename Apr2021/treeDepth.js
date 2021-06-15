
let tree = { a: 1, b: 2, c: { d: 3 }};
let expected = { a: 1, b: 2, c: { d: 3, depth: 1}, depth: 0 };
let notAnObject = []

function recordDepth(tree,depth = 0) {
//     if(!tree || tree.constructor !== Object)
//     return null;
//   tree.depth = depth;
//   for(let i in tree)
//       recordDepth(tree[i], depth+1);
//   return tree;

    // let result = {};

    // while (tree) {
    //     result.depth = 0;
    //     result = recordDepth(tree.d);
    // }
    // return result

    if (!tree || tree.constructor !== Object) {
        return null;
      }

      let newTree = {};

      for(let item in tree) {

          if(tree[item]) {
              if(tree[item].constructor === Object) {
                  let newDepth = depth + 1;
                  newTree[item] = recordDepth(tree[item], newDepth);
              } else {
                  newTree[item] = tree[item];
              }
          }
      }

      newTree.depth = depth;

      return newTree;
  }
  console.log(
    recordDepth(tree),// { a: 1, b: 2, c: { d: 3, depth: 1}, depth: 0 };
    recordDepth(notAnObject), //null);
  )