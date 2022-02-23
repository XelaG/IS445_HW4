function calculator(Nb1, Nb2, Sign) {
    switch (Sign) {
        case "+":
            console.log(`${Nb1} ${Sign} ${Nb2} = ${Nb1 + Nb2}`);
            break;

        case "-":
            console.log(`${Nb1} ${Sign} ${Nb2} = ${Nb1 - Nb2}`);
            break;
    
        case "*":
            console.log(`${Nb1} ${Sign} ${Nb2} = ${Nb1 * Nb2}`);
            break;
        
        case "/":
            console.log(`${Nb1} ${Sign} ${Nb2} = ${Nb1 / Nb2}`);
            break;
        default:
            console.log("Error");
            break;
    }
}

var Nb1 = parseInt(prompt("First Number"))
var Nb2 = parseInt(prompt("Second Number"))
var Sign = prompt("Sign")
calculator(Nb1, Nb2, Sign);