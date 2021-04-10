var list1 = [
    { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'JavaScript' },
    { firstName: 'Maia', lastName: 'S.', country: 'Tahiti', continent: 'Oceania', age: 28, language: 'JavaScript' },
    { firstName: 'Shufen', lastName: 'L.', country: 'Taiwan', continent: 'Asia', age: 35, language: 'HTML' },
    { firstName: 'Sumayah', lastName: 'M.', country: 'Tajikistan', continent: 'Asia', age: 30, language: 'CSS' }
  ];

  var list2 = [
    { firstName: 'Oliver', lastName: 'Q.', country: 'Australia', continent: 'Oceania', age: 19, language: 'HTML' },
    { firstName: 'Lukas', lastName: 'R.', country: 'Austria', continent: 'Europe', age: 89, language: 'HTML' }
  ];

function countDevelopers(list) {
    let sum = 0;
    for (let i = 0; i < list.length; i++) {
            if (list[i]["continent"] === "Europe" && list[i]["language"] === "JavaScript") {
                sum += 1;
            }
    }
    return sum;
}



    // The below is the best answer and I like how they used the filter method to iterate through the array and pull out the target properties.
    function countDevelopers(list) {
        return list.filter(x=>x.continent=='Europe'&&x.language=='JavaScript').length
      }
  console.log(
    countDevelopers(list1),// 1);
    countDevelopers(list2), //0);
  )