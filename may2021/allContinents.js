function allContinents(list) {

    // const continents = ["Americas","Asia","Europe","Oceania","Africa"]
    // return list.every(person => continents.includes(person.continent))
    var cont = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
  return cont.every(function(land){
    return list.some(function(pers){
      return pers.continent === land;
    });
  });
  }
  var list1 = [
    { firstName: 'Fatima', lastName: 'A.', country: 'Algeria', continent: 'Africa', age: 25, language: 'JavaScript' },
    { firstName: 'Agustín', lastName: 'M.', country: 'Chile', continent: 'Americas', age: 37, language: 'C' },
    { firstName: 'Jing', lastName: 'X.', country: 'China', continent: 'Asia', age: 39, language: 'Ruby' },
    { firstName: 'Laia', lastName: 'P.', country: 'Andorra', continent: 'Europe', age: 55, language: 'Ruby' },
    { firstName: 'Oliver', lastName: 'Q.', country: 'Australia', continent: 'Oceania', age: 65, language: 'PHP' }]
  console.log(
    allContinents(list1), //true);
  )