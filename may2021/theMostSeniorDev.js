function findSenior(list) {
    let result = [];
    let oldest = 0;

    for (let key of list) {
        if (key.age >= oldest) {
            oldest = key.age;
        }
    }
    for (let key of list) {
        if (key.age = oldest) {
            result.push(key)
        }
    }
    return result
  }
  var list1 = [
    { firstName: 'Gabriel', lastName: 'X.', country: 'Monaco', continent: 'Europe', age: 49, language: 'PHP' },
    { firstName: 'Odval', lastName: 'F.', country: 'Mongolia', continent: 'Asia', age: 38, language: 'Python' },
    { firstName: 'Emilija', lastName: 'S.', country: 'Lithuania', continent: 'Europe', age: 19, language: 'Python' },
    { firstName: 'Sou', lastName: 'B.', country: 'Japan', continent: 'Asia', age: 49, language: 'PHP' },
  ];
  console.log(
    findSenior(list1),// answer1);
  )