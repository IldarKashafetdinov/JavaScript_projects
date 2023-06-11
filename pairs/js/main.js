import Card from "./card.js";

const gameField = document.getElementById('game');
const startBtn = document.querySelector('.start__btn');
const qtyCards = document.querySelector('.qty__cards');
const qtyCardsBtn = document.querySelectorAll('.qty__btn');
let qtyCardsResult;
const reply = document.querySelector('.reply__btn');
const congratContainer = document.querySelector('.congrat__container');
const congratContent = document.querySelector('.congrat__text').textContent;
let timeout = 500;


startBtn.addEventListener('click', function() {
    startBtn.classList.add('none');
    qtyCards.classList.remove('none');
})


qtyCardsBtn.forEach(function(item) {
    item.addEventListener('click', () => {
        qtyCardsResult = Number(item.textContent);
        document.querySelector('.text').classList.add('none');
        qtyCards.classList.add('none');
        newGame(gameField, qtyCardsResult);
    })
})




function newGame(container, cardsCount) {
    let cardsNumberArray = [];
    let cardsArray = [];
    let firstCard = null;
    let secondCard = null;


    for (let i = 1; i <= cardsCount / 2; i++) {
        cardsNumberArray.push(i);
        cardsNumberArray.push(i)
    }

    cardsNumberArray = cardsNumberArray.sort(() => Math.random() - 0.5);

    for (const cardNumber of cardsNumberArray) {
        cardsArray.push(new Card(container, cardNumber, flip));
    }

    function flip(card) {
        if (firstCard !== null && secondCard !== null) {
            if (firstCard.number !== secondCard.number) {
                firstCard.open = false;
                secondCard.open = false;
                firstCard = null;
                secondCard = null;
            }
        }


        if (firstCard === null) {
            firstCard = card;
        } else {
            if (secondCard == null) {
                secondCard = card;
            }
        }

        if (firstCard !== null && secondCard !== null) {
            if (firstCard.number === secondCard.number) {
                firstCard.success = true;
                secondCard.success = true;
                firstCard = null;
                secondCard = null;
            }
        }

        if (document.querySelectorAll('.card.success').length === cardsNumberArray.length) {
            fireCongrat(congratContent.split(''));

            setTimeout(function () {
                document.querySelector('.reply__container').append(document.querySelector('.reply__btn'));
                document.querySelector('.reply__btn').classList.remove('none');
            }, 2000);

            
            reply.addEventListener('click', () => {
                location.reload();
            })
        }
    }
}


function fireCongrat(list) {
    for (let i = 0; i < list.length; i++) {
        setTimeout(function () {
            congratContainer.append(list[i]);
        }, timeout)
        timeout = timeout + 50;
    } 
}
