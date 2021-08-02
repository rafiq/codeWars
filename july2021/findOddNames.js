function findOddNames(list) {
    let result = [];

    list.forEach(obj => {
        let name = obj.firstName
        let wordTotal = 0;
        for (let i = 0; i < name.length; i++) {
            wordTotal += name.charCodeAt(i)
            }
        if (wordTotal % 2 === 1) result.push(obj)
    })


    return result
  }
  var list1 = [
      { firstName: 'Aba', lastName: 'N.', country: 'Ghana', continent: 'Africa', age: 21, language: 'Python' },
      { firstName: 'Abb', lastName: 'O.', country: 'Israel', continent: 'Asia', age: 39, language: 'Java' }
    ];

    var answer1 = [
      { firstName: 'Abb', lastName: 'O.', country: 'Israel', continent: 'Asia', age: 39, language: 'Java' }
    ];


    var list2 = [
      { firstName: 'Aba', lastName: 'N.', country: 'Ghana', continent: 'Africa', age: 21, language: 'Python' },
    ];

    var answer2 = [];

  console.log(
      findOddNames(list1), //answer1);

      findOddNames(list2), //answer2);
  )
//   ! Filter is a smart function for this problem because we are filtering and then just using the boolean in the function result to return the appropriate objects.
function findOddNames(list) {
    return list.filter( (d) => {
      return d.firstName.split('').reduce(((r, e) => r + e.charCodeAt(0)), 0) % 2 !== 0
    });
 }