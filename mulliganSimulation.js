function shuffle(array) {
    var i = array.length;
    while (i) {
        var j = Math.floor(Math.random() * i);
        var t = array[--i];
        array[i] = array[j];
        array[j] = t;
    }
    return array;
}

function doMulligan() {
    let cards = shuffle(Array.from(deck.deck.cards));
    let hands = [];
    let hands_ct = 0;
    while (hands_ct < 3) {
        hands.push(cards.shift());
        hands_ct++;
    }
    deck.$set(deck.simulation, 'hands', hands);
    let elements = document.getElementsByClassName('card-base');
    Array.from(elements).forEach((element, index) => {
        element.style.animationDelay = `${index * 0.2}s`;
        startAnimation(element);
    });
}

function removeMulliganAnimation() {
    let elements = document.getElementsByClassName('card-base');
    Array.from(elements).forEach(element => {
        element.classList.remove('fade-in');
    });
}

function addMulliganAnimation() {
    let elements = document.getElementsByClassName('card-base');
    Array.from(elements).forEach(element => {
        element.classList.add('fade-in');
    });
}

function startAnimation(element) {
    if (!element) return;
    var p = element.parentElement;
    var dummy = document.createElement("div");
    p.replaceChild(dummy, element);
    p.replaceChild(element, dummy);
}