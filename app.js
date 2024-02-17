// 1. define - zarlah
var playerChoice = document.querySelector(".yourChoice");
var computerChoice = document.querySelector(".computerChoice");
var winner = document.querySelector(".winner");
var random;
var computer;
var pCount=0, cCount=0;
var pPoint = document.querySelector(".pCount");
var cPoint = document.querySelector(".cCount");
// 2. function zarlah
function play(player){
	if(player=="rock"){
		playerChoice.innerText="Player:rock";
	}else if(player=="paper"){
		playerChoice.innerText="Player:paper";
	}else if(player=="scissors"){
		playerChoice.innerText="Player:scissors";
	}
	// 0,1,2   0->rock, 1->paper 2 ->scissors
	// Math.random() -> 0-1 hoorond random too gargaj irne
	random = Math.floor(Math.random()*3);
	console.log(random);
	if(random==0){
		computerChoice.innerText="Computer:rock";
		computer="rock";
	}else if(random==1){
		computerChoice.innerText="Computer:paper";
		computer="paper";
	}else if(random==2){
		computerChoice.innerText="Computer:scissors";
		computer="scissors";
	}
	// paper -> rock, rock -> scissors, scissors->paper
	if((player=="paper" && computer=="rock") ||
	   (player=="rock" && computer=="scissors") ||
	   (player=="scissors" && computer=="paper")){
		winner.innerText="Result:Player win!";
		pCount++;
		pPoint.innerText = "Player:" + pCount;
	}else if(player==computer){
		winner.innerText="Result:Tie!";
	}else{
		winner.innerText="Result:Computer win!";
	}
}
function restart(){
	cPoint=0;
	pPoint=0;
	winner.innerText="Result:";
	playerChoice.innerText="Player:";
	computerChoice.innerText="Computer:";
}