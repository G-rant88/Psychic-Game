

var letter = "abcdefghijklmnopqrstuvwxyz";
// databse of letters
var choices = letter.split("");
var cpu = letter[Math.floor(Math.random() * 26)];
var player = [];
var char = ""
var wins = 0;
var losses = 0;
var gl = 10;

function cpufunc() {

letter[Math.floor(Math.random() * 26)];

}

document.onkeyup = function(event) {

	char = event.key
	
	

if (char === cpu) {
	wins++
	document.getElementById("wins").textContent = " " + wins;
	cpu = letter[Math.floor(Math.random() * 26)];
	gl = 10;
	player = [];



}


else if (char !== cpu && player.indexOf(char) === -1 && 
	  choices.indexOf(char) !== -1)  {

	
	player.push(char);
	
	gl = gl-1
	document.getElementById("left").textContent = " " + gl;
	document.getElementById("sofar").textContent = " " + player.join(" ");

}



if (gl === 0) {
	losses++
	document.getElementById("losses").textContent = " " + losses;
	cpu = letter[Math.floor(Math.random() * 26)];
	gl = 10
	player = [];

}


}

console.log(cpu);
console.log(player);
console.log(choices);
console.log(char);
//for Dev reasons
