//establish variables

//generate random value to get
//generate random values for crystals

//create buttons for crystals
    //buttons add to score

//if score === wanted value, add win reset game
//if score > wanted value, add loss reset game

//need game reset function, random crystal value function, random score function

// wait until page loaded to run JS
$(document).ready(function() {
  
//establish variables
    var value = 0;
    var crystal1 = 0;
    var crystal2 = 0;
    var crystal3 = 0;
    var crystal4 = 0;
    var score = 0;
    var wins = 0;
    var losses = 0;
    var started = false;

    //random goal value
    function randValue() {
        value = Math.floor(Math.random()*101 + 19)
    }

    //random crystal values
    function randCrystals() {
        crystal1 = Math.floor(Math.random()*11 + 1);
        crystal2 = Math.floor(Math.random()*11 + 1);
        crystal3 = Math.floor(Math.random()*11 + 1);
        crystal4 = Math.floor(Math.random()*11 + 1);
    }

    //reset game
    function reset() {
        score = 0;
        $("#score").text(0);
        randValue();
        randCrystals();
        $("#wins").text(wins);
        $("#losses").text(losses);
        console.log(value);
    }

    //adding crystal value to score
    function add(crystal) {
        score = score + crystal;
        console.log(score);
        console.log(value);
        $("#targetScore").text(value);
        $("#crystalScore").text(score);
    
        //assign win/loss when conditions met
        if (score === value) {
            wins++;
            alert("You Won!");
            reset();
        }
        if (score > value) {
            losses++;
            alert("You Lost!");
            reset();
        }
    }

    //start game function
    function start() {
        if (started === false) {
        started = true;
        reset();
        }
    }

    //press any key to start game
    document.onkeydown = function() {
        start();
    };

    //make crystal buttons work
    $("#crystal1").on("click", function() {
        add(crystal1);
    });

    $("#crystal2").on("click", function() {
        add(crystal2);
    });

    $("#crystal3").on("click", function() {
        add(crystal3);
    });

    $("#crystal4").on("click", function() {
        add(crystal4);
    })
});




