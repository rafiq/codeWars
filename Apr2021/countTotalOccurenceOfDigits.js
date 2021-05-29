function List(){
    this.countSpecDigits=function(integersList, digitsList){
        let fullNumsArray = [];

       integersList.forEach(el => el.toString().split("").forEach(digit => fullNumsArray.push(digit)) )
        let mapping = fullNumsArray.reduce((acc,curr,idx) => {
            acc[curr] ? acc[curr]++ : acc[curr] = 1;
            return acc;
        },{})
        return digitsList.reduce((acc,curr,idx) => {
            if (!mapping[curr]) mapping[curr] = 0;
            acc.push([curr, mapping[curr]]);
            return acc;
        },[])
    }
  }
  var l = new List();

  console.log(
    l.countSpecDigits([1, 1, 2, 3, 1, 2, 3, 4], [1, 3]),//[[1, 3], [3, 2]]);
    l.countSpecDigits([ -18, -31, 81, -19, 111, -888 ] ,[ 1, 8, 4 ]),//[[1, 7], [8, 5], [4, 0]]);
  )

//   I forgot about taking a string and getting the count of a certain digit by splitting that string at that digit and then subtracting one from the length of that array. Very Smart...genius.
function List(){
    this.countSpecDigits=function(integersList, digitsList){
      var result = [];
      for(var i=0; i<digitsList.length; i++){
        result.push([digitsList[i], integersList.join().split(digitsList[i]).length -1]);
      }
      return result;
    }
  }
