const mediaQuery = window.matchMedia('only screen and (max-width: 767px)')
var logoContainer = document.querySelector('.logo-container')
var startButton = document.querySelector('#start-btn');
var playersContainer = document.querySelector('.players-container');
var playerCountInput = document.querySelector('#players-input');
var playerCountLabel = document.querySelector('.players-container label');
var gameContainer = document.querySelector('.game-container');
var playerCardGood = document.querySelector('.player-card-good');
var playerCardBad = document.querySelector('.player-card-bad');
var playerCards = document.querySelectorAll('.player-card');
var chooseButton = document.querySelector('.choose-button');
var playerCountWrong = document.querySelector('#player-count-wrong');
var wordTag = document.querySelector('.word');
var newGameBtnContainer = document.querySelector('#new-game-btn-container')
var newGameBtn = document.querySelector('.btn-new-game');
var gameStarted = false;

function selectLanguage(lang) {
    var select = document.getElementById("language-select");
    var label = document.querySelector(".language-selector label");

    if (lang === "en") {
        select.value = 'en'
        localStorage.setItem("language", "en");
        words = words_eng
        label.textContent = "Select language:";
        playerCountWrong.textContent = "Error: Player count must be between 3 and 100";
        startButton.textContent = "Start";
        chooseButton.textContent = "Choose";
        newGameBtn.textContent = "New Game";
        document.querySelector('.players-container label').textContent = "Enter player count:"
        document.querySelector('.player-card-bad p').textContent = "You are"
        document.querySelector('.player-card-bad h1').textContent = "Spy"
        document.querySelector('.player-card-good p').textContent = "The word is:"
        for (hideBtn of document.querySelectorAll('.btn-hide')) {
            hideBtn.textContent = "Hide"
        }
        if (gameStarted){
            word = words[wordIndex]
            wordTag.innerText = word
        }
    } else if (lang === "ru") {
        select.value = 'ru'
        localStorage.setItem("language", "ru");
        words = words_rus
        label.textContent = "Выберите язык:";
        playerCountWrong.textContent = "Ошибка: Количество игроков должно быть между 3 и 100";
        startButton.textContent = "Начать";
        chooseButton.textContent = "Выбрать";
        newGameBtn.textContent = "Новая игра";
        if (mediaQuery.matches) {
            playerCountLabel.textContent = "Введите кол-во игроков:"
        } else {
            playerCountLabel.textContent = "Введите количество игроков:"
        }
        document.querySelector('.player-card-bad p').textContent = "Вы"
        document.querySelector('.player-card-bad h1').textContent = "Шпион"
        document.querySelector('.player-card-good p').textContent = "Слово:"
        for (hideBtn of document.querySelectorAll('.btn-hide')) {
            hideBtn.textContent = "Скрыть"
        }
        if (gameStarted) {
            word = words[wordIndex]
            wordTag.innerText = word
        }
    }
}

if (localStorage.getItem("language") === "ru") {
    selectLanguage("ru")
}
else {
    selectLanguage("en")
}
hide([gameContainer, newGameBtnContainer], transition = false)

function getRandomInt(min, max) {
    var array = new Uint32Array(1);
    window.crypto.getRandomValues(array);
    return Math.floor(array[0] / (0xffffffff + 1) * (max - min + 1) + min);
}

function getRandomWord(){
    word = words[getRandomInt(1, words.length)];
    wordTag.innerText = word;
    if (word.length >= 8) {
        wordTag.style.fontSize = "37px"
    }
    wordIndex = words.indexOf(word)
    return word
}

function startGame(playerCount){
    word = getRandomWord()
    if (spy=="true"){
        window.location.reload();
    }
    playerCount = parseInt(playerCount);
    if (playerCount > 2 && playerCount < 101) {
        console.log('The game started.')
        gameStarted = true;
        hideCards(transition = false)
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
        playerCountWrong.style.display = 'inherit';
    }
}

spy = "false"
clicks = -1

function chooseRole(){
    for (let card of playerCards) {
        card.style.display = 'none';
    }
    clicks += 1
    var playerCount = playerCountInput.value;
    var role = list[getRandomInt(0, list.length-1)];
    if (clicks < playerCount){
        if (role == "Spy" && spy!="true") {
            let card = playerCardBad
            show(card)
            spy = "true"
        }
        else {
            let card = playerCardGood
            show(card)
        }
        list.splice(list.indexOf(role), 1);
    }
    else{
        hide([gameContainer, playersContainer])
        setTimeout(function(){
            show([newGameBtnContainer, logoContainer]) 
        }, 300)
    }
}

function hideCards(transition = true){
    var playerCount = playerCountInput.value;
    hide(playerCards, transition)
    setTimeout(function(){    
        if (!(clicks+1 < playerCount)){
            hide([gameContainer, playersContainer])
            setTimeout(function(){ show([newGameBtnContainer, logoContainer]) }, 300)
    }}, 300)
}

function hide(element, transition = true){
    if (typeof element === 'object') {
        for (let i = 0; i < element.length; i++) {
            hide(element[i], transition)
        }
    } try {
    element.style.transition = 'all .3s'
    element.style.opacity = '0'
    if (transition){
        setTimeout(function(){ element.style.display = 'none' }, 300);
    }
    else {
        element.style.display = 'none'
    }}
    catch(err){}
}

function show(element, transition = true){
    if (typeof element === 'object') {
        for (let i = 0; i < element.length; i++) {
            show(element[i], transition)
        }
    } try {
    element.style.transition = 'all .3s'
    element.style.removeProperty('display')
    if (transition){
        setTimeout(function(){ element.style.opacity = '1' }, 0)
    }
    else {
        element.style.opacity = '1'
    }}
    catch(err){}
}

function newGame(){
    hide(newGameBtnContainer)
    setTimeout(function(){ show([startButton, playersContainer, logoContainer]) }, 300);
    spy = "false"
    clicks = -1
    list = ["Spy"]
}
