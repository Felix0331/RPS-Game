
let computerPlay=()=>{
    let computerSelection = ['rock', 'paper', 'scissors'];
    return computerSelection[Math.floor(Math.random() * computerSelection.length)];
    
};

let playerSelection = "rock";
const computerSelection = computerPlay();

let playRound=(playerSelection, computerSelection)=>{
    // let caseSensitivity = playerSelection.toUpperCase(); issue with code come back to it possibly scope
    if(playerSelection === computerSelection){
        return "It's a tie!";
    } 
        else if(playerSelection == 'rock' && computerSelection == 'paper'){
            return "You lose!";
        } 
        else if(playerSelection == 'rock' && computerSelection == 'scissors'){
            return "Wohoo! You Win!";
        } 
        else if(playerSelection == 'paper' && computerSelection == 'rock'){
            return "Wohoo! You Win!";
        } 
        else if(playerSelection == 'paper' && computerSelection == 'scissors'){
            return "You Lose!";
        } 
        else if(playerSelection == 'scissors' && computerSelection == 'paper'){
            return "Wohoo! You Win!";
        } 
        else if(playerSelection == 'scissors' && computerSelection == 'rock'){
            return "You Lose!";
        } 
        else{ return "Invalid input, try again."};
    
    
}




console.log(playRound(playerSelection, computerSelection));


