function addUsername(list) {

    list.forEach(user => {
        let result = ""
        result += user.firstName.toLowerCase()
        result += user.lastName[0].toLowerCase()
        result += new Date().getFullYear() - user.age
        user["username"] = result;
    })

    return list
  }
  var list1 = [
    { firstName: 'Emily', lastName: 'N.', country: 'Ireland', continent: 'Europe', age: 30, language: 'Ruby' },
    { firstName: 'Nor', lastName: 'E.', country: 'Malaysia', continent: 'Asia', age: 20, language: 'Clojure' }
  ];
  console.log(
    addUsername(list1),//[
    //     { firstName: 'Emily', lastName: 'N.', country: 'Ireland', continent: 'Europe', age: 30, language: 'Ruby',
    //       username: 'emilyn1990' },
    //     { firstName: 'Nor', lastName: 'E.', country: 'Malaysia', continent: 'Asia', age: 20, language: 'Clojure',
    //       username: 'nore2000' }
    //   ]
  )