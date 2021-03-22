class RockPaperScissors {
    numberOfRounds = 1;
    playerScore = 0;
    computerScore = 0;
    playerImage = document.getElementById('player-image');
    computerImage = document.getElementById('computer-image');
    newGame = document.getElementById('btn-new').addEventListener('click', this.init.bind(this));
    startGame = document.getElementById('btn-start').addEventListener('click', this.start.bind(this));
    computerScoreDom = document.getElementById('score-computer-current');
    playerScoreDom = document.getElementById('score-player-current');
    roundSelector = document.getElementById('rounds-choice');
    playerChoice = document.getElementById('rps-choice');
    
    constructor() {
        this.init();
    }

    init() {
        console.log(this.roundSelector.selectedOptions[0].value);
        console.log(this.playerChoice.selectedOptions[0].value);

        this.playerImage.classList = 'cardProfile player-default';
        this.computerImage.classList = 'cardProfile computer-default';
        this.playerScore = 0;
        this.computerScore = 0;
        this.playerScoreDom.textContent = this.playerScore;
        this.computerScoreDom.textContent = this.computerScore;
    }

    start() {
        console.log('start game');
    }
}

new RockPaperScissors();