// Function to generate the computer's choice
function computerChoice(){
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

// Function to determine the winner
function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return "It's a tie!";
    } else if (
        (userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "paper" && computerChoice === "rock") ||
        (userChoice === "scissors" && computerChoice === "paper")
    ) {
        return "You win!";
    } else {
        return "Computer wins!";
    }
}

// Get user's choice
const userChoice = prompt("Choose: rock, paper, or scissors").toLowerCase();

if (userChoice === "rock" || userChoice === "paper" || userChoice === "scissors") {
    const compChoice = computerChoice();
    const result = determineWinner(userChoice, compChoice);
    console.log(`You chose ${userChoice}. Computer chose ${compChoice}. ${result}`);
} else {
    console.log("Invalid choice. Please choose rock, paper, or scissors.");
}



