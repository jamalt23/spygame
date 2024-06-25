const mediaQuery = window.matchMedia('only screen and (max-width: 767px)')
var logoContainer = document.querySelector('.logo-container')
var startButton = document.querySelector('#start-btn');
var langSelect = document.getElementById("language-select");
var langSelectLabel = document.querySelector(".language-selector label");
var playersContainer = document.querySelector('.players-container');
var playerCountInput = document.querySelector('#players-input');
var playerCountLabel = document.querySelector('.players-container label');
var gameContainer = document.querySelector('.game-container');
var playerCardGood = document.querySelector('.player-card-good');
var playerCardBad = document.querySelector('.player-card-bad');
var playerCards = document.querySelectorAll('.player-card');
let hideButtons = document.querySelectorAll('.btn-hide')
var chooseButton = document.querySelector('.choose-button');
var playerCountWrong = document.querySelector('#player-count-wrong');
var wordTag = document.querySelector('.word');
var newGameBtnContainer = document.querySelector('#new-game-btn-container')
var newGameBtn = document.querySelector('.btn-new-game');
var gameStarted = false;

selectLanguage(localStorage.language)
newGame()

function getRandomItem(list) {
    let array = new Uint32Array(1);
    window.crypto.getRandomValues(array);
    let randomIndex = array[0] % list.length;
    return list[randomIndex];
}

function setWord(string){
    word = string
    wordTag.innerText = word;
    if (word.length >= 8) {
        wordTag.style.fontSize = "37px"
    } else {
        wordTag.style.removeProperty('font-size')
    }
    wordIndex = words.indexOf(word)
    return word
}

function startGame(playerCount){
    setWord(getRandomItem(words))
    if (spy) { newGame(); return }
    playerCount = parseInt(playerCount);
    window.playerCount = playerCount
    if (playerCount > 2 && playerCount < 101) {
        console.log('The game started.')
        gameStarted = true;
        hide([playerCountWrong, playersContainer])
        setTimeout(function(){ show(gameContainer) }, 300);
        if (mediaQuery.matches) {
            hide(logoContainer)
        }
        list = ["Spy"]
        for (let i = 1; i < playerCount; i++) {
            list.push(word)
        }
    }
    else {
        show(playerCountWrong)
    }
}

function chooseRole(){
    for (let card of playerCards) {
        card.style.display = 'none';
    }
    clicks += 1
    var role = getRandomItem(list)
    if (clicks < playerCount){
        if (role == "Spy" && !spy) {
            let card = playerCardBad
            show(card)
            spy = true
        }
        else {
            let card = playerCardGood
            show(card)
        }
        list.splice(list.indexOf(role), 1);
    }
    else{
        endChoosing()
    }
}

function hideCards(transition = true){
    hide(playerCards, transition)
    if (!(clicks+1 < playerCount)){
        setTimeout(endChoosing, 300)
    }
}

function newGame(){
    hide([gameContainer, newGameBtnContainer, timerContainer])
    setTimeout(()=>{ show([startButton, playersContainer, logoContainer]) }, 300);
    spy = false
    clicks = -1
    list = ["Spy"]
}

function endChoosing(){
    hide([gameContainer, playersContainer])
    setTimeout(()=>{ show([newGameBtnContainer, logoContainer, timerContainer]) }, 300)
    startTimer(300)
}
