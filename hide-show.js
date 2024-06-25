function hide(element, transition = true){
    if (element instanceof NodeList || element instanceof Array){
        for (let i = 0; i < element.length; i++) {
            hide(element[i], transition)
    } return }
    element.style.opacity = '0'
    if (transition){
        element.style.transition = 'all .3s'
        setTimeout(function(){ element.style.display = 'none' }, 300);
    }
    else {
        element.style.transition = 'none'
        element.style.display = 'none'
    }
}

function show(element, transition = true){
    if (element instanceof NodeList || element instanceof Array){
        for (let i = 0; i < element.length; i++) {
            show(element[i], transition)
    } return }
    if (transition){ element.style.transition = 'all .3s' }
    else { element.style.transition = 'none' }
    element.style.opacity = '0'
    element.style.removeProperty('display')
    setTimeout(function(){
        element.style.opacity = '1'
    }, 0)
}
