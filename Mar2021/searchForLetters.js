function change(string){

    let alphaArray = "abcdefghijklmnopqrstuvwxyz";

    return alphaArray.split("").reduce((acc,curr) => {
        if (string.toLowerCase().includes(curr)) acc += "1";
        else acc += "0";

        return acc;
    },"");
  }

  console.log(
    change("a **&  bZ"),// "11000000000000000000000001" );
  )