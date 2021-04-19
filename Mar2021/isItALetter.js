String.prototype.isLetter = function() {

    return this.toLowerCase() >= "a" && this.toLowerCase() <= "z" && this.length === 1;
}
console.log(
    "".isLetter(),//false);
    "a".isLetter(),//true);
    "X".isLetter(),//true);
    "7".isLetter(),//false);
    "*".isLetter(),//false);
    "ab".isLetter(),//false);
    "a\n".isLetter(),//false);
)

// The below code is interesting because it is using the regex of $ which means check the whole thing and then the test method which is kind of the opposite of the includes method because it will test THIS regex. test (on this thing) where the includes is Does thisStr.include(this test item).