function setup() {
    createCanvas(1000,1000);
    background (100,200,300);

    fill("blue");
    rect (0, 0, 500, 300);
    fill("red");
    rect (0, 0, 500, 300);
    fill("green");
    rect (0, 0, 500, 300);
}
    function mouseDragged(){
        noStroke();
        fill(random(255),random(255),random(255),random(255));
        ellipse(mouseX,mouseY,random(50),random(50));
        rect(mouseX,mouseY,random(50),random(50));
    }
    function mousePressed() {
        if (mouseY < 31) {
            color = "blue";
        } else if (mouseY > 30 && mouseY < 61) {
            color = "red";
        } else if (mouseY > 60 && mouseY < 91){
            color = "green";
        }
    }