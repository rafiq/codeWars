// This is a good way to accopmlish substitutions. Just make sure that you map over the array and either insert the polish letter if there is one, or the original letter if there is not one. Finally join. So map is good for replacement when dealing with a hash table. It seems like it acts like the filter method here.

var polishLetters = {
    "ą": "a",
    "ć": "c",
    "ę": "e",
    "ł": "l",
    "ń": "n",
    "ó": "o",
    "ś": "s",
    "ź": "z",
    "ż": "z",
};

function correctPolishLetters (string) {
  return string.split('').map((c) => polishLetters[c] || c).join("");
}