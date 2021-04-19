function getStrings(city){
    let letterHash = city.toLowerCase().match(/[a-z]/gi).reduce((acc,curr) => {
        acc[curr] ? acc[curr]++ : acc[curr] = 1;
        return acc;
    },{})


    return Object.entries(letterHash).reduce((acc,curr,idx,arr) => {
        acc += curr[0] + ":"
        acc += "*".repeat(curr[1])  + ",";;

        return acc;
    },"").slice(0,-1)
  }
  console.log(
    getStrings("Chicago"),//"c:**,h:*,i:*,a:*,g:*,o:*");
    getStrings("Bangkok"),//"b:*,a:*,n:*,g:*,k:**,o:*");
    getStrings("Las Vegas"),//"l:*,a:**,s:**,v:*,e:*,g:*");
  )