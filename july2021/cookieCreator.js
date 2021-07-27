function setCookie(name, value, domain, path, expires){
    if (!name) return `Must include a cookie name`
    if (!value) value = name;
    if (!domain) {
        domain = "";//domain=   ;
    } else {
        domain = "domain=" + domain;
    }
    if (!expires) {
        expires = "";//expires=   ;
    } else {
        if (typeof expires === "string") {
            let [month,day,year] = expires.split("/")
            let date = new Date(year, +month - 1, day  )

            expires = "expires=" + new Date(Date.UTC(date.getFullYear(),date.getMonth(),date.getDate() + expires)).toUTCString() + "; ";
        } else {
            let date = new Date()

            expires = "expires=" + new Date(Date.UTC(date.getFullYear(),date.getMonth(),date.getDate() + expires)).toUTCString() + "; ";
            }
        }
    if (!path) path = "/"

    return `document.cookie = ${name}=${value}; ${expires}path=${path}; ${domain}`
  }
  console.log(
    // setCookie(null, 'testValue', 'example.com', '/testPath', 45),// 'Must include a cookie name');
    // setCookie('testName', null, null, null, null),// 'document.cookie = "testName=testName; path=/"');
    // setCookie('visit', null, 'codewars.com', '/kata/test', 20),// 'document.cookie = "visit=visit; expires=Mon Oct 02 2017 18:00:00; path=/kata/test; domain=codewars.com"', 20);
    setCookie('heresOne', null, null, '/kata/train', '12/31/2057'),// 'document.cookie = "heresOne=heresOne; expires=Sun Dec 30 2057 17:00:00; path=/kata/train"', '12/31/2057');
  )

//   ! I was very close to the below answer, but I was missing the toDateString() method and I was trying to do all sorts of things that were going wrong.
function setCookie(name, value, domain, path, expires){
    let output = "document.cookie = \"";

    if (name) {
      output += `${name}=`
    } else {
      return "Must include a cookie name";
    }

    if (value) {
      output += `${value}; `
    } else {
      output += `${name}; `
    }

    if (expires) {
      if (typeof(expires) === "string") {
        const d = new Date(expires);
        output += `expires=${d.toDateString()} 00:00:00; `
      } else {
        let d = new Date();
        d.setDate(d.getDate() + expires);
        output += `expires=${d.toDateString()} 00:00:00; `
      }
    }

    if (path) {
      output += `path=${path}\"`
    } else {
      output += `path=/\"`
    }

    if (domain) {
      output = output.substring(0, output.length - 1);
      output += `; domain=${domain}\"`
    }

    return output;
  }