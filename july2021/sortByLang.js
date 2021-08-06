function sortByLanguage(list) {
    var ordered = list.sort((a,b) => {
        if (a.language == b.language) {
          return a.firstName > b.firstName ? 1 : -1;
        }
        return a.language > b.language ? 1 : -1;
      });

      return ordered;

    return list.sort((a,b) => {
        if (a.language === b.language) a.firstName > b.firstName ? 1 : -1
        else return a.language > b.language ? 1 : -1;
    })
  }
  var list1 = [
      { firstName: 'Nikau', lastName: 'R.', country: 'New Zealand', continent: 'Oceania', age: 39, language: 'Ruby' },
      { firstName: 'Precious', lastName: 'G.', country: 'South Africa', continent: 'Africa', age: 22, language: 'JavaScript' },
      { firstName: 'Maria', lastName: 'S.', country: 'Peru', continent: 'Americas', age: 30, language: 'C' },
      { firstName: 'Agustin', lastName: 'V.', country: 'Uruguay', continent: 'Americas', age: 19, language: 'JavaScript' }
    ];

    // var answer1 = [
    //   { firstName: 'Maria', lastName: 'S.', country: 'Peru', continent: 'Americas', age: 30, language: 'C' },
    //   { firstName: 'Agustin', lastName: 'V.', country: 'Uruguay', continent: 'Americas', age: 19, language: 'JavaScript' },
    //   { firstName: 'Precious', lastName: 'G.', country: 'South Africa', continent: 'Africa', age: 22, language: 'JavaScript' },
    //   { firstName: 'Nikau', lastName: 'R.', country: 'New Zealand', continent: 'Oceania', age: 39, language: 'Ruby' }
    // ];

  console.log(
     sortByLanguage(list1), //
  )