// I really need to get more practice with replace and match because they are very robust as well.

function noSpace(x){
    return x.replace(/\s/g, '');
  }

//   The below was pretty clever by spliting at the space and then joining would take care of the extra space issues.
function noSpace(x){return x.split(' ').join('')}