let options = ["rock", "paper", "scissors"];
let userChoice = prompt("Rock Paper or Scissors?").toUpperCase();
console.log("You selected " + userChoice);
let bot = options[Math.floor(Math.random() * options.length)].toUpperCase();
console.log("The bot chose " + bot);
if (userChoice === bot) {
  console.log("Its a tie!");
} else if (userChoice === "ROCK" && bot === "PAPER") {
  console.log("Bot Wins!");
} else if (userChoice === "ROCK" && bot === "SCISSORS") {
  console.log("User Wins!");
} else if (userChoice === "PAPER" && bot === "ROCK") {
  console.log("User Wins!");
} else if (userChoice === "PAPER" && bot === "SCISSORS") {
  console.log("Bot Wins!");
} else if (userChoice === "SCISSORS" && bot === "PAPER") {
  console.log("User Wins!");
} else if (userChoice === "SCISSORS" && bot === "ROCK") {
  console.log("Bot Wins!");
}
