// I like how this one used the replace method to get ride of all non lowercase chars and then returns the length of the result. Genius.

function lowercaseCount(str){
    return str.replace(/[^a-z]/g, "").length;
}

// The below one is similar except it does the opposite. It filters for all the lowercase, and returns the length.
function lowercaseCount(str){
    return (str.match(/[a-z]/g) || []).length
}