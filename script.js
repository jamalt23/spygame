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

selectLanguage(localStorage.language)
newGame()

function selectLanguage(lang) {
    let select = document.getElementById("language-select");
    let label = document.querySelector(".language-selector label");
    if (lang == undefined){
        lang = 'en';
    }

    select.value = lang
    localStorage.language = lang

    if (lang == "en") {
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
    } else if (lang == "ru") {
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
    }

    if (gameStarted) {
        setWord( words[wordIndex] )
    }
}

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
        hide([gameContainer, playersContainer])
        setTimeout(function(){
            show([newGameBtnContainer, logoContainer]) 
        }, 300)
    }
}

function hideCards(transition = true){
    hide(playerCards, transition)
    setTimeout(function(){    
        if (!(clicks+1 < playerCount)){
            hide([gameContainer, playersContainer])
            setTimeout(function(){ show([newGameBtnContainer, logoContainer]) }, 300)
    }}, 300)
}

function hide(element, transition = true){
    if (element instanceof NodeList || element instanceof Array){
        for (let i = 0; i < element.length; i++) {
            hide(element[i], transition)
    } return }
    element.style.opacity = '0'
    if (transition){
        element.style.transition = 'all .3s'
        setTimeout(function(){ element.style.display = 'none' }, 300);
    }
    else {
        element.style.transition = 'none'
        element.style.display = 'none'
    }
}

function show(element, transition = true){
    if (element instanceof NodeList || element instanceof Array){
        for (let i = 0; i < element.length; i++) {
            show(element[i], transition)
    } return }
    if (transition){ element.style.transition = 'all .3s' }
    else { element.style.transition = 'none' }
    element.style.opacity = '0'
    element.style.removeProperty('display')
    setTimeout(function(){
        element.style.opacity = '1'
    }, 0)
}

function newGame(){
    hide([gameContainer, newGameBtnContainer])
    setTimeout(function(){ show([startButton, playersContainer, logoContainer]) }, 300);
    spy = false
    clicks = -1
    list = ["Spy"]
}
