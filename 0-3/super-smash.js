var mashArray = ["Central Park", "The Marina", "Brooklyn Bridge", "Coney Island"];
var firstQuestion = [1,2,3,4,5,6,7];
var secondQuestion = ["Kirby", "Link"];

var prompt = require('prompt-sync')();


for (var i=0; i < 2; ) {
    firstQuestion.push(promptSync("How many times will you strike?"));
    secondQuestion.push(promptSync("Who will you choose to fight?"));
}

var randArray = function (array) {
    return array[Math.floor(Math.array()*array.length)];
}

console.log("You fought "+randArray(secondQuestion)+"in the "+randArray(mashArray)+)

// function battle()  {
//     console.log()
//     var answer = prompt("How many times will you strike?");
//     var answer2 = prompt("Who will you choose to fight?");
// }

// function battleResults() {
//     var rand = mashArray[Math.floor(Math.random() * mashArray.length)];
//     var rand2 = firstQuestion[Math.floor(Math.random() * firstQuestion.length)];
//     var rand3 = secondQuestion[Math.floor(Math.random() * secondQuestion.length)];
//     console.log ("You fought" + " " + rand3 + " " + "in the" + " " + rand + " " + "and hit them " + rand2 + " times. Too bad. Mewtwo wins.") 
// }