function sortByLength (array) {
    let newArray = [];

    array.forEach(el => newArray.push(el.length))
    newArray.sort((a,b) => a - b)

    let result = [];

    for (let i = 0; i < newArray.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if (newArray[i] === array[j].length) {
                result.push(array[j])
                array.splice(array.length,1)
            }
        }
    }
    return result
  };
  console.log(

        sortByLength(["Beg", "Life", "I", "To"]),//["I", "To", "Beg", "Life"]);
        sortByLength(["", "Moderately", "Brains", "Pizza"]),//["", "Pizza", "Brains", "Moderately"]);
        sortByLength(["Longer", "Longest", "Short"]),//["Short", "Longer", "Longest"]);
  )
// THis is a good example of using a double for loop to find the length and they are also using the splice method as well.
//   function sortByLength (array) {
//     var newArray = [];
//           for (var i = 0; i < array.length; i++) {
//               var len = array[i].length;
//               newArray.push(len);
//           }

//           newArray.sort((a, b) => {
//               return a - b
//           });

//           var arrayBuild = [];
//           for (var p = 0; p < newArray.length; p++) {
//               for (var b = 0; b < array.length; b++) {
//                   if (newArray[p] === array[b].length) {
//                       arrayBuild.push(array[b]);
//                      array.splice(array.length, 1)
//                   }
//               }
//           }
//           return arrayBuild;
//   };