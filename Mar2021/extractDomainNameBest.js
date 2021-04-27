// This is a good solution which doesn't require regex. First just remove everything from the front that may be there and the split by period and return the first element.

function domainName(url){
    url = url.replace("https://", '');
    url = url.replace("http://", '');
    url = url.replace("www.", '');
    return url.split('.')[0];
  };