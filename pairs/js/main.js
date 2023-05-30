import Card from "./card.js";

const gameField = document.getElementById('game');
const startBtn = document.querySelector('.start__btn');
const qtyCards = document.querySelector('.qty__cards');
const qtyCardsBtn = document.querySelectorAll('.qty__btn');
let qtyCardsResult;
const reply = document.querySelector('.reply__btn');


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
            setTimeout(function () {
                document.querySelector('.congrat__container').append(document.querySelector('.span1'));
                document.querySelector('.span1').classList.remove('none');
            }, 300);
            
            setTimeout(function () {
                document.querySelector('.congrat__container').append(document.querySelector('.span2'));
                document.querySelector('.span2').classList.remove('none');
            }, 350);
            
            setTimeout(function () {
                document.querySelector('.congrat__container').append(document.querySelector('.span3'));
                document.querySelector('.span3').classList.remove('none');
            }, 400);
            
            setTimeout(function () {
                document.querySelector('.congrat__container').append(document.querySelector('.span4'));
                document.querySelector('.span4').classList.remove('none');
            }, 450);
            
            setTimeout(function () {
                document.querySelector('.congrat__container').append(document.querySelector('.span5'));
                document.querySelector('.span5').classList.remove('none');
            }, 500);
            
            setTimeout(function () {
                document.querySelector('.congrat__container').append(document.querySelector('.span6'));
                document.querySelector('.span6').classList.remove('none');
            }, 550);
            
            setTimeout(function () {
                document.querySelector('.congrat__container').append(document.querySelector('.span7'));
                document.querySelector('.span7').classList.remove('none');
            }, 600);
            
            setTimeout(function () {
                document.querySelector('.congrat__container').append(document.querySelector('.span8'));
                document.querySelector('.span8').classList.remove('none');
            }, 650);
            
            setTimeout(function () {
                document.querySelector('.congrat__container').append(document.querySelector('.span9'));
                document.querySelector('.span9').classList.remove('none');
            }, 700);
            
            setTimeout(function () {
                document.querySelector('.congrat__container').append(document.querySelector('.span10'));
                document.querySelector('.span10').classList.remove('none');
            }, 750);
            
            setTimeout(function () {
                document.querySelector('.congrat__container').append(document.querySelector('.span11'));
                document.querySelector('.span11').classList.remove('none');
            }, 800);
            
            setTimeout(function () {
                document.querySelector('.congrat__container').append(document.querySelector('.span12'));
                document.querySelector('.span12').classList.remove('none');
            }, 850);
            
            setTimeout(function () {
                document.querySelector('.congrat__container').append(document.querySelector('.span13'));
                document.querySelector('.span13').classList.remove('none');
            }, 900);
            
            setTimeout(function () {
                document.querySelector('.congrat__container').append(document.querySelector('.span14'));
                document.querySelector('.span14').classList.remove('none');
            }, 950);

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
