function reverse(string){
    return string.split(" ").reverse().join(" ");
  }
console.log(
    reverse('I am an expert at this'), //'this at expert an am I');
    reverse('This is so easy'), //'easy so is This');
    reverse('no one cares'), //'cares one no');
    reverse(''), //'');
    reverse('CodeWars'),// 'CodeWars');
)