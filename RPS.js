const choices = ["Rock", "Paper", "Scissors"];

let wins = 0;
let ties = 0;
let losses = 0;


function playGame(playerChoice) {

    // Pick random choice for CPU
    const randomNumber = Math.floor(Math.random() * 3);

    const cpuChoice = choices[randomNumber];


    // Display choices
    document.getElementById("player-choice").textContent = playerChoice;

    document.getElementById("cpu-choice").textContent = cpuChoice;


    // Determine winner
    let result;


    if (playerChoice === cpuChoice) {

        result = "Tie!";
        ties++;

    }

    else if (
        (playerChoice === "Rock" && cpuChoice === "Scissors") ||
        (playerChoice === "Paper" && cpuChoice === "Rock") ||
        (playerChoice === "Scissors" && cpuChoice === "Paper")
    ) {

        result = "You Win!";
        wins++;

    }

    else {

        result = "You Lose!";
        losses++;

    }


    // Show result
    document.getElementById("result").textContent = result;


    // Update score
    document.getElementById("wins").textContent = wins;

    document.getElementById("ties").textContent = ties;

    document.getElementById("losses").textContent = losses;

}


function resetGame() {

    wins = 0;
    ties = 0;
    losses = 0;


    document.getElementById("wins").textContent = 0;

    document.getElementById("ties").textContent = 0;

    document.getElementById("losses").textContent = 0;


    document.getElementById("player-choice").textContent = "-";

    document.getElementById("cpu-choice").textContent = "-";

    document.getElementById("result").textContent =
        "Choose Rock, Paper, or Scissors";

}