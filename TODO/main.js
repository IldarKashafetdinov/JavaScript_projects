const container = document.querySelector('#container');

const tasksWrapper = document.createElement('div');
const heading = document.createElement('h2');
const todoList = document.createElement('ul');
const do1 = document.createElement('li');
const do2 = document.createElement('li');
const do3 = document.createElement('li');

const todoForm = document.createElement('form');
const input = document.createElement('input');
const btn = document.createElement('button');

heading.textContent = 'Список задач';
do1.textContent = 'Купить хлеб';
do2.textContent = 'Убраться';
do3.textContent = 'Вынести мусор';
btn.textContent = 'Добавить задачу'
btn.classList.add('btn');
input.classList.add('border');
do1.classList.add('mb');
do2.classList.add('mb');
do3.classList.add('mb');


container.append(tasksWrapper);
tasksWrapper.append(heading);
tasksWrapper.append(todoList);
todoList.append(do1);
todoList.append(do2);
todoList.append(do3);
container.append(todoForm);
todoForm.append(input);
todoForm.append(btn);



input.setAttribute('type', 'text');
input.setAttribute('placeholder', 'Введите задачу');
btn.setAttribute('type', 'submit');


btn.disabled = !input.value.length;
input.addEventListener('input', function() {
    btn.disabled = !input.value.length;
})



todoForm.addEventListener('submit', formHandler);

function formHandler(e) {
    e.preventDefault();
    
    const taskText = input.value;

    const newTask = document.createElement('li');
    newTask.textContent = taskText;
    


    const deleteBtn = document.createElement('button');
    deleteBtn.setAttribute('role', 'button');
    deleteBtn.innerText = 'Удалить задачу';
    deleteBtn.style['margin-left'] = '45px';
    deleteBtn.classList.add('delete__btn');
    newTask.style['margin-bottom'] = '15px';
    newTask.append(deleteBtn);
    
    deleteBtn.addEventListener('click', function () {
        this.closest('li').remove();
    });


    todoList.append(newTask);

    // Очиcтить поле ввода
    input.value = '';

    //Оставить фокус на поле ввода
    input.focus();

    btn.disabled = true;
}
