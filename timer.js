var timer = document.querySelector('#timer')
var timerContainer = timer.parentElement

function setTimerValue(value){
    let minutes = Math.floor(value/60)
    let seconds = value - minutes*60
    if (String(minutes).length==1){
        minutes = `0${minutes}`
    }
    if (String(seconds).length==1){
        seconds = `0${seconds}`
    }
    timer.innerHTML = `${minutes}:${seconds}`
}

function startTimer(seconds, endfunc=()=>{}){
    setTimerValue(seconds)
    try{
        clearInterval(timerInterval)
    } catch(e) {}
    timerStart = Math.round(Date.now() / 1000);
    timerInterval = setInterval(() => {
        let now = Math.round(Date.now() / 1000);
        let value = seconds - (now - timerStart)
        setTimerValue(value)
        if (value>seconds){
            startTimer(seconds, endfunc)
        }
        if (value<1){
            setTimerValue(0)
            clearInterval(timerInterval)
            endfunc()
        }
    }, 1000);
}
