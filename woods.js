var woodAmount
var woodMult
var leavesAmount
var leavesMult

woodAmount = 0;
leavesAmount = 0;
woodMult = 1;
leavesMult = 1;

function resetGame(){
	woodAmount = 0;
}

function collectWood(){
	woodAmount += 1 * woodMult;
	document.getElementById("wood amount").innerHTML = "You currently have " + woodAmount + " wood";
}

function collectLeaves(){
	leavesAmount += 1 * leavesMult;
	document.getElementById("leaves amount").innerHTML = "You currently have " + leavesAmount + " Leaves";
}