let randomNumber = Math.ceil(Math.random()*100)
console.log(randomNumber);

let userGuess = prompt("Guess a number.");
let usernumber = Number(userGuess)

console.log(`You guesed: ${usernumber}`);

while (usernumber !== randomNumber) {
    if (usernumber > randomNumber) {
        console.log("Your guess is high.");
    } else if (usernumber < randomNumber) {
        console.log("Your guess is low.");
    } else {
        console.log("Please enter a valid number.");
    }

    console.log(randomNumber);
    userGuess = prompt("Wrong! Guess again:");
    usernumber = Number(userGuess);
    console.log(`You guesed: ${usernumber}`);
}

console.log("You guessed it right! You Won!");
