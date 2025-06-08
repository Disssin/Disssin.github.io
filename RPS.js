/* rock is 0
paper is 1
scissors is 2
*/
let computerChoice = Math.floor(Math.random() * 3);

function playRock(){
    
    if (computerChoice == 0){
        document.getElementById("results").innerHTML = "TIE";
        document.getElementById("computerChoice").innerHTML = "Computer chose Rock";
    }
    else if (computerChoice == 1){
        document.getElementById("results").innerHTML = "LOSE";
        document.getElementById("computerChoice").innerHTML = "Computer chose Paper";
    }   
    else{
        document.getElementById("results").innerHTML = "WIN";
        document.getElementById("computerChoice").innerHTML = "Computer chose Scissors";
    }
    

}
function playPaper(){

    if (computerChoice == 0){
        document.getElementById("results").innerHTML = "WIN";
        document.getElementById("computerChoice").innerHTML = "Computer chose Rock";
    }
    else if (computerChoice == 1) {
        document.getElementById("results").innerHTML = "TIE";
        document.getElementById("computerChoice").innerHTML = "Computer chose Paper";
    }
    else{
        document.getElementById("results").innerHTML = "LOSE";
        document.getElementById("computerChoice").innerHTML = "Computer chose Scissors";
    }
}
function playScissors(){
    if (computerChoice == 0){
        document.getElementById("results").innerHTML = "LOSE";
        document.getElementById("computerChoice").innerHTML = "Computer chose Rock";
    }
    else if (computerChoice == 1) {
        document.getElementById("results").innerHTML = "WIN";
        document.getElementById("computerChoice").innerHTML = "Computer chose Paper";
    }
    else{
        document.getElementById("results").innerHtml = "TIE";
        document.getElementById("computerChoice").innerHTML = "Computer chose Scissors";
    }

}
function restart(){
    document.getElementById("results").innerHTML = " ";
    document.getElementById("computerChoice").innerHTML = "Pick your Option";
    computerChoice = Math.floor(Math.random() * 3);
}