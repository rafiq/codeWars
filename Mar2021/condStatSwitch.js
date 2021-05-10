function howManydays(month){
    var days = 0;
    switch (month){
        case 2:
        x = 28;
        break;
        case 4:
            x = 30;
            break;
        case 6:
        x = 30;
        break;
        case 9:
            x = 30;
            break;
        case 11:
            x = 30;
            break;
        default :  x = 31;
    }
    return x;
  }
console.log(
    howManydays(3),//31);
    howManydays(4),//30);
    howManydays(12),//31))
    howManydays(11),//30))
    howManydays(6),//30))
)


// +---------------+-------------+
// |    month      |    days     |
// +---------------+-------------+
// |1,3,5,7,8,10,12|     31      |
// +---------------+-------------+
// |4,6,9,11       |     30      |
// +---------------+-------------+
// |2              |     28