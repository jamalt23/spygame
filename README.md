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
const words_eng = ["Car", "Watermelon", "Actor", "Angel", "Airport", "Joke", "Certificate", "Bacterium", "Butterfly", "Banana", 
"Bank", "Sheep", "Baggage", "Pool", "Battery", "Ticket", "Dish", "Bolt", "Bomb", "Bath", 
"Bouquet", "Bun", "Bottle", "Bucket", "Rope", "Spring", "Fork", "Water", "Air", "Hair", 
"Crow", "Currency", "Newspaper", "Tie", "Guitar", "Mountain", "Hail", "Mushroom", "Sponge", "Goose", 
"Garage", "Coffin", "Nest", "Galaxy", "Door", "Tree", "Jam", "Jeans", "Sofa", "House", 
"Board", "Daughter", "Dragon", "Castle", "Gentleman", "Heat", "Giraffe", "Toad", "Iron", "Magazine", 
"Gum", "Wife", "Lock", "Star", "Ring", "Zebra", "Mirror", "Seed", "Snake", "Tooth", 
"Needle", "Fright", "Drop", "Cabbage", "Hood", "Pencil", "Carp", "Cardboard", "Potato", 
"Cage", "Key", "Book", "Sausage", "Knee", "Wheel", "Computer", "Horse", "Cognac", "Ship", 
"Box", "Cat", "Wallet", "Tap", "Paint", "Chair", "Bed", "Mole", "Lid", "Doll", 
"Corn", "Chicken", "Palm", "Lamp", "Ladder", "Spoon", "Puddle", "Shovel", "Moon", "Pilot", 
"Mask", "Beacon", "Medal", "Bear", "Sword", "Microphone", "Milk", "Sea", "Motorbike", "Music", 
"Soap", "Mouse", "Meet", "Ball", "Fire", "Window", "Nut", "Island", "Eagle", "Dinner", 
"Weapon", "Organism", "Wallpaper", "Hotel", "Stick", "Folder", "Steam", "Wig", "Park", "Paste", 
"Dumplings", "Furnace", "Gun", "Flame", "Planet", "Plastic", "Dress", "Plate", "Weather", "Present", 
"Pillow", "Floor", "Shelf", "Briefcase", "Kiss", "Cannon", "Hand", "Pen", "Fish", "Slave", 
"Rocket", "Salad", "Airplane", "Slef", "Light", "Second", "Lilac", "Bench", "Elephant", "Dog", 
"Sun", "Bedroom", "Backrest", "Sport", "Cup", "Statue", "Wall", "Table", "Dragonfly", "Arrow", 
"Stool", "Bag", "Cheese", "Telephone", "Shadow", "Cake", "Tractor", "Rag", "Theory", "Pipe", 
"Toilet", "Flag", "Flamingo", "Flashlight", "Photo", "Fruit", "Fabric", "Phobia", "File", "Flower", 
"Target", "Chain", "Chick", "Compass", "Teapot", "Clock", "Human", "Jaw", "Suitcase", "Skull", 
"Turtle", "Blackberry", "Hat", "Baloon", "Scarf", "Napper", "Chocolate", "Apple", "Tongue", "Egg", 
"Locker", "Poison", "Berry", "Yacht", "Pit", "Jaguar"]
```
```JavaScript
const words_rus = ["Автомобиль", "Арбуз", "Актёр", "Ангел", "Аэропорт", "Анекдот", "Аттестат", "Бактерия", "Бабочка", "Банан", 
"Банк", "Баран", "Багажник", "Бассейн", "Батарейка", "Билет", "Блюдо", "Болт", "Бомба", "Баня", 
"Букет", "Булка", "Бутылка", "Ведро", "Веревка", "Весна", "Вилка", "Вода", "Воздух", "Волос", 
"Ворона", "Валюта", "Газета", "Галстук", "Гитара", "Гора", "Град", "Гриб", "Губка", "Гусь", 
"Гараж", "Гроб", "Гнездо", "Галактика", "Дверь", "Дерево", "Джем", "Джинсы", "Диван", "Дом", 
"Доска", "Дочь", "Дракон", "Дворец", "Джентельмен", "Жара", "Жираф", "Жаба", "Железо", "Журнал", 
"Жвачка", "Жена", "Замóк", "Звезда", "Звонок", "Зебра", "Зеркало", "Зерно", "Змея", "Зуб", 
"Игла", "Испуг", "Капля", "Капуста", "Капюшон", "Карандаш", "Карась", "Картон", "Картошка", 
"Клетка", "Ключ", "Книга", "Колбаса", "Колено", "Колесо", "Компьютер", "Конь", "Коньяк", "Корабль", 
"Коробка", "Кот", "Кошелек", "Кран", "Краска", "Кресло", "Кровать", "Крот", "Крышка", "Кукла", 
"Кукуруза", "Курица", "Ладонь", "Лампа", "Лестница", "Ложка", "Лужа", "Лопата", "Луна", "Лётчик", 
"Маска", "Маяк", "Медаль", "Медведь", "Меч", "Микрофон", "Молоко", "Море", "Мотоцикл", "Музыка", 
"Мыло", "Мышь", "Мясо", "Мяч", "Огонь", "Окно", "Орех", "Остров", "Орёл", "Обед", 
"Оружие", "Организм", "Обои", "Отель", "Палка", "Папка", "Пар", "Парик", "Парк", "Паста", 
"Пельмени", "Печь", "Пистолет", "Пламя", "Планета", "Пластик", "Платье", "Плита", "Погода", "Подарок", 
"Подушка", "Пол", "Полка", "Портфель", "Поцелуй", "Пушка", "Рука", "Ручка", "Рыба", "Раб", 
"Ракета", "Салат", "Самолет", "Санки", "Свет", "Секунда", "Сирень", "Скамейка", "Слон", "Собака", 
"Солнце", "Спальня", "Спинка", "Спорт", "Стакан", "Статуя", "Стена", "Стол", "Стрекоза", "Стрела", 
"Стул", "Сумка", "Сыр", "Телефон", "Тень", "Торт", "Трактор", "Тряпка", "Теория", "Труба", 
"Туалет", "Флаг", "Фламинго", "Фонарь", "Фото", "Фрукт", "Фабрика", "Фобия", "Файл", "Цветок", 
"Цель", "Цепочка", "Цыплёнок", "Циркуль", "Чайник", "Часы", "Человек", "Челюсть", "Чемодан", "Череп", 
"Черепаха", "Черника", "Шапка", "Шарик", "Шарф", "Шляпа", "Шоколад", "Яблоко", "Язык", "Яйцо", 
"Ящик", "Яд", "Ягода", "Яхта", "Яма", "Ягуар"]
```
