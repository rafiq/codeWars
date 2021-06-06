function Ship(draft,crew) {
    this.draft = draft;
    this.crew = crew;
    // this.isWorthIt = false;

    Ship.prototype.isWorthIt = function(){
        return this.draft-(this.crew*1.5) > 20;
   }
}
   var emptyShip = new Ship(0,0);
   console.log(
    emptyShip.isWorthIt(),//false)
   )