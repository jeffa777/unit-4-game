$(document).ready(function() {

//variables -
var randomstartnumb = 0;
var wins = 0;
var losses = 0;
var userscore = 0;
var crystalnumb1 = 0;
var crystalnumb2 = 0;
var crystalnumb3 = 0;
var crystalnumb4 = 0;

// random computer number options for game
function randomnumbers() {
randomstartnumb = Math.floor((Math.random() * 120) + 19);
crystalnumb1 = Math.floor((Math.random() * 12) + 1);
crystalnumb2 = Math.floor((Math.random() * 12) + 1);
crystalnumb3 = Math.floor((Math.random() * 12) + 1);
crystalnumb4 = Math.floor((Math.random() * 12) + 1);
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
    $("#wins").text("You Win!");
    wins++;
    $("#wins").text(wins);
}

function youLose() {
    $("#losses").text("You lose!");
    losses++;
    $("#losses").text(losses);
}




})