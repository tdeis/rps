console.log("Rock, Paper, Scissors");

const getComupterChoice = () => {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length)
    return choices[randomIndex]
}

const getHumanChoice = () => {
    let humanChoice = prompt('Pick rock, paper, or scissors: ');
}

const playGame = () => {
    let humanScore = 0;
    let computerScore = 0;
    const playRound = (humanChoice, computerChoice) => {

    }
}

const humanSelect = getHumanChoice();
const computerSelect = getComupterChoice();

playGame(humanSelect, computerSelect);