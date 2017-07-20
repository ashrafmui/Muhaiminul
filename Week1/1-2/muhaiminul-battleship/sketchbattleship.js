//2D GRID
//make 25 50 by 50 squares
//give each sqaure an identification tag
//if mouseclicks that space, check the identification tag and have the tile change color accordingly


//SHIP SETUP
//have each square be identified 
//make 4 spots as a ship


//ATTACK STATE
//store(push) values of squares clicked in(to) an array

function setup() {
    createCanvas(200,200);
    background(200);
    var A1 = rect(0, 0, 50, 50);
    var A2 = rect(0, 50, 50, 50);
    var A3 = rect(0, 100, 50, 50);
    var A4 = rect(0, 150, 50, 50);
    var B1 = rect(50, 0, 50, 50);
    var B2 = rect(50, 50, 50, 50);
    var B3 = rect(50, 100, 50, 50);
    var B4 = rect(50, 150, 50, 50);
    var C1 = rect(100, 0, 50, 50);
    var C2 = rect(100, 50, 50, 50);
    var C3 = rect(100, 100, 50, 50);
    var C4 = rect(100, 150, 50, 50);
    var D1 = rect(150, 0, 50, 50);
    var D2 = rect(150, 50, 50, 50);
    var D3 = rect(150, 100, 50, 50);
    var D4 = rect(150, 150, 50, 50);

}

function mouseClicked(){
    if(mouseX > 0 && mouseX < 50 && mouseY > 0 && mouseY < 50){
fill('blue')
rect(0, 0, 50, 50)
    }

  if(mouseX > 0 && mouseX < 50 && mouseY > 50 && mouseY < 100){
fill('blue')
rect(0, 50, 50, 50);
    }

if(mouseX > 0 && mouseX < 50 && mouseY > 100 && mouseY < 150){
fill('blue')
rect(0, 100, 50, 50);
    }
 if(mouseX > 0 && mouseX < 50 && mouseY > 150 && mouseY < 200){
fill('blue')
rect(0, 150, 50, 50);
    }
 if(mouseX > 50 && mouseX < 100 && mouseY > 0 && mouseY < 50){
fill('blue')
rect(50, 0, 50, 50);
    }
 if(mouseX > 50 && mouseX < 100 && mouseY > 50 && mouseY < 100){
fill('blue')
rect(50, 50, 50, 50);
    }
 if(mouseX > 50 && mouseX < 100 && mouseY > 100 && mouseY < 150){
fill('blue')
rect(50, 100, 50, 50);
    }
 if(mouseX > 50 && mouseX < 100 && mouseY > 150 && mouseY < 200){
fill('red')
rect(50, 150, 50, 50);
textSize(50)
return text('You win', 0, 100);    
}
 if(mouseX > 100 && mouseX < 150 && mouseY > 0 && mouseY < 50){
fill('blue')
rect(100, 0, 50, 50);
        }
        if(mouseX > 100 && mouseX < 150 && mouseY > 50 && mouseY < 100){
fill('blue')
rect(100, 50, 50, 50);
        }
if(mouseX > 100 && mouseX < 150 && mouseY > 100 && mouseY < 150){
fill('blue')
rect(100, 100, 50, 50);
}
if(mouseX > 100 && mouseX < 150 && mouseY > 150 && mouseY < 200){
fill('blue')
rect(100, 150, 50, 50);
}
if(mouseX > 150 && mouseX < 200 && mouseY > 0 && mouseY < 50){
fill('blue')
rect(100, 0, 50, 50);
}

if(mouseX > 150 && mouseX < 200 && mouseY > 0 && mouseY < 50){
fill('blue')
rect(150, 0, 50, 50);
}

if(mouseX > 150 && mouseX < 200 && mouseY > 50 && mouseY < 100){
fill('blue')
rect(150, 50, 50, 50);
}

if(mouseX > 150 && mouseX < 200 && mouseY > 100 && mouseY < 150){
fill('blue')
rect(150, 100, 50, 50);
}

if(mouseX > 150 && mouseX < 200 && mouseY > 150 && mouseY < 200){
fill('blue')
rect(150, 150, 50, 50);
}

}