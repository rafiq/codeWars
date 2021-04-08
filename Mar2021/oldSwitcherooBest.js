// I really like how they used the callback function inside the replace method and then just looked up the index of the alpha string. Very smart. I love it. Very quick as well. No creating a new string or anything.

let alpha = '_abcdefghijklmnopqrstuvwxyz';
let encode = str => str.toLowerCase().replace(/[a-z]/gi, c => alpha.indexOf(c));



// The below code is how to solve this problem without using the toLowerCase method, but I don't think that I woul dlike to solve problems using the charCodeAt and their ascii equivalents. I will have to learn this eventually. I guess for not 96 is lowercase a.

function encode(str) {
    return str.replace(/[a-z]/gi, c => c.charCodeAt() - (c < "a" ? 64 : 96))
  }


  function turnOn(machine) {
      machine = {
        isOn : true
      }
  }

  var computer = {
      isOn : false
  }

turnOn(computer);