const mediaQuery = matchMedia('only screen and (max-width: 767px)')

const logoContainer = $('#logo-container')
const startButton = $('#start-btn');
const langSelect = $('#language-select');
const langSelectLabel = $('label[for="language-select"]');
const playersContainer = $('#players-container');
const playerCountText = $('#player-count-text');
const playerCountWrong = $('#player-count-wrong');
const gameContainer = $('#game-container');
const playerCardGood = $('#player-card-good');
const playerCardBad = $('#player-card-bad');
const playerCards = $('.player-card');
const hideButtons = $('.btn-hide')
const chooseButton = $('#choose-btn');
const newGameBtnContainer = $('#new-game-btn-container')
const newGameBtn = $('#new-game-btn');

let gameStarted = false;
let spy = false;
let clicks = -1;
let roles = ["Spy"];

function newGame(){
    hide([gameContainer, playerCards, newGameBtnContainer, timerContainer], () => {
        show([startButton, playersContainer, logoContainer]);
    })

    gameStarted = false
    spy = false
    clicks = -1
    roles = ["Spy"]
}

const minPlayers = 3;
const maxPlayers = 100;

function changePlayerCount(n, min=minPlayers, max=maxPlayers) {
    const prevPlayerCount = parseInt($('#player-count').text())
    const newPlayerCount = prevPlayerCount + n
    if (newPlayerCount >= min && newPlayerCount <= max) {
        $('#player-count').text(newPlayerCount)
    } else {
        $('#player-count').text( min )
    }
}

let playerCount;
function startGame(n){
    setWord(getRandomItem(words))

    if (gameStarted) {
        newGame();
        return 
    }

    playerCount = parseInt(n);

    if (playerCount > 2 && playerCount < 101) {
        console.log('The game started.')
        gameStarted = true;
        playerCountWrong.hide()
        logoContainer.hide()
        hide(playersContainer, () => show(gameContainer))

        roles = ["Spy"]
        for (let i = 1; i < playerCount; i++) {
            roles.push(word)
        }
    }
    else {
        show(playerCountWrong)
        changePlayerCount(minPlayers)
    }
}

function chooseRole(){
    hideCards(transition = false)
    clicks += 1

    if (clicks < playerCount){
        const role = getRandomItem(roles)
        if (role == "Spy" && !spy) {
            show(playerCardBad)
            spy = true
        }
        else {
            show(playerCardGood)
        }
        roles.splice(roles.indexOf(role), 1);
    }
    else{
        endChoosing()
    }
}

function hideCards(transition = true){
    hide(playerCards, () => {
        if (!(clicks+1 < playerCount)){
            endChoosing()
        }
    }, transition)
}

function endChoosing(){
    hide(gameContainer, () => {
        show([newGameBtnContainer, timerContainer]);
    })
    startTimer(300)
}
