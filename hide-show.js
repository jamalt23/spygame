function hide(elements, complete = ()=>{}, transition = true){
    if (elements instanceof Array){
        let array = elements ; elements = $()
        array.forEach(element => {
            $.merge(elements, $(element))
        })
    }
    if (transition){
        $(elements).fadeOut(300, 'linear', complete)
    } else {
        $(elements).hide(0, complete = complete)
    }
}

function show(elements, complete = ()=>{}, transition = true){
    if (elements instanceof Array){
        let array = elements ; elements = $()
        array.forEach(element => {
            $.merge(elements, $(element))
        })
    }
    if (transition){
        $(elements).fadeIn(300, 'linear', complete)
    } else {
        $(elements).show(0, complete = complete)
    }
}
