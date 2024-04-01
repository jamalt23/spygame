<h1>Spy Game</h1>
https://jamalt23.github.io/spygame/

<h3>Rules:</h3>

**Three or more players can play.**

When the game starts, one player clicks on the `Choose` button while others don't watch at the screen.
<br>After you click on the `Choose` button, if you are not the Spy, you see a random word.
<br>When all players have clicked the button, one of them is the Spy so he doesn't know the word.

Players can ask each other about the word, to figure out who is the Spy.
<br>**Note: those must be a yes-or-no questions**

When they figure out who is the Spy, they can vote.
<br>If they were right then the Spy loses. Otherwise, he wins.
<br>If the spy guesses the word before other players vote, he can confess that he is the Spy and say the word.
<br>The spy loses if he guessed the word wrong and wins if he guessed it right.

<h3>Example:</h3>

5 players start the game.

The first player clicks the `Choose` button and sees the word "Planet". Then he clicks the `Hide` button.
<br>The second player clicks the `Choose` button and sees the word "Planet". Then he clicks the `Hide` button.
<br>The third player clicks the `Choose` button and sees the word "Spy". Then he clicks the `Hide` button.
<br>Other players click and see the same word ("Planet").

Then they start to ask each other questions.
<br>For example, player 1 asks player 2: "Is it an animal?"
<br>Player 2 answers "No". 
<br>Then player 2 asks player 3: "Is it possible to put this item in a pocket?"
<br>Player 3 answers "Yes".

Obviously, it is impossible to fit a whole planet in a pocket, so other players figure out that player 3 doesn't know the word and he is the Spy.
<br>They vote that he is the Spy, and he loses.

Words array
----------
```JavaScript
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
    "Jeans", "Language", "Sponge", "Cardboard", "Dumplings", "Brandy", "Mountain", "Palm", "Table",
    "Scarf", "Mask", "Puddle", "Egg", "Pillow", "Flame", "Chocolate", "Briefcase", "Onion", "Tree", "Plate",
    "Root", "Lock", "Cell", "Stick", "Hair", "Skull", "Rope", "Cheese", "Chicken", "Goose", "Steam", "Light",
    "Call", "Horse", "Hail", "Crane", "Wig", "Tooth", "Button", "Suitcase", "Crow", "Plane", "Island", "Bottle",
    "Secateurs", "Hand", "Knee", "Kitten", "Newspaper", "Dragonfly", "Key", "Wallet", "Glass", "Potato", "Tie",
    "Wheel", "Heat", "Hood", "Fork", "Jam", "Bouquet", "Pasta", "Mouse", "Floor", "Lilac"
]
```
```JavaScript
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
    "Гитара", "Карандаш", "Доска", "Шапка", "Кукла", "Колбаса", "Погода", "Чашка", "Черника", "Мышь",
    "Орех", "Поцелуй", "Чаша", "Капуста", "Тень", "Дракон", "Платье", "Болт", "Дочь", "Мыло", "Диван", "Джинсы",
    "Язык", "Губка", "Картон", "Пельмени", "Коньяк", "Гора", "Ладонь", "Стол", "Шарф", "Маска", "Лужа",
    "Яйцо", "Подушка", "Пламя", "Шоколад", "Портфель", "Лук", "Дерево", "Блюдо", "Корень", "Замок", "Клетка",
    "Палка", "Волос", "Череп", "Веревка", "Сыр", "Курица", "Гусь", "Пар", "Свет", "Звонок", "Лошадь", "Град",
    "Кран", "Парик", "Зуб", "Клавиша", "Чемодан", "Ворона", "Самолет", "Остров", "Бутылка", "Секатор", "Рука",
    "Колено", "Котенок", "Газета", "Стрекоза", "Ключ", "Кошелек", "Стакан", "Картошка", "Галстук", "Колесо",
    "Жара", "Капюшон", "Вилка", "Джем", "Букет", "Паста", "Мышь", "Пол", "Сирень"
]
```
