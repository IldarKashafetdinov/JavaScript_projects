const container = document.querySelector('.container');
const counterElement = document.createElement('div');
const btnWrap = document.createElement('div');
const btnStart = document.createElement('button');
const btnPause = document.createElement('button');
const btnReset = document.createElement('button');

counterElement.textContent = 0;
btnStart.innerHTML = 'Старт';
btnPause.textContent = 'Пауза';
btnReset.textContent = 'Сброс';


btnWrap.append(btnStart);
btnWrap.append(btnPause);
btnWrap.append(btnReset);
container.append(counterElement);
container.append(btnWrap);



let counter = 0;
let timerId;


btnStart.onclick = function() {
    timerId = setInterval(function(){
        counter += 1;
        counterElement.innerText = counter;
    }, 1000)


    btnStart.setAttribute('disabled', 'true');
    btnStart.style['cursor'] = 'not-allowed';
    btnPause.style['cursor'] = 'pointer';

    counterElement.classList.add('green__color');
    counterElement.classList.remove('red__color');
    counterElement.classList.add('border__green');
    counterElement.classList.remove('border__red');
}

btnPause.onclick = function() {
    clearInterval(timerId);

    btnStart.removeAttribute('disabled');
    btnStart.style['cursor'] = 'pointer';
    btnPause.style['cursor'] = 'not-allowed';

    counterElement.classList.add('red__color');
    counterElement.classList.add('border__red');
}

btnReset.onclick = function() {
    counter = 0;
    counterElement.innerText = counter;
    clearInterval(timerId);


    btnStart.removeAttribute('disabled');
    btnStart.style['cursor'] = 'pointer';
    btnPause.style['cursor'] = 'pointer';
    btnPause.removeAttribute('disabled');

    counterElement.classList.remove('green__color');
    counterElement.classList.remove('red__color');
    counterElement.classList.remove('border__green');
    counterElement.classList.remove('border__red');
}


// Стилизация
container.classList.add('flex');
counterElement.classList.add('border');
counterElement.classList.add('blue__color');
counterElement.style['marginBottom'] = '60px';
counterElement.style['fontSize'] = '38px';
counterElement.style['paddingLeft'] = '20px';
counterElement.style['paddingRight'] = '20px';
btnStart.style['marginRight'] = '30px';
btnStart.style['color'] = 'green';
btnStart.style['border'] = '2px solid green';
btnPause.style['marginRight'] = '30px';
btnPause.style['color'] = 'red';
btnPause.style['border'] = '2px solid red';
btnReset.style['color'] = 'blue';
btnReset.style['border'] = '2px solid blue';

document.querySelectorAll('button').forEach(function(item) {
    item.style['backgroundColor'] = 'transparent';
    item.style['padding'] = '5px 10px';
    item.style['cursor'] = 'pointer';
    item.style['borderRadius'] = '10px';
})
