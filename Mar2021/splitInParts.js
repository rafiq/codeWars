var splitInParts = function(s, partLength){


    return s.split("").reduce((acc,curr,idx) => {
        if (idx === partLength || idx % partLength === 0 && idx !== 0) {
            acc += " " ;
            acc += curr;
        } else acc += curr;
        return acc;
    },"");
  }
  console.log(
    splitInParts("supercalifragilisticexpialidocious", 3),//"sup erc ali fra gil ist ice xpi ali doc iou s")
    splitInParts("HelloKata", 1),//"H e l l o K a t a")
    splitInParts("HelloKata", 9),//"HelloKata")
  )