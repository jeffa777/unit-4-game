$(document).ready(function() { 

//variables -
var randomstartnumb;
var wins = 0;
var losses = 0;
var userscore = 0;
var crystalnumb1;
var crystalnumb2;
var crystalnumb3;
var crystalnumb4;

// random computer number options for game
function randomnumbers() {
randomstartnumb = Math.floor(Math.random() * 101 + 19);
crystalnumb1 = Math.floor(Math.random() * 12 + 1);
crystalnumb2 = Math.floor(Math.random() * 12 + 1);
crystalnumb3 = Math.floor(Math.random() * 12 + 1);
crystalnumb4 = Math.floor(Math.random() * 12 + 1);
console.log(crystalnumb1, crystalnumb2, crystalnumb3, crystalnumb4);
}

// reset/new game...
function reset() {
    randomnumbers();
    userscore = 0;
    $("#randomstartnumb").text("Score to match: " + randomstartnumb);
    $("#userscore").text("Your score: " + userscore);
    $("#image1").attr("data-crystalvalue", crystalnumb1);
    $("#image2").attr("data-crystalvalue", crystalnumb2);
    $("#image3").attr("data-crystalvalue", crystalnumb3);
    $("#image4").attr("data-crystalvalue", crystalnumb4);
    }
    
    
    reset();    
    $(".crystal-image").on("click",function(){
        $(".winlose").text("");
        var crystalvalue = $(this).attr("data-crystalvalue");
        crystalvalue = parseInt(crystalvalue);
        userscore += crystalvalue;
        $("#userscore").text("Your score: " + userscore);
        check ();
       
        // check score to display win or lose properly
        function check () {
        if (userscore === randomstartnumb) {
            $(".winlose").text("You Win!");
            wins++;
            $("#wins").text(wins);
            reset();
        } else if (userscore > randomstartnumb) {
            $(".winlose").text("You lose, try again.");
            losses++;
            $("#losses").text(losses);
            // console.log(losses);
            reset();
        }
    }
    
});


})