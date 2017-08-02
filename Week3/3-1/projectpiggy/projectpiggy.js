var piggyBank = 9;
var dollarBill = 1;
var fivedollar = 5
var tendollar = 10;

function mouseClicked("dollarBill"){

}

function();

<script>
    document.getElementById("projectpiggy.html").onclick = function() {myFunction()};

function myFunction() {
        document.getElementById("projectpiggy.html").innerHTML = "YOU CLICKED ME!";
    }
</script>

$("p").click(function () {
    alert("The paragraph was clicked.");
});


var hp = 100;
var gold = 0;
var numberDefeated = 0;

function setup() {
    // Add game title
    $("body").append("<h1> Welcome to Ogre Fighter v.1.0</h1>");
    // Add game info
    $("body").append("<p> Ogres are attacking your village! When you slay one, they drop gold. The more gold you carry, though, the harder it is to defeat an ogre </p>");
    // Add status
    // TODO: Add stat values
    $("body").append("<h3>STATS</h3><p id = 'stats'>hello</p>");

    // Add attack button
    $("body").append("<button onclick= 'attack()'> Attack the Ogre! </button>");

    //Add container for ogre images
    $("body").append("<div id = 'ogres'></div>");

    updateStats();
}

function updateStats() {
    $('#stats').text("HP: " + hp + " | Gold: " + gold + " | Ogres Slain: " + numberDefeated);

}

function attack() {
    console.log("Attack is being called");
    if (hp > 0) { //Player is still alive
        if (Math.random() * 100 > gold) {
            gold += 10; // gold = gold +10
            numberDefeated++;
            $("#ogres").prepend("<p> You Won! +10 gold. </p>");
        } else {
            gold--; //gold =gold -1
            hp--;
            $("#ogres").prepend("<p> You Lost! -1 gold. </p>");
        }
    }
}

$(document).ready(setup);

//Add the game title
// Add game info
// Add the stats
// Add ogre image
// When the player clicks the button
//     if the player has HP 
//     if the player defeats ogre
//       Add paragraph saying "you win"
//        + Gold to player
//        + Num of ogres defeates
//     else
//       Add paragraph saying "you lost"
//       -Gold from player
//       -HP
//    update stats
//    add another ogre image 
//    else
//       Add paragraph saying "game over"