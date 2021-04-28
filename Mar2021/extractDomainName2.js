function domainName(url){
    let result = "";
        url = url.split(".").join(" ").split("/").join(" ").split(" ").filter(el => el !== "");

        for (let i = 0; i < url.length; i++) {
            if (url[i] === "www" ) result += url[i + 1]
            else if (url[i] === "http:") result += url[i + 1]
        }

    return result;
    //.reduce((acc,curr,idx,arr) => {
    //     if (arr.indexOf("http") > 1 || arr.indexOf("www") > 1) {
    //         acc += arr[arr.indexOf("http") + 1]
    //         acc += arr[arr.indexOf("www") + 1];
    //     }
    //     return acc;
    // },"")
    // return url.match("/([^.]*).","8")
    // return url.match(".([^.]*).","8")
  }
  console.log(
    // domainName("http://google.com"),//"google");
    // domainName("http://google.co.jp"),//"google");
    // domainName("www.xakep.ru"),//"xakep");
    domainName("https://youtube.com"),//"youtube");
    domainName([ 'https:', '123', 'net' ]),//"youtube");
  )