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
    startGame = document.getElementById('btn-start').addEventListener('click', this.start.bind(this));
    computerScoreDom = document.getElementById('score-computer-current');
    playerScoreDom = document.getElementById('score-player-current');
    roundDisplayDom = document.getElementById('current-round');
    roundSelector = document.getElementById('rounds-choice');
    playerChoice = document.getElementById('rps-choice');
    
    constructor() {
        this.init();
    }

    init() {
        console.log(this.roundSelector.selectedOptions[0].value);
        console.log(this.playerChoice);

        this.playerImage.classList = 'cardProfile player-default';
        this.computerImage.classList = 'cardProfile computer-default';
        this.playerScore = 0;
        this.playerRoll = 0;
        this.computerRoll = 0;
        this.computerScore = 0;
        this.currentRound = 0;
        this.playerScoreDom.textContent = this.playerScore;
        this.computerScoreDom.textContent = this.computerScore;
        this.roundDisplayDom.textContent = this.currentRound;
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

    start() {
        // this.playerRoll = this.castingLots(this.maxChoices);
        this.playerRoll = this.playerChoice.selectedIndex + 1;
        this.computerRoll = this.castingLots(this.maxChoices);

        this.playerImage.classList = 'cardProfile ' + this.setImageText(this.playerRoll);
        this.computerImage.classList = 'cardProfile ' + this.setImageText(this.computerRoll);

        // Determine winner and set score

        // check if last round
        // set game winner if last round
    }
}

new RockPaperScissors();