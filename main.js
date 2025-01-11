const $logo = $('#logo');
const $gameSetup = $('#game-setup');
const $playerCount = $('#player-count');
const $playerCountError = $('#player-count-error');
const $gameContainer = $('#game-container');
const $playerCards = $('.player-card');
const $playerCardGood = $('#player-card-good');
const $playerCardBad = $('#player-card-bad');
const $newGameBtn = $('#new-game-btn');

let gameStarted = false;
let currentPlayerIndex = -1;
let roles = {
    spy: 1,
    player: 0
};

$newGameBtn.add($logo).on('click', newGame)
function newGame() {
    hide([$gameContainer, $playerCards, $timer, $newGameBtn], () => {
        show([$gameSetup, $logo]);
    })
    gameStarted = false;
    currentPlayerIndex = -1;
    roles = {
        spy: 1,
        player: 0
    };
}

const MIN_PLAYERS = 3;
const MAX_PLAYERS = 100;
const isValidPlayerCount = count => count >= MIN_PLAYERS && count <= MAX_PLAYERS;

$playerCount.on('keydown', (e) => {
    const playerCountText = $playerCount.text()
    if (e.key === 'Backspace' && playerCountText.length > 1) {
        return true;
    }
    if (!(/\d/.test(e.key) && isValidPlayerCount(playerCountText + e.key))) {
        return false;
    }
})

function changePlayerCount(n) {
    const prevPlayerCount = parseInt($playerCount.text());
    const newPlayerCount = prevPlayerCount + n;
    if (isValidPlayerCount(newPlayerCount)) {
        $playerCount.text(newPlayerCount);
    } else {
        $playerCount.text(MIN_PLAYERS);
    }
}

let playerCount;
$('#start-btn').on('click', () => {
    setWord(getRandomItem(words));

    if (gameStarted) {
        newGame();
        return;
    }

    playerCount = parseInt($playerCount.text());

    if (isValidPlayerCount(playerCount)) {
        console.log('The game started.');
        roles.player = playerCount - roles.spy;
        gameStarted = true;
        $playerCountError.hide();
        hide([$logo, $gameSetup], () => show($gameContainer));
    }
    else {
        show($playerCountError);
        changePlayerCount(MIN_PLAYERS);
    }
})

$('#choose-btn').on('click',  () => {
    $playerCards.hide();
    currentPlayerIndex += 1;

    if (currentPlayerIndex < playerCount) {
        const role = getRandomItem(Object.keys(roles));

        if (role === 'spy') {
            show($playerCardBad);
        } else {
            show($playerCardGood);
        }

        roles[role] -= 1;
        if (roles[role] === 0) {
            delete roles[role];
        }
    } else {
        endChoosing();
    }
})

$('.btn-hide').on('click', hideCards);
function hideCards(transition = true) {
    hide($playerCards, () => {
        if (!(currentPlayerIndex+1 < playerCount)){
            endChoosing();
        }
    }, transition)
}

function endChoosing(){
    hide($gameContainer, () => {
        show([$logo, $newGameBtn, $timer]);
    })
    startTimer(300);
}
