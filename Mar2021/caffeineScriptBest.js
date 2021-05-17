// `here is a good example of using logic in coding and how it can be complex. I reaally need practice with this type of code.

function caffeineBuzz(n){
    var str = "mocha_missing!";
    if(n%3==0){
      if(n%4==0){
        str = "Coffee";
      }else{
        str = "Java";
      }
      if(n%2==0){
        str = str + "Script";
      }
    }
    return str;
  }