// I like this one because it does show me different ways to use the switch statement.
function howManydays(month){

    switch (month){
       case 2: return 28
       case 4:
       case 6:
       case 9:
       case 11: return 30
    }
    return 31
  }

  function howManydays(month){
    switch ( month ){
      case 2 : return 28
      case 4: case 6: case 9: case 11: return 30
      default: return 31
    }
  }