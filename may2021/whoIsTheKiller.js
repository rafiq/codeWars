function killer(suspectInfo, dead) {

    return Object.keys(suspectInfo).find(x => dead.every(y => suspectInfo[x].includes(y)))
    // ! My code below worked but I wanted to do it like the code above
    return Object.entries(suspectInfo).filter(el => {
        for (let i = 0; i < dead.length; i++) {
            if (!el[1].includes(dead[i])) return false;
        }
        return true;
    })[0][0]
  }
  console.log(
      killer({'James': ['Jacob', 'Bill', 'Lucas'], 'Johnny': ['David', 'Kyle', 'Lucas'], 'Peter': ['Lucy', 'Kyle']}, ['Lucas', 'Bill']), //'James'),
      killer({'Brad': [], 'Megan': ['Ben', 'Kevin'], 'Finn': []}, ['Ben']),// 'Megan');
  )