const messagesEN = {
    'langSelectLabel': "Select language:",
    'playerCountWrong': "Error: Player count must be between 3 and 100",
    'startButton': "Start",
    'chooseButton': "Choose",
    'newGameBtn': "New Game",
    'playerCountLabel': "Player count:",
    'playerCardBad.children("p")': "You are",
    'playerCardBad.children("h1")': "Spy",
    'playerCardGood.children("p")': "The word is:",
    'hideButtons': "Hide",
}
const messagesRU = {
    'langSelectLabel': "Выберите язык:",
    'playerCountWrong': "Ошибка: Количество игроков должно быть между 3 и 100",
    'startButton': "Начать",
    'chooseButton': "Выбрать",
    'newGameBtn': "Новая игра",
    'playerCountLabel': "Количество игроков:",
    'playerCardBad.children("p")': "Вы",
    'playerCardBad.children("h1")': "Шпион",
    'playerCardGood.children("p")': "Слово:",
    'hideButtons': "Скрыть",
}

function selectLanguage(lang) {
    if (!["en", "ru"].includes(lang)){
        lang = 'en';
    }

    langSelect.val(lang)
    localStorage.language = lang

    if (lang == "en") {
        words = words_eng
        for (let [key, value] of Object.entries(messagesEN)) {
            $(eval(key)).text(value)
        }
    } else if (lang == "ru") {
        words = words_rus
        for (let [key, value] of Object.entries(messagesRU)) {
            $(eval(key)).text(value)
        }
    }

    if (gameStarted) {
        setWord( words[wordIndex] )
    }
}
