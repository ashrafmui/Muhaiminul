// //Object
// var blazikenStats = {
//     atk: 120,
//     def: 70,
//     HP: 80,
//     legend: false,
//     name: "Blaziken",
//     type: ["Fire","Fighting"],
// }

// //Object
// var sableyeStats = {
//     atk: 75,
//     def: 75,
//     HP: 50,
//     legend: true,
//     name: "Sableye",
//     type: ["Dark","Ghost"],
// }

// //Object
// var wailordStats = {
//     atk: 90,
//     def: 45,
//     HP: 450,
//     legend: false,
//     name: "Wailord",
//     type: "Water",
// }


// function pokemonAttacked() {
    
// }

function Pokemon(name, atk, def, HP, legend, type) {
    this.name = name;
    this.attack = atk;
    this.defense = def;
    this.HP = HP;
    this.legendary = legend;
    this.type = type;
}

var blazikenStats = new Pokemon ("Blaziken", 120,70,80,false,["Fire","Fighting"]);
var sableyeStats = new Pokemon ("Sableye",75,75,50,true,["Dark","Ghost"]);
var wailordStats = new Pokemon ("Wailord",90,45,450,false,"Water");

function printRoster() {
    for (i = 0; i < 3; i++);
    this.talk = function () {
        console.log("Name: " +name+"/n Attack: " + attack + "/n Defense" + defense + "/n HP" + HP + "/n Legendary: " + legendary + "/n Type: " +type)
        return 
    }
}
