var list1 = [
    { firstName: 'Maria', lastName: 'Y.', country: 'Cyprus', continent: 'Europe', age: 30, language: 'Java' },
    { firstName: 'Victoria', lastName: 'T.', country: 'Puerto Rico', continent: 'Americas', age: 70, language: 'Python' },
  ];

function getAverageAge(list) {



    let sum = list.reduce((acc,curr) => {
        acc += curr["age"]

        return acc;
    },0);

    return Math.round(sum / list.length);
  }
  console.log(
    getAverageAge(list1),// 50);
  )