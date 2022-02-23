function getRandomInt(max) {
    return Math.floor(Math.random() * max + 1);
}

var guess = parseInt(prompt("Your guess:"));
var toGuess = getRandomInt(100);
var tries = 1;

while (guess !== toGuess) {
    if (guess > toGuess) {
        alert("Too high")
    } else if (guess < toGuess) {
        alert("Too Low")
    }
    guess = parseInt(prompt("Your guess:"));
    tries++
}

console.log(`Correct! It took you ${tries} attempts to guess the correct number`);