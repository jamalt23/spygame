const words_eng = [
    "Apple", "Banana", "Car", "Cat", "House", "Milk", "Sun", "Book", "Key", "Phone",
    "Cup", "Fire", "Water", "Dog", "Pencil", "Computer", "Ball", "Hat", "Table", "Paint",
    "Wall", "Pen", "Bed", "Music", "Flower", "Bag", "Sea", "Mirror", "Dress", "Moon",
    "Clock", "Chair", "Lamp", "Map", "Bear", "Folder", "Salad", "Ticket", "Wheel", "Star",
    "Box", "Stairs", "Armchair", "Flag", "Oven", "Medal", "Box", "Horse", "Bedroom", "Microphone",
    "Keychain", "Second", "Kettle", "Mountain", "Man", "Plastic", "Statue", "Bank", "Back", "Meat",
    "Park", "Turtle", "Gun", "Motorcycle", "Ball", "Balloon", "Suitcase", "Jaw", "Door", "Mushroom",
    "Planet", "Bomb", "Stool", "Bench", "Sport", "Pool", "Lighthouse", "Cake", "Stove", "Stairs",
    "Phone", "Spoon", "Mouse", "Stone", "Bun", "Spring", "Grain", "Water", "Arrow", "Fish", "Butterfly",
    "Snake", "Bucket", "Ship", "Air", "Window", "Shelf", "Onion", "Gate", "Ram", "Sword", "Giraffe",
    "Crow", "Cover", "Gun", "Crucian", "Elephant", "Zebra", "Old woman", "Gift", "Sled", "Mole", "Corn",
    "Salad", "Guitar", "Pencil", "Board", "Hat", "Doll", "Sausage", "Weather", "Cup", "Blueberry", "Mouse",
    "Nut", "Kiss", "Bowl", "Cabbage", "Shadow", "Dragon", "Dress", "Bolt", "Daughter", "Soap", "Sofa",
    "Jeans", "Language", "Sponge", "Cardboard", "Dumplings", "Brandy", "Mountain", "Palm", "Table", "Tape",
    "Scarf", "Mask", "Puddle", "Egg", "Pillow", "Flame", "Chocolate", "Briefcase", "Onion", "Tree", "Plate",
    "Root", "Lock", "Cell", "Stick", "Hair", "Skull", "Rope", "Cheese", "Chicken", "Goose", "Steam", "Light",
    "Call", "Horse", "Hail", "Crane", "Wig", "Tooth", "Button", "Suitcase", "Crow", "Plane", "Island", "Bottle",
    "Secateurs", "Hand", "Knee", "Kitten", "Newspaper", "Dragonfly", "Key", "Wallet", "Glass", "Potato", "Tie",
    "Wheel", "Heat", "Hood", "Fork", "Jam", "Bouquet", "Pasta", "Mouse", "Floor", "Lilac"
]
const words_rus = [
    "Яблоко", "Банан", "Автомобиль", "Кот", "Дом", "Молоко", "Солнце", "Книга", "Ключ", "Телефон",
    "Чашка", "Огонь", "Вода", "Собака", "Карандаш", "Компьютер", "Мяч", "Шляпа", "Стол", "Краска",
    "Стена", "Ручка", "Кровать", "Музыка", "Цветок", "Сумка", "Море", "Зеркало", "Платье", "Луна",
    "Часы", "Стул", "Лампа", "Карта", "Медведь", "Папка", "Салат", "Билет", "Колесо", "Звезда",
    "Ящик", "Лестница", "Кресло", "Флаг", "Печь", "Медаль", "Коробка", "Конь", "Спальня", "Микрофон",
    "Ключница", "Секунда", "Чайник", "Гора", "Человек", "Пластик", "Статуя", "Банк", "Спинка", "Мясо",
    "Парк", "Черепаха", "Пистолет", "Мотоцикл", "Мячик", "Шарик", "Чемодан", "Челюсть", "Дверь", "Гриб",
    "Планета", "Бомба", "Табуретка", "Скамейка", "Спорт", "Бассейн", "Маяк", "Торт", "Плита", "Лестница",
    "Телефон", "Ложка", "Мышь", "Камень", "Булка", "Весна", "Зерно", "Вода", "Стрела", "Рыба", "Бабочка",
    "Змея", "Ведро", "Корабль", "Воздух", "Окно", "Полка", "Лук", "Капля", "Ворот", "Баран", "Меч", "Жираф",
    "Ворона", "Крышка", "Пушка", "Карась", "Слон", "Зебра", "Баба", "Подарок", "Санки", "Крот", "Кукуруза",
    "Салат", "Гитара", "Карандаш", "Доска", "Шапка", "Кукла", "Колбаса", "Погода", "Чашка", "Черника", "Мышь",
    "Орех", "Поцелуй", "Чаша", "Капуста", "Тень", "Дракон", "Платье", "Болт", "Дочь", "Мыло", "Диван", "Джинсы",
    "Язык", "Губка", "Картон", "Пельмени", "Коньяк", "Гора", "Ладонь", "Стол", "Лента", "Шарф", "Маска", "Лужа",
    "Яйцо", "Подушка", "Пламя", "Шоколад", "Портфель", "Лук", "Дерево", "Блюдо", "Корень", "Замок", "Клетка",
    "Палка", "Волос", "Череп", "Веревка", "Сыр", "Курица", "Гусь", "Пар", "Свет", "Звонок", "Лошадь", "Град",
    "Кран", "Парик", "Зуб", "Клавиша", "Чемодан", "Ворона", "Самолет", "Остров", "Бутылка", "Секатор", "Рука",
    "Колено", "Котенок", "Газета", "Стрекоза", "Ключ", "Кошелек", "Стакан", "Картошка", "Галстук", "Колесо",
    "Жара", "Капюшон", "Вилка", "Джем", "Букет", "Паста", "Мышь", "Пол", "Сирень"
]

var startButton = document.querySelector('#start-btn');
var playersContainer = document.querySelector('.players-container');
var playerCountInput = document.querySelector('#players-input');
var gameContainer = document.querySelector('.game-container');
var playerCardGood = document.querySelector('.player-card-good');
var playerCardBad = document.querySelector('.player-card-bad');
var chooseButton = document.querySelector('.choose-button');
var playerCountWrong = document.querySelector('#player-count-wrong');
var wordTag = document.querySelector('.word');
var newGameBtnContainer = document.querySelector('#new-game-btn-container')
var newGameBtn = document.querySelector('.btn-new-game');

function selectLanguage(lang) {
    var select = document.getElementById("language-select");
    var label = document.querySelector(".language-selector label");

    if (lang === "en") {
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
        
    } else if (lang === "ru") {
        words = words_rus
        label.textContent = "Выберите язык:";
        playerCountWrong.textContent = "Ошибка: Количество игроков должно быть между 3 и 100";
        startButton.textContent = "Начать";
        chooseButton.textContent = "Выбрать";
        newGameBtn.textContent = "Новая игра";
        document.querySelector('.players-container label').textContent = "Введите количество игроков:"
        document.querySelector('.player-card-bad p').textContent = "Вы"
        document.querySelector('.player-card-bad h1').textContent = "Шпион"
        document.querySelector('.player-card-good p').textContent = "Слово:"
        for (hideBtn of document.querySelectorAll('.btn-hide')) {
            hideBtn.textContent = "Скрыть"
        }
    }
  }
selectLanguage("en")

function getRandomInt(min, max) {
    var array = new Uint32Array(1);
    window.crypto.getRandomValues(array);
    return Math.floor(array[0] / (0xffffffff + 1) * (max - min + 1) + min);
}

function startGame(playerCount){
    word = words[getRandomInt(1, words.length)];
    wordTag.innerText = word;
    if (spy=="true"){
        window.location.reload();
    }
    playerCount = parseInt(playerCount);
    if (playerCount > 2 && playerCount < 101) {
        playerCountWrong.style.display = 'none';
        console.log('The game started.')
        playersContainer.style.display = 'none';
        gameContainer.style.display = 'flex';
        list = ["Spy"]
        for (let i = 0; i < playerCount; i++) {
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
    clicks += 1
    var playerCount = playerCountInput.value;
    var role = list[getRandomInt(0, list.length-1)];
    if (clicks < playerCount){
        if (role == "Spy" && spy!="true") {
            playerCardGood.style.display = 'none';
            playerCardBad.style.display = 'flex';
            spy = "true"
        }
        else {
            playerCardGood.style.display = 'flex';
            playerCardBad.style.display = 'none';
        }
        list.splice(list.indexOf(role), 1);
    }
    else{
        gameContainer.style.display = 'none';
        playersContainer.style.display = 'none';
        newGameBtnContainer.style.display = 'flex';
    }
}

function hideCards(){
    playerCardGood.style.display = 'none';
    playerCardBad.style.display = 'none';
}
