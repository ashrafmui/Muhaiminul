// rock > scissors
// scissors > paper
// paper > rock
var playerChoice = ["rock", "paper", "scissors", "water"];

var compChoices = ["rock", "paper", "scissors"];
var compChoice = compChoices[Math.floor(Math.random()*3)]

console.log("Please choose one of the three: Rock, Paper, Scissors")

//Tie
if (compChoice == playerChoice) {
    console.log("Tie.")
}
//Computer = Paper; Player = Rock
else if (compChoice == "paper" && playerChoice == "rock") {
    console.log("Computer wins.")
}
//Computer = Scissors; Player = Rock
else if (compChoice == "scissors" && playerChoice == "rock"){
    console.log("Player wins.")
}
//Computer = Rock; Player = Paper
else if (compChoice == "rock" && playerChoice == "paper") {
    console.log("Player wins.")
}
//Computer = Rock; Player = Scissors
else if (compChoice == "rock" && playerChoice == "scissors"){
    console.log("Computer wins.")
} 
//Ugly God
else if (compChoice == "rock" && playerChoice == "water"){
    console.log("ugly god.")
}