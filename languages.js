const messagesEN = {
    'langSelectLabel': "Select language:",
    'playerCountWrong': "Error: Player count must be between 3 and 100",
    'startButton': "Start",
    'chooseButton': "Choose",
    'newGameBtn': "New Game",
    'playerCountLabel': "Enter player count:",
    'playerCardBad.children[0]': "You are",
    'playerCardBad.children[1]': "Spy",
    'playerCardGood.children[0]': "The word is:",
    'hideButtons[0]': "Hide",
    'hideButtons[1]': "Hide",
}
const messagesRU = {
    'langSelectLabel': "Выберите язык:",
    'playerCountWrong': "Ошибка: Количество игроков должно быть между 3 и 100",
    'startButton': "Начать",
    'chooseButton': "Выбрать",
    'newGameBtn': "Новая игра",
    'playerCountLabel': "Введите количество игроков:",
    'playerCardBad.children[0]': "Вы",
    'playerCardBad.children[1]': "Шпион",
    'playerCardGood.children[0]': "Слово:",
    'hideButtons[0]': "Скрыть",
    'hideButtons[1]': "Скрыть",
}

function selectLanguage(lang) {
    if (!["en", "ru"].includes(lang)){
        lang = 'en';
    }

    langSelect.value = lang
    localStorage.language = lang

    if (lang == "en") {
        words = words_eng
        for (let [key, value] of Object.entries(messagesEN)) {
            eval(key).textContent = value
        }
    } else if (lang == "ru") {
        words = words_rus
        for (let [key, value] of Object.entries(messagesRU)) {
            eval(key).textContent = value
        }
        if (mediaQuery.matches) {
            playerCountLabel.textContent = "Введите кол-во игроков:"
        }
    }

    if (gameStarted) {
        setWord( words[wordIndex] )
    }
}
