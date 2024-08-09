const mediaQuery = matchMedia('only screen and (max-width: 767px)')
var logoContainer = $('.logo-container')
var startButton = $('#start-btn');
var langSelect = $("#language-select");
var langSelectLabel = $(".language-selector label");
var playersContainer = $('.players-container');
var playerCountLabel = $('.players-container label');
var playerCountWrong = $('#player-count-wrong');
var gameContainer = $('.game-container');
var playerCardGood = $('.player-card-good');
var playerCardBad = $('.player-card-bad');
var playerCards = $('.player-card');
var hideButtons = $('.btn-hide')
var chooseButton = $('.choose-button');
var newGameBtnContainer = $('#new-game-btn-container')
var newGameBtn = $('.btn-new-game');
var gameStarted = false;

selectLanguage(localStorage.language)
newGame()
 
function getRandomItem(list) {
    let array = new Uint32Array(1);
    window.crypto.getRandomValues(array);
    let randomIndex = array[0] % list.length;
    return list[randomIndex];
}

function changePlayerCount(n, min=3, max=100){
    let prevPlayerCount = parseInt($('#player-count').text())
    let newPlayerCount = prevPlayerCount + n
    if (newPlayerCount >= min && newPlayerCount <= max) {
        $('#player-count').text(newPlayerCount)
    } else {
        $('#player-count').text( min )
    }
}

function setWord(string){
    word = string
    $('#word').text(word);
    if (word.length >= 8) {
        $('#word').css('font-size', '37px')
    } else {
        $('#word').css('font-size', '50px')
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
        playerCountWrong.hide()
        hide(playersContainer, ()=>{show(gameContainer)})
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
    hideCards(transition = false)
    clicks += 1
    if (clicks < playerCount){
        let role = getRandomItem(list)
        if (role == "Spy" && !spy) {
            show(playerCardBad)
            spy = true
        }
        else {
            show(playerCardGood)
        }
        list.splice(list.indexOf(role), 1);
    }
    else{
        endChoosing()
    }
}

function hideCards(transition = true){
    hide(playerCards, ()=>{
        if (!(clicks+1 < playerCount)){
            endChoosing()
        }
    }, transition)
}

function newGame(){
    hide([newGameBtnContainer, timerContainer], complete=()=>{
    show([startButton, playersContainer, logoContainer]) 
    })
    spy = false
    clicks = -1
    list = ["Spy"]
}

function endChoosing(){
    hide(gameContainer, complete=()=>{
    show([newGameBtnContainer, logoContainer, timerContainer])
    })
    startTimer(300)
}
