function feast(beast, dish) {

    return dish.split(" ")[0][0] === beast.split(" ")[0][0] && dish[dish.length - 1] === beast[beast.length - 1]
    }

console.log(
    feast("great blue heron", "garlic naan"), //true)
    feast("chickadee", "chocolate cake"), //true)
    feast("brown bear", "bear claw"),// false)
)