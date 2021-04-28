function domainName(url){

    let array =  url.split("//");

    let subArray =  array[array.length - 1].split(".");
    if (subArray[0].includes("www") || subArray[0].includes("http")) return subArray[1];
    else return subArray[0]
    // if (subArray.includes("www")) return subArray[1];
    // else if (subArray.includes(""))
  }
console.log(
    domainName("http://google.com"), //"google");
    domainName("http://google.co.jp"),// "google");
    domainName("www.xakep.ru"), //"xakep");
    domainName("https://youtube.com"), //"youtube");
    domainName("http://github.com/carbonfive/raygun"),// == "github"
    domainName("http://www.zombie-bites.com"),// == "zombie-bites"
    domainName("https://www.cnet.com")// == "cnet"
)