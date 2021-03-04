// I think this a smooth way to answer this question. Using the slice method to chop off the last character while there is a string and the last string character is an exclamation point.

function remove(s)
{
    while(s && s.slice(-1) == "!")
    {
        s = s.slice(0,-1)
    }
    return s;
}