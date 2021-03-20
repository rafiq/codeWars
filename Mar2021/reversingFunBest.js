// Here is some recursion magic and I really love it. They are continously chopping off the first letter and taking the recursion reversed substring of the remaining string until it ends. Genius. I love how they were able to end the substring by looking at the length of the string and that would end the recursion. Also, I love how so simple it is.

function flipNumber(n)
{
  if (n.length === 1)
    return n;

  n = n.split('').reverse().join('');
  return n[0] + flipNumber(n.substr(1));
}