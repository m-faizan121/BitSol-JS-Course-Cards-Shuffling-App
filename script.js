'use strict';

const min = 1;
const max = 52;

function getRandomCardNumber() {
    return parseInt(Math.random() * (max - min) + min);
}

const showBackCards = function(n) {
    let cardImages = document.querySelector(".card-view").children;
    // For 1 card
    if(n > -1) {
        if(n%2 == 0)
            cardImages[n].children[0].src = 'cards/b2fv.png';
        else
            cardImages[n].children[0].src = 'cards/backCard.png';
        return;
    }
    // For all cards
    for(let i=0; i<cardImages.length; i++)
    {
        if(i%2 == 0)
            cardImages[i].children[0].src = 'cards/b2fv.png';
        else
            cardImages[i].children[0].src = 'cards/backCard.png';
    }
}

const shuffle = function() {
    let cardImages = document.querySelector(".card-view").children;
    for(let i=0; i<cardImages.length; i++)
    {
        const cardNo = getRandomCardNumber();
        const path = `cards/${cardNo}.png`;
        cardImages[i].children[0].src = path;
    }
}

const changeCard = function(n) {
    let cardImages = document.querySelector(".card-view").children;
    const cardNo = getRandomCardNumber();
    const path = `cards/${cardNo}.png`;
    cardImages[n].children[0].src = path;
       
}

document.querySelector(".shuffle").addEventListener('click', function(e) {
    setTimeout(showBackCards(-1), 300); // Change slowly in 3ms
    setTimeout(shuffle, 600); // // Change slowly in 3ms
});

document.querySelector(".card-view").addEventListener('click', function(e){
    let n = 0;
    let cn = e.target.classList[0];
    if(cn === "c1" || cn === "c2" || cn === "c3" || cn === "c4"){
      switch(e.target.classList[0])
            {
                case "c1":
                    n = 1;
                    break;
                case "c2":
                    n = 2;
                    break;
                case "c3":
                    n = 3;
                    break;
                case "c4":
                    n = 4;
                    break;
            }
        
        changeCard(n-1);
    }
});

document.querySelector(".hide").addEventListener('click', function(e) {
    setTimeout(showBackCards(-1), 300); // Change slowly in 3ms
});