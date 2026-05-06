function getComputerChoice() {

    // Get a random number between 0 to 1 (1 not inclusive)
    let randomNumber = Math.random();

    // If random number is below 0.25, choose Rock
    if (randomNumber < 0.25) {
        return "rock";
    }

    // If random number is below 0.75 but above 0.25, choose Paper
    if (randomNumber < 0.75) {
        return "paper";
    }

    // If random number is below 0.99 but above 0.75, choose Scissors
    return "scissors";
}

function getHumanChoice() {

    // Get human's choice from prompt
    let humanChoice = prompt("Choose Rock, Paper, or Scissors:");
    return humanChoice;
}

function playGame() {

    // Initialize the scors
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {

        // Make human choice case insensitive
        humanChoice = humanChoice.toLowerCase();

        if (humanChoice === computerChoice) {
            console.log(`It's a draw this round. Both chose ${humanChoice}`)
        } else if (humanChoice === "rock" && computerChoice === "scissors"
            || humanChoice === "paper" && computerChoice === "rock"
            || humanChoice === "scissors" && computerChoice === "paper") {
            console.log(`You win this round! ${toSentenceCase(humanChoice)} beats ${toSentenceCase(computerChoice)}.`);
            ++humanScore;
        } else {
            console.log(`You lose this round! ${toSentenceCase(humanChoice)} loses to ${toSentenceCase(computerChoice)}.`)
            ++computerScore;
        }
    }

    // Loop the game for 5 rounds
    for (let i = 0; i < 5; i++) {
        console.log(`Round ${i + 1}`);
        console.log(`Human Score: ${humanScore} || Computer score: ${computerScore}`);
        playRound(getHumanChoice(), getComputerChoice());
    }

    // Log the final scores
    console.log(`Final scores:
        * Human score: ${humanScore}
        * Computer score: ${computerScore}`);

    if (humanScore === computerScore) {
        console.log("It's a tie");
    } else if (humanScore > computerScore) {
        console.log("Congratulations! You won!");
    } else {
        console.log("Sorry! You lost to the computer!");
    }
}

function toSentenceCase(str) {
    return str.at(0).toUpperCase() + str.slice(1);
}

playGame();