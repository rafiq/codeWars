function gooseFilter (birds) {
    var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];

    return birds.filter(word => {
        return !geese.includes(word)
    })
    // return nonGeese;

    // Best answer

    // function gooseFilter (birds) {
    //     var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
    //     return birds.filter(b => !geese.includes(b));
    //   };


    // let nonGeese = [];

    // birds.forEach(word => {
    //     if (!geese.includes(word)) nonGeese.push(word);
    // });
    // return nonGeese;
};

  console.log(
    gooseFilter(["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]),//["Mallard", "Hook Bill", "Crested", "Blue Swedish"]);
  gooseFilter(["Mallard", "Barbary", "Hook Bill", "Blue Swedish", "Crested"]),//["Mallard", "Barbary", "Hook Bill", "Blue Swedish", "Crested"]);
  gooseFilter(["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"])//,[]);
  )