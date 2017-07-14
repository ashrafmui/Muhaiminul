//TASK
//Create a rand() function
//Takes a number
//Creates a random number between 0 and that number

//PSEUDOCODE
//multiply Math.random() by the given number
//remove the decimal part
//return the remaining integer

function rand(number) {
    //Returns a random integer between 0 and 1
    var randomNum = number * Math.random();
    //Increases the parameters by the factor of var number
    var result = Math.floor(randomNum);
    //Rounding down to the integer value in decimal
    return result;
//return Mathfloor(number*Math.random) <---- more efficient way to execute the same set of actions
}

console.log(rand(4));