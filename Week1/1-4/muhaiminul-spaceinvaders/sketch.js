var ship;
var flowers = [];
var drops = [];

function setup() {
    createCanvas(600, 400);
    ship = new Ship();
    drop = new Drop(width / 2, height / 2);
    for (var i = 0; i < 7; i++) {
        flowers[i] = new Flower(i * 80 + 80, 60);
    }
}

function draw() {
    background(51);
    ship.show();

    for (var i = 0; i < drops.length; i++) {
        drops[i].show();
        drops[i].move();
    }
    for (var i = 0; i < flowers.length; i++) {
        flowers[i].show();
    }
}
function keyPressed() {
    if (key === ' ') {
        var drop = new Drop(ship.x, height);
        drops.push(drop);
    }
    if (keyCode === RIGHT_ARROW) {
        ship.move(1);
    } else if (keyCode === LEFT_ARROW) {
        ship.move(-1);
    }
}


//ship object with show function
function Ship() {
    this.x = width / 2;

    this.show = function () {
        noStroke();
        fill(255);
        rectMode(CENTER);
        rect(this.x, height - 20, 20, 60);
    }
    this.move = function (dir) {
        this.x += dir * 15;
    }
}

//flower object
function Flower(x, y) {
    this.x = x;
    this.y = y;

    this.show = function () {
        fill(127, 201, 7);
        ellipse(this.x, this.y, 60, 60);
    }
}

//water drop
function Drop(x, y) {
    this.x = x;
    this.y = y;

    this.show = function () {
        fill(255, 171, 194);
        ellipse(this.x, this.y, 16, 16);
    }
    this.move = function () {
        this.y = this.y - 5;
    }
}
