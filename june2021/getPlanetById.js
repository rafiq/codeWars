// ! A very creative way to handle switch statements that only require to return a primative value.
function getPlanetName(id){
    return {
      1: 'Mercury',
      2: 'Venus',
      3: 'Earth',
      4: 'Mars',
      5: 'Jupiter',
      6: 'Saturn',
      7: 'Uranus',
      8: 'Neptune'
    }[id]
  }
