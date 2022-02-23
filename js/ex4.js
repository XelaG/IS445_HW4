var input = prompt("Word")
var wordArray = []

while (input.toLocaleLowerCase() != 'stop') {
    wordArray.push(input)
    input = prompt("Word")
}

console.log("You entered the following words:");
wordArray.forEach(word => {
    console.log(word);
});