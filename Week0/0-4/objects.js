var charizardArray = ["Blaze", 266, false, ["Fire","Flying"]];
var charizardObject = {
    "attack": "Blaze",
    "HP": "266",
    "legendary": false,
    "types": ["Fire","Flying"]
};

var YeezyObject = {
    "Brand": "Adidas",
    "Model": "Yeezy Boost 350",
    "Color": "Turtledove",
    "Size": 9,
    "Price":3200
};

function Shoe(brand, model) {
    this.brand = brand;
    this.model = model;
}

var boosts = new Shoe("Adidas","Yeezy Boost 350");
var stans = new Shoe("Adidas","Stan Smiths");

function Superhero(heroName, realName, superpower) {
    this.heroName=heroName;
    this.realName=realName;
    this.superpower=superpower;
}

var superman = new Superhero
("Superman", "Clark Kent", ["Flying", "Super Strength"]);
var spiderman = new Superhero
("Spiderman","Peter Parker", ["Spidey Sense", "Web-Slinging","Wall Climbing","Super Strength"]);