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
randomstartnumb = Math.floor((Math.random() * 120) + 19);
crystalnumb1 = Math.floor((Math.random() * 12) + 1);
crystalnumb2 = Math.floor((Math.random() * 12) + 1);
crystalnumb3 = Math.floor((Math.random() * 12) + 1);
crystalnumb4 = Math.floor((Math.random() * 12) + 1);
console.log(crystalnumb1, crystalnumb2, crystalnumb3, crystalnumb4);
}


function reset() {
    randomnumbers();
    userscore = 0;
    $("#randomstartnumb").text(randomstartnumb);
    $("#userscore").text(userscore);
    $("#image1").attr("data-crystalvalue", crystalnumb1);
    $("#image2").attr("data-crystalvalue", crystalnumb2);
    $("#image3").attr("data-crystalvalue", crystalnumb3);
    $("#image4").attr("data-crystalvalue", crystalnumb4);
    $("#wins").text(wins);
    $('#losses').text(losses);
    }
    
    
    
    function youWin() {
        $(".winlose").text("You Win!")
    if (userscore === randomstartnumb); {
    wins++;
    $("#wins").text("Wins: " + wins);
    reset();
    }
}
    function youLose() {
        $(".winlose").text("You lose, try again.")
    if (userscore > randomstartnumb); {
    losses++;
    $("#losses").text("Losses: " + losses);
    reset();
    } 
    }

    
    reset();    
    $(".crystal-image").on("click",function(){
        if (userscore >= randomstartnumb) {
            return;
        }
    var crystalvalue = $(this).attr("data-crystalvalue");
    crystalvalue = parseInt(crystalvalue);
    userscore += crystalvalue;
    $("#userscore").text(userscore);
    
    if (userscore === randomstartnumb) {
       youWin();
    } else if (userscore > randomstartnumb) {
        youLose();
    }

    // $(".btn").on("click", function() {
    //     reset();

});

$(".btn").on("click", function() {
    reset();
})

})