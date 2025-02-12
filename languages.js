const languages = {
    en: {
        words: wordsEN,
        translations: {
            '#languageSelector h2': 'Select language:',
            '#player-count-wrong': `Error: Player count must be between ${MIN_PLAYERS} and ${MIN_PLAYERS}`,
            '#start-btn': 'Start',
            '#choose-btn': 'Choose',
            '#new-game-btn': 'New Game',
            '#player-count-text': 'Player count:',
            '#player-card-bad h6': 'You are',
            '#spy': 'Spy',
            '#player-card-good h6': 'The word is:',
            '.btn-hide': 'Hide',
        },
    },
    ru: {
        words: wordsRU,
        translations: {
            '#languageSelector h2': 'Выберите язык:',
            '#player-count-wrong': `Ошибка: Количество игроков должно быть между ${MIN_PLAYERS} и ${MAX_PLAYERS}`,
            '#start-btn': 'Начать',
            '#choose-btn': 'Выбрать',
            '#new-game-btn': 'Новая игра',
            '#player-count-text': 'Количество игроков:',
            '#player-card-bad h6': 'Вы',
            '#spy': 'Шпион',
            '#player-card-good h6': 'Слово:',
            '.btn-hide': 'Скрыть',
        },
    },
};
const $langSelect = $('#language-select');

$langSelect.selectric();
$langSelect.on('change', function () {
    const newLang = this.value;
    if (newLang !== localStorage.language) {
        selectLanguage(newLang);
    }
});

selectLanguage(localStorage.language);
function selectLanguage(lang) {
    if (!Object.keys(languages).includes(lang)) {
        console.warn(`Invalid language code: ${lang}. Defaulting to English.`);
        lang = 'en';
    }

    $('html').prop('lang', lang);
    $langSelect.val(lang);
    localStorage.language = lang;

    const translations = languages[lang].translations;

    for (const [key, value] of Object.entries(translations)) {
        $(key).text(value);
    }

    words = languages[lang].words;
    setWord(words[wordIndex]);
}
