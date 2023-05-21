import Worker from "./worker.js";


const workers = [
    new Worker('Игорь', 'Фролов', 'Сергеевич', 2011, new Date(1992, 0, 21), 'Юрист'),
    new Worker('Алесандр', 'Александров', 'Алесандрович', 2022, new Date(2000, 4, 11), 'Бухгалтер'),
    new Worker('Иван', 'Иванов', 'Сергеевич', 1998, new Date(1980, 1, 23), 'Строитель')
]


const $workersTable = document.getElementById('workers_list');
const $workersListTHAll = document.querySelectorAll('th');

let column = 'number' // переменные для сортировки таблицы(Стандартные параметры сортировки)
let columnDir = true


function addWorkerTR(worker) {
    const $workerTR = document.createElement('tr');
    const $fioTD = document.createElement('td');
    const $birthDateTD = document.createElement('td');
    const $workStartTD = document.createElement('td');
    const $postTD = document.createElement('td');

    $fioTD.textContent = worker.fio
    $birthDateTD.textContent = `${worker.getBirthDate()} (${worker.getAge()})`;
    $workStartTD.textContent = `${worker.workStart} (${worker.getWorkPeriod()})`;
    $postTD.textContent = worker.post;


    $workerTR.append($fioTD);
    $workerTR.append($birthDateTD);
    $workerTR.append($workStartTD);
    $workerTR.append($postTD);

    return $workerTR;
}




function getSortWorkers(prop, dir) { //prop - свойство по которому сравниваем   dir - направление(возраст или убывание)
    const workersCopy = [...workers];
    return workersCopy.sort(function(workerA, workerB) {
        if ((!dir == false ? workerA[prop] < workerB[prop] : workerA[prop] > workerB[prop]))
        return -1;
    })
}




function render() {
    let workersCopy = [...workers]; // скопировать список

    workersCopy = getSortWorkers(column, columnDir)


    $workersTable.innerHTML = '';

    for (const worker of workersCopy) {
        $workersTable.append(addWorkerTR(worker));
    }
}



// Клик сортировки
$workersListTHAll.forEach(element => {
    element.addEventListener('click', function() {
        column = this.dataset.column;
        columnDir = !columnDir;
        render();
    })
})

// const array = document.querySelectorAll('.button_th_svg')

// array.forEach(element => {
//     element.addEventListener('click', function() {
//         element.classList.toggle('rotate');
//     })
// })


// Добавление сотрудника в таблицу

document.getElementById('add-worker').addEventListener('submit', function(e) {
    e.preventDefault();

    workers.push(new Worker(
        document.getElementById('input-name').value,
        document.getElementById('input-surename').value,
        document.getElementById('input-lastname').value,
        Number(document.getElementById('input-workStart').value),
        new Date(document.getElementById('input-birthDate').value),
        document.getElementById('input-post').value
    ))

    render();

})

render();
