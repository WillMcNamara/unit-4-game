//establish variables

//generate random value to get
//generate random values for crystals

//create buttons for crystals
    //buttons add to score

//if score === wanted value, add win reset game
//if score > wanted value, add loss reset game

//need game reset function, random crystal value function, random score function

var value = 0;
var crystal1 = 0;
var crystal2 = 0;
var crystal3 = 0;
var crystal4 = 0;
var score = 0;
var wins = 0;
var losses = 0;

function randValue() {
    value = Math.floor(Math.random()*25 + 50)
}

function randCrystal(crystal) {
    crystal = Math.floor(Math.random()*10 + 1)
}

function reset() {
    score = 0;
    $("#score").text(0);
    randValue();
    randCrystal(crystal1);
    randCrystal(crystal2);
    randCrystal(crystal3);
    randCrystal(crystal4);
}


