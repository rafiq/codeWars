function rgb(r, g, b){
    if (r > 255) r = 255;
    if (g > 255) g = 255;
    if (b > 255) b = 255;
    if (r < 0) r = 0;
    if (g < 0) g = 0;
    if (b < 0) b = 0;
    r = Math.round(r).toString(16).toUpperCase();
    g = Math.round(g).toString(16).toUpperCase();
    b = Math.round(b).toString(16).toUpperCase();
    return `${zeroPadding(r)}${zeroPadding(g)}${zeroPadding(b)}`;
  }
  function zeroPadding(num) {
      return ("0000" + num).slice(-2)
    //   if(d < 0 ) {return "00";}
    //   if(d > 255 ) {return "FF";}
    //   return  ("0"+(Number(d).toString(16))).slice(-2).toUpperCase()
  }
console.log(
    rgb(166,190,-3),// 'A6BE00'
    // rgb(0, 0, 0),// '000000'
    // rgb(0, 0, -20),// '000000'
    // rgb(300,255,255),// 'FFFFFF'
    // rgb(173,255,47),// 'ADFF2F'
)
// I love how they put the logic in the helper function which only takes one number at a time and then they only had to write the guard cases one at a time.

function toHex(d) {
    if(d < 0 ) {return "00";}
    if(d > 255 ) {return "FF";}
    return  ("0"+(Number(d).toString(16))).slice(-2).toUpperCase()
}