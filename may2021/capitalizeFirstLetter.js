String.prototype.capitalize = function() {
    if (this[0].charCodeAt() >= 97 && this[0].charCodeAt() <= 122) {
        return String.fromCharCode(this[0].charCodeAt() - 32) + this.slice(1)
    }
    return this.slice();
    // let c = this.charCodeAt(0)
    // if (97 <= c && c <= 122) c -= 32

    // return String.fromCharCode(c) + this.slice(1)
}
console.log(
    "hello world".capitalize(),// "Hello world");
    "an apple a day keeps the doctor away".capitalize(),// "An apple a day keeps the doctor away");
    "today, I have a dream ... ".capitalize(),// "Today, I have a dream ... ");
    "hello how are you?  i am john doe".capitalize(),// "Hello how are you?  I am John Doe", "You were not asked to correct all of the capitalization errors in the string.");
    "12TH".capitalize(),
    "This is capital".capitalize(),
)