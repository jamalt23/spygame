function hide(elements, complete = ()=>{}, transition = true){
    if (elements instanceof Array){
        const array = elements ; elements = $()
        array.forEach(element => {
            $.merge(elements, $(element))
        })
    }
    if (transition){
        $(elements).fadeOut(250, 'linear', complete)
    } else {
        $(elements).hide(0, complete = complete)
    }
}

function show(elements, complete = ()=>{}, transition = true){
    if (elements instanceof Array){
        const array = elements ; elements = $()
        array.forEach(element => {
            $.merge(elements, $(element))
        })
    }
    if (transition){
        $(elements).fadeIn(250, 'linear', complete)
    } else {
        $(elements).show(0, complete = complete)
    }
}
