function select (arrSearch, arrTake){
    // let sortedArray = arrSearch.sort().reverse()
    // let theLetter = sortedArray[2][2]
    // if (!theLetter) return "Nothing here"
    var a=arrSearch.sort().reverse();
    for (var i=0; i<arrTake.length; ++i)
  if (arrTake[i][0]==a[2][2])
    return arrTake[i];
return 'Nothing here'

    // for (let i = 0; i < arrTake; i++) {
    //     if (theLetter.toLowerCase() === arrTake[i][0].toLowerCase()) return arrTake[i]
    // }

    // return "Nothing here"
}
console.log(
    select(['banana','rose','orange','apple'], ['carrot','nectarines','cucumber','ananas']),//'nectarines')
select(['attack','defense','fight','retreat'], ['fist','punch','break']),//'fist');
)