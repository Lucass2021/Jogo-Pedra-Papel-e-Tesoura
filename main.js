const game = () => {
    let pScore = 0;
    let cScore = 0;

    // Start the Game //
    const startGame = () => {
        const playBtn = document.querySelector(".intro button");
        const introScreen = document.querySelector(".intro");
        const match = document.querySelector(".match");

        playBtn.addEventListener("click", () => {
            introScreen.classList.add("fadeOut");
            match.classList.add("fadeIn");
        });
    };

    // Play Match //
    const playMatch = () => {
        const options = document.querySelectorAll(".options button");
        const playerHand = document.querySelector(".player-hand");
        const computerHand = document.querySelector(".computer-hand");
        const hands = document.querySelectorAll(".hands img");

        hands.forEach(hand => {
            hand.addEventListener("animationend", function () {
                this.style.animation = "";
            })
        })

        // Computer options //
        const computerOptions = ["rock", "paper", "scissors"];

        options.forEach((option) => {
            option.addEventListener("click", function () {
                //Computer choice //
                const computerNumber = Math.floor(Math.random() * 3);
                const computerChoice = computerOptions[computerNumber];

                setTimeout(() => {
                    // Call of compareHands //
                    compareHands(this.textContent, computerChoice);

                    //Update Images
                    playerHand.src = `./assets/${this.textContent}.png`;
                    computerHand.src = `./assets/${computerChoice}.png`;
                }, 2000);

                //Animation//
                playerHand.style.animation = "shakePlayer 2s ease";
                computerHand.style.animation = "shakeComputer 2s ease";
            });
        });
    };

    const updateScore = () => {
        const playerScore = document.querySelector(".player-score p")
        const computerScore = document.querySelector(".computer-score p")
        playerScore.textContent = pScore;
        computerScore.textContent = cScore;
    };


    //Update Text//
    const compareHands = (playerChoice, computerChoice) => {
        // Checking for tie//
        const winner = document.querySelector(".winner");
        if (playerChoice === computerChoice) {
            winner.textContent = "Empate";
            return;
        }

        // Checking for Rock

        if (playerChoice === "rock") {
            if (computerChoice === "scissors") {
                winner.textContent = "Vitória do Jogador"
                pScore++;
                updateScore();
                return;
            } else {
                winner.textContent = "Vitória do Computador"
                cScore++;
                updateScore();
                return;
            }

        }
        //Checking for Paper
        if (playerChoice === "paper") {
            if (computerChoice === "rock") {
                winner.textContent = "Vitória do Jogador"
                pScore++;
                updateScore();
                return;
            } else {
                winner.textContent = "Vitória do Computador"
                cScore++;
                updateScore();
                return;
            }

        }
        //Checking for Scissors
        if (playerChoice === "scissors") {
            if (computerChoice === "paper") {
                winner.textContent = "Vitória do Jogador"
                pScore++;
                updateScore();
                return;
            } else {
                winner.textContent = "Vitória do Computador"
                cScore++;
                updateScore();
                return;
            }

        }
    };

    // Call inner functions //
    startGame();
    playMatch();
};

// Start game function //

game();
