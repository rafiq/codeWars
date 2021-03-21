// ~I had to copy this because I had no idea that I could put a callback function inside the replace letter parameter portion of the replace method. This is very useful because I originally wanted to do something similar and I did not know how, but now I do.

function stringTask(s){
    return s.toLowerCase().replace(/[aeiouy]/g, '').replace(/./g, v=>'.'+v);
  }
