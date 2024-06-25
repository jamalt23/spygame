var timer = document.querySelector('#timer')

function setTimerValue(value){
    let minutes = Math.floor(value/60)
    value = value - minutes*60
    if (String(minutes).length==1){
        minutes = `0${minutes}`
    }
    if (String(value).length==1){
        value = `0${value}`
    }
    timer.innerHTML = `${minutes}:${value}`
}

function startTimer(seconds){
    setTimerValue(seconds)
    timerStart = Math.round(Date.now() / 1000);
    timerInterval = setInterval(() => {
        let now = Math.round(Date.now() / 1000);
        let value = seconds - (now - timerStart)
        setTimerValue(value)
        if (value==0){
            clearInterval(timerInterval)
        }
    }, 1000);
}
