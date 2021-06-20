function findAdmin(list, lang) {
    let result = [];

    for (let key of list) {
        if (key.language === lang && key.githubAdmin === "yes")
        result.push(key)
    }
    return result
  }
  var list1 = [
      { firstName: 'Harry', lastName: 'K.', country: 'Brazil', continent: 'Americas', age: 22, language: 'JavaScript', githubAdmin: 'yes' },
      { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 49, language: 'Ruby', githubAdmin: 'no' },
      { firstName: 'Jing', lastName: 'X.', country: 'China', continent: 'Asia', age: 34, language: 'JavaScript', githubAdmin: 'yes' },
      { firstName: 'Piotr', lastName: 'B.', country: 'Poland', continent: 'Europe', age: 128, language: 'JavaScript', githubAdmin: 'no' }
    ];
  console.log(
      findAdmin(list1, 'JavaScript'),// answer1);
      findAdmin(list1, 'Ruby'),// []);
      findAdmin(list1, 'Python'),// []);
  )
// `i like how they used the filter method and passed in a function as the argument. Much quicker than how I did it.
  function findAdmin(list, lang) {
    return list.filter(p => p.language === lang && p.githubAdmin === 'yes');
  }