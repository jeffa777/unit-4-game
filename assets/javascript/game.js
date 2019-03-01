// random computer number options for game
var comprandomnumb = [];
for(var i = 19; i <= 120; i++) {
    comprandomnumb.push(i);
}
console.log(comprandomnumb);

//random user/crystal number options for game
var crystalnumb = [];
for(var i = 1; i <= 12; i++) {
    crystalnumb.push(i);
}
console.log(crystalnumb);
//variables -
var randomstartnumb = 0;
var crystalstartnumb = 0;
var wins = 0;
var losses =0;
var userscore = 0;


document.onclick = function(event) {
    randomstartnumb = comprandomnumb[Math.floor(Math.random()*comprandomnumb.length)];
    crystalstartnumb = crystalnumb[Math.floor(Math.random()*crystalnumb.length)];   
}