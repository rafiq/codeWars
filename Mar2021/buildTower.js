function towerBuilder(nFloors) {
    let tower = [];
    for (let i = 0; i < nFloors; i++) {
        let padding = nFloors - i - 1;
        tower.push(" ".repeat(padding ) +  "*".repeat(i * 2 + 1) + " ".repeat(padding));
    }
    return tower;
  }
  console.log(
    towerBuilder(1),// ["*"]);
    towerBuilder(2),// [" * ","***"]);
    towerBuilder(3),// ["  *  "," *** ","*****"]);
  )