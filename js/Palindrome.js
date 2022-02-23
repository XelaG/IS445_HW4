function isPalindrome(word) {
    var reversedWord = word.split('').reverse().join('');
    if (reversedWord.toLowerCase() === word.toLowerCase()) {
        return true
    } else {
        return false
    }
}

function vowelsCounter(word) {
    word = word.toLowerCase()
    word = word.split('')
    var occurences = 0;
    word.forEach(letter => {
        if (letter == 'a' || letter == 'e' || letter == 'i' || letter == 'o' || letter == 'u' || letter == 'y') occurences++
    });
    return occurences
}

var word = prompt("Word")
var vowels = vowelsCounter(word)
var palindrome = isPalindrome(word)


console.log(`${word} contains ${vowels} vowels and ${palindrome ? "is a": "is not a"} palindrome`);