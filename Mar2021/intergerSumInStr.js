function sumOfIntegersInString(s){


    return s.replace(/[^0-9]/gi," ").split(" ").reduce((acc,curr) => acc + +curr,0);
  }
  console.log(
    sumOfIntegersInString("12.4"),//16],
    sumOfIntegersInString("h3ll0w0rld"),//\3],
    sumOfIntegersInString("2 + 3 = "),//\5],
    sumOfIntegersInString("Our company made approximately 1 million in gross revenue last quarter."),//\1],
    sumOfIntegersInString("The Great Depression lasted from 1929 to 1939."),//\3868],
    sumOfIntegersInString("Dogs are our best friends."),//\0],
    sumOfIntegersInString("C4t5 are 4m4z1ng."),//\18],
    sumOfIntegersInString("The30quick20brown10f0x1203jumps914ov3r1349the102l4zy dog"),//\3635])
  )