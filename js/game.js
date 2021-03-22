class RockPaperScissors {
    numberOfRounds = 1;
    maxChoices = 3;
    playerScore = 0;
    playerRoll = 0;
    computerRoll =0;
    computerScore = 0;
    currentRound = 0;
    playerImage = document.getElementById('player-image');
    computerImage = document.getElementById('computer-image');
    newGame = document.getElementById('btn-new').addEventListener('click', this.init.bind(this));
    btnStart = document.getElementById('btn-start');
    startGame = document.getElementById('btn-start').addEventListener('click', this.start.bind(this));
    computerScoreDom = document.getElementById('score-computer-current');
    playerScoreDom = document.getElementById('score-player-current');
    roundDisplayDom = document.getElementById('current-round');
    roundSelector = document.getElementById('rounds-choice');
    playerChoice = document.getElementById('rps-choice');
    gameResults = document.getElementById('results');
    playerWon = false;
    
    constructor() {
        this.setRounds();
    }

    init() {
        console.log(this.roundSelector.selectedOptions[0].value);
        console.log(this.playerChoice);
        this.roundSelector.addEventListener('change', this.setRounds.bind(this));
        this.playerImage.classList = 'cardProfile player-default';
        this.computerImage.classList = 'cardProfile computer-default';
        this.btnStart.classList.remove('hidden');
        this.playerScore = 0;
        this.playerRoll = 0;
        this.computerRoll = 0;
        this.computerScore = 0;
        this.currentRound = 0;
        this.playerScoreDom.textContent = this.playerScore;
        this.computerScoreDom.textContent = this.computerScore;
        this.roundDisplayDom.textContent = this.currentRound;

        this.gameResults.textContent = 'TBD';
    }

    setRounds() {
        this.numberOfRounds = (this.roundSelector.selectedIndex === 0) ? 1 : 3;
        this.init();
    }

    castingLots(max) {
        let currentRoll = Math.ceil(Math.random() * max);
        return currentRoll;
    }

    setImageText(roll) {
        switch(roll) {
            case 1:
                return 'rock';
            case 2:
                return 'scissors';
            case 3:
                return 'paper';
        }
    }

    /**
     * plays the ganme
     */
    start() {
        // Set player choice to local variable
        this.playerRoll = this.playerChoice.selectedIndex + 1;
        
        // Set computer choice based on casting of the lots
        this.computerRoll = this.castingLots(this.maxChoices);

        // Set images based on lots
        this.playerImage.classList = 'cardProfile ' + this.setImageText(this.playerRoll);
        this.computerImage.classList = 'cardProfile ' + this.setImageText(this.computerRoll);

        // Determine winner and set score
        this.determineRoundWinner();
        this.determineGameWinner();
    }

    /**
     * determines round winner after roll
     * @returns void
     */
    determineRoundWinner() {
        if (this.playerRoll === this.computerRoll) {
            this.gameResults.textContent = 'DRAW';
            return;
        }
        // Player logic
        if ((this.playerRoll === 1 && this.computerRoll === 2) || // Rock beats scissors
        (this.playerRoll === 2 && this.computerRoll === 3) || // Scissors beats paper
        (this.playerRoll === 3 && this.computerRoll === 1)) { // Paper beats rock
            this.gameResults.textContent = 'WIN!';
            this.playerScore++;
            this.playerScoreDom.textContent = this.playerScore;
        } else {
            this.gameResults.textContent = 'LOSE!';
            this.computerScore++;
            this.computerScoreDom.textContent = this.computerScore;
        }
        this.currentRound++;
        this.roundDisplayDom.textContent = this.currentRound;

    }

    /**
     * determines game winner if appropriate conditions met
     */
    determineGameWinner() {
        if(this.currentRound === this.numberOfRounds || this.playerScore === 2 || this.computerScore === 2) {
            // End of Game
            if (this.numberOfRounds === 1 && this.playerScore === 1 || 
                this.numberOfRounds === 3 && this.playerScore === 2) {
                this.playerWon = true;
            } else {
                this.playerWon = false;
            }
            this.setWinner();
        }
    }

    /**
     * sets the winner - delayed the image change, otherwise user cannot see the "rock", "paper" or "scissors"
     */
    setWinner() {
        setTimeout(() => {
            if(this.playerWon) {
                this.playerImage.classList = 'cardProfile win'
                this.computerImage.classList = 'cardProfile lose'
            } else {
                this.playerImage.classList = 'cardProfile lose'
                this.computerImage.classList = 'cardProfile win'
            }
            let playAgain = confirm('Would you like to play again?');
            if (playAgain) {
                this.init();
            }
        }, 2000);
        alert('Player has ' + (this.playerWon ? 'WON' : 'LOST'));
        this.btnStart.classList.add('hidden');
    }
}

new RockPaperScissors();