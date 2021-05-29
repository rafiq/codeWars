function ipsBetween(start, end){


    return convertIpToNumeric(end) - convertIpToNumeric(start);
  }
  console.log(
    ipsBetween("10.0.0.0", "10.0.0.50"),// 50);
    ipsBetween("20.0.0.10", "20.0.1.0"),// 246);
  )
  function convertIpToNumeric(ipAddress) {
    var arrIp = ipAddress.split(".");

    var segment1 = parseInt(arrIp[0]);
    var segment2 = parseInt(arrIp[1]);
    var segment3 = parseInt(arrIp[2]);
    var segment4 = parseInt(arrIp[3]);

    //reverse order calc
    //eg. 255.255.240.0     &lt;-- start at the end
    // 0 + (240*256) + (255*65536) + (255*16777216)
    var calc = segment4 + (segment3 * 256) + (segment2 * 65536) + (segment1 * 16777216);

    return calc;

}
//   function convertNumericToIp(bigNumber) {

//     var Octet1 = Math.floor(bigNumber / 16777216)
//     var RestOfIP = bigNumber - (Octet1 * 16777216)

//     var Octet2 = Math.floor(RestOfIP / 65536)
//     var RestOfIP = RestOfIP - (Octet2 * 65536)

//     var Octet3 = Math.floor(RestOfIP / 256)

//     var Octet4 = RestOfIP - (Octet3 * 256)

//     var returnValue = Octet1 + "." + Octet2 + "." + Octet3 + "." + Octet4;

//     return returnValue;

// }