function hide(elements, complete = () => {}, transition = true) {
    if (elements instanceof Array) {
        const array = elements;
        elements = $();
        array.forEach((element) => {
            element = $(element);
            element.each((index, element) => {
                const $element = $(element);
                if ($element.is(':visible')) {
                    $.merge(elements, $element);
                }
            });
        });
    }
    if (transition) {
        $(elements).fadeOut(250, 'linear', complete);
    } else {
        $(elements).hide(0, (complete = complete));
    }
}

function show(elements, complete = () => {}, transition = true) {
    if (elements instanceof Array) {
        const array = elements;
        elements = $();
        array.forEach((element) => {
            element = $(element);
            element.each((index, element) => {
                const $element = $(element);
                if ($element.is(':hidden')) {
                    $.merge(elements, $element);
                }
            });
        });
    }
    if (transition) {
        $(elements).fadeIn(250, 'linear', complete);
    } else {
        $(elements).show(0, (complete = complete));
    }
}

function getRandomItem(arr) {
    const array = new Uint32Array(1);
    window.crypto.getRandomValues(array);
    const randomIndex = array[0] % arr.length;
    return arr[randomIndex];
}
