function randLetter() {
    var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    //State letters that will be used in function
    var randomLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
    //Choose random letter from the array
    return randomLetter;
//return alphabet[rand(alphabet.length)] <--- Very simple way to do all the above//
}

console.log(randLetter());

function randWord() {
    var word = "";
    //Use a loop to pick 5 random letters
    for (var i = 0; i < 5; i++) {
        //Pick a letter
        word = word + randLetter();
    }
    return word;
}

console.log (randWord());

function randSentence() {
    var sentence = "";
    //Use a loop to pick 5 random words
    for (var i = 0; i < 5; i++) {
        //Pick a word
        sentence = sentence + randWord() + " ";
    }
    return sentence;
}