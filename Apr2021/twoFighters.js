function Fighter(name, health, damagePerAttack) {
    this.name = name;
    this.health = health;
    this.damagePerAttack = damagePerAttack;
    this.toString = function() { return this.name; }
}
function declareWinner(fighter1, fighter2, firstAttacker) {
    let firstPlayer = fighter1.name === firstAttacker ? fighter1 : fighter2;
    let secondPlayer = fighter1.name === firstAttacker ? fighter2 : fighter1;
// I like how this guy used the destructuring feature to assign attacker.
// var [a,b] = (fighter1.name === firstAttacker) ? [fighter1, fighter2] : [fighter2, fighter1];
    while (true) {
        secondPlayer.health -= firstPlayer.damagePerAttack;
        if (fighter2.health <= 0 ) {
            return fighter1.name;
        }
        firstPlayer.health -= secondPlayer.damagePerAttack;
        if (fighter1.health <= 0) {
            return fighter2.name;
        }
    }
  }
  console.log(
    declareWinner(new Fighter("Lew", 10, 2), new Fighter("Harry", 5, 4), "Lew"),// "Lew"),//

	declareWinner(new Fighter("Lew", 10, 2), new Fighter("Harry", 5, 4), "Harry"), //"Harry"),//

	declareWinner(new Fighter("Harald", 20, 5), new Fighter("Harry", 5, 4), "Harry"), //"Harald"),//

	declareWinner(new Fighter("Harald", 20, 5), new Fighter("Harry", 5, 4), "Harald"), //"Harald"),//

	declareWinner(new Fighter("Jerry", 30, 3), new Fighter("Harald", 20, 5), "Jerry"), //"Harald"),//

	declareWinner(new Fighter("Jerry", 30, 3), new Fighter("Harald", 20, 5), "Harald"), //"Harald"),//
  )
