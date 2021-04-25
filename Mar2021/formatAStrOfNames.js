function list(names){

    let nameArray = names.map(el => el.name);

    if (nameArray.length < 2) return nameArray.join("");
    if (nameArray.length === 2) return nameArray.join(" & ");
    return nameArray.slice(0,nameArray.length - 2).join(", ") + ", " + nameArray.slice(nameArray.length - 2).join(" & ");
  }
  console.log(
    list([{name: 'Bart'},{name: 'Lisa'},{name: 'Maggie'},{name: 'Homer'},{name: 'Marge'}]),// 'Bart, Lisa, Maggie, Homer & Marge',
    // "Must work with many names")
    list([{name: 'Bart'},{name: 'Lisa'},{name: 'Maggie'}]),// 'Bart, Lisa & Maggie',
    // "Must work with many names")
    list([{name: 'Bart'},{name: 'Lisa'}]),// 'Bart & Lisa',
    // "Must work with two names")
    list([{name: 'Bart'}]),// 'Bart', "Wrong output for a single name")
    list([]),// '', "Must work with no names")
  )