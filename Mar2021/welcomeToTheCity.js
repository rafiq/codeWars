function sayHello( name, city, state ) {
        return "Hello," + " " +  name.join(" ") + "!" + " " + "Welcome to " + city +  "," + " " + state + "!";
}
console.log(
    sayHello(['John', 'Smith'], 'Phoenix', 'Arizona')//=='Hello, John Smith! Welcome to Phoenix, Arizona!','Hello, John Smith! Welcome to Phoenix, Arizona!')
)