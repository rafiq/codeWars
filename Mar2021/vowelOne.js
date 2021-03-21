function vowelOne(s){


    return s.replace(/[^aeiou]/gi,"0").replace(/[aeiou]/gi,"1");
  }
  console.log(
    vowelOne( "vowelOne" ),// "01010101" );
    vowelOne( "123, arou" ), //"000001011" );
  )