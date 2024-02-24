const words = [
    "BMW",
    "Basketball player",
    "Barcelona",
    "Pizza",
    "Tea",
    "Firefighter",
    "Air conditioner",
    "Marker",
    "Police",
    "Plane",
    "Elephant",
    "Asphalt",
    "Cupboard",
    "Telephone",
    "Onion",
    "Bread",
    "Fanta",
    "Egg",
    "Coca-Cola",
    "Potato",
    "Lemon",
    "Alcohol",
    "Apple(company)",
    "Person",
    "Apricot",
    "Glass",
    "House",
    "Gambling",
    "iPhone",
    "Bribe",
    "America",
    "Medicine",
    "Light",
    "Board",
    "Jacket",
    "Watch",
    "Pen",
    "KFC",
    "Chocolate",
    "Fruit",
    "Garage",
    "Ice cream",
    "Pumpkin",
    "Banana",
    "TV",
    "Knife",
    "Google",
    "Refrigerator",
    "YouTube",
    "Mango",
    "Apple",
    "Pear",
    "Clown",
    "Python",
    "JavaScript",
    "HTML",
    "CSS",
    "Lamp",
    "Pencil",
    "Weapon",
    "Bomb"
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
const word = words[Math.floor(Math.random() * words.length)];

function startGame(playerCount){
    if (spy=="true"){
        window.location.reload();
    }
    wordTag.innerText = word;
    playerCount = parseInt(playerCount);
    if (playerCount > 2 && playerCount < 101) {
        playerCountWrong.style.display = 'none';
        console.log('The game started.')
        gameContainer.style.display = 'flex';
    }
    else {
        console.log('hello')
        playerCountWrong.style.display = 'inherit';
    }
}

spy = "false"
clicks = -1

function chooseRole(){
    clicks += 1
    var playerCount = playerCountInput.value;
    list = ["Spy"]
    for (let i of playerCount) {
        list.push(word)
    }
    var randomNumber = Math.floor(Math.random() * playerCount) + 1;
    var role = list[Math.floor(Math.random() * list.length)];
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
