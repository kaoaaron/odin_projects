//global variables for scores
let user_score = 0;
let comp_score = 0;

//prompt for username
let name = prompt("Rule: First player to get to 5 points wins\n\nEnter your name","Player");
document.getElementById("username").innerHTML = name;

//computer generates choice from random number 1,2,or 3
function computerPlay(){
	let val = Math.ceil(Math.random()*3);
	switch(val){
		case 1:
			return "rock";
		case 2:
			return "paper"
		case 3:
			return "scissors"
		default:
			return 0;
	}
}
//determines result of game
function playRound(playerSelection, computerSelection){
	if(playerSelection == computerSelection){
		console.log("tie");
		return "Tie";
	}else if(playerSelection == 'rock'){
		if(computerSelection == 'paper'){
			return "Lose";
		}else{
			return "Win";
		}
	}else if(playerSelection == 'paper'){
		if(computerSelection == 'scissors'){
			return "Lose";
		}else{
			return "Win";
		}
	}else{
		if(computerSelection == 'rock'){
			return "Lose";
		}else{
			return "Win";
		}
	}
}

//updates GUI with correct score and comment
function round_result(result, playerSelection, computer_pick){
	if(result == "Win"){
		document.getElementById("commentaryP").innerHTML = "Your " + playerSelection + " beats " + computer_pick;
		document.getElementById("player_score").innerHTML = ++user_score;
	}else if(result == "Lose"){
		document.getElementById("commentaryP").innerHTML = "Your " + playerSelection + " lost against " + computer_pick;
		document.getElementById("comp_score").innerHTML = ++comp_score;
	}else{
		document.getElementById("commentaryP").innerHTML = "You tied with " + playerSelection;
	}
}

//resets score
function reset(){
	user_score = 0;
	comp_score = 0;
	document.getElementById("player_score").innerHTML = 0;
	document.getElementById("comp_score").innerHTML = 0;
	document.getElementById("commentaryP").innerHTML = "Select your first weapon"
}

//main function
function init(playerSelection){
	if(user_score != 5 && comp_score !=5){
		let computer_pick = computerPlay();
		let result = playRound(playerSelection, computer_pick);
		round_result(result, playerSelection, computer_pick);
	}else{
		console.log("in");
		reset();
	}
	if(user_score == 5){
		document.getElementById("commentaryP").innerHTML = "You Win! Click on a button to play again"
	}else if(comp_score == 5){
		document.getElementById("commentaryP").innerHTML = "You Lose... Click on a button to play again"
	}
}