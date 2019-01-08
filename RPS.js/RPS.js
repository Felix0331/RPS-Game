
let computerPlay=()=>{
    let choices = ['Rock', 'Paper', 'Scissors'];
    let computerSelection = [Math.floor(Math.random() * choices.length)];
    return console.log(computerSelection);
};

computerPlay();