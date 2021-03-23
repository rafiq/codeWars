var repeatIt = function(str, n) {
    return typeof str !== "string" ? "Not a string" : str.repeat(n);
}
 console.log(
    repeatIt("*",3), //"***", 'Returned unexpected value')
    repeatIt("Hello",11), //"HelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHello", 'Returned unexpected value')
)