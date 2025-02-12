const $timer = $('#timer');

function setTimerValue(value) {
    let minutes = String(Math.floor(value / 60));
    let seconds = String(value - minutes * 60);
    if (minutes.length == 1) {
        minutes = '0' + minutes;
    }
    if (seconds.length == 1) {
        seconds = '0' + seconds;
    }
    $timer.html(`${minutes}:${seconds}`);
}

function startTimer(seconds, endfunc = () => {}) {
    setTimerValue(seconds);
    try {
        clearInterval(timerInterval);
    } catch (e) {}
    timerStart = Math.round(Date.now() / 1000);
    timerInterval = setInterval(() => {
        const now = Math.round(Date.now() / 1000);
        const value = seconds - (now - timerStart);
        setTimerValue(value);
        if (value > seconds) {
            startTimer(seconds, endfunc);
        }
        if (value < 1) {
            setTimerValue(0);
            clearInterval(timerInterval);
            endfunc();
        }
    }, 1000);
}
