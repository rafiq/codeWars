//I have to admits that this is very clever. I like how they used the split of dub like I did, but the resulting array has several empty strings in the places of the old wub's and then they just use filter to return an array with only the non empty spaces and then joins them. Genius. I love it.

var songDecoder = (song) => song.split('WUB').filter(x => x !== '').join(' ')