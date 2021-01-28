const inputTask = document.querySelector('.input-task');
const btnTask = document.querySelector('.btn-task');
const tasks = document.querySelector('.tasks');

clearInput();
addSalvedTasks();

// Cria elemento <li>
function createLi() {
    const li = document.createElement('li');
    return li;
}

// Botão limpar
function btnClearTask(task) {
    const btn = document.createElement('button');
    btn.innerText = 'Apagar';
    btn.setAttribute('class', 'apagar')
    task.appendChild(btn);
}

// lança elemento <li> na <ul>, ou seja, cria tarefas na nossa lista
function createTask(text) {
    const task = createLi();
    btnClearTask(task);
    task.innerHTML += ` ${text}`;
    tasks.appendChild(task);
    clearInput()
    saveTasks();
}

// limpar input
function clearInput() {
    inputTask.value = '';
    inputTask.focus();
}

//evento de pressionar o ENTER
inputTask.addEventListener('keypress', (e) => {
    if (e.keyCode === 13) {
        if (!inputTask.value) return;
        createTask(inputTask.value);
    }
});

// evendo de click no botão para adicionar tarefa "createTask(text)"
btnTask.addEventListener('click', function () {
    if (!inputTask.value) return;
    createTask(inputTask.value);
});

document.addEventListener('click', (e) => {
    const element = e.target;
    if (element.classList.contains('apagar')) {
        element.parentElement.remove();
        saveTasks();
    }
});

// Salvando Lista no Local Storage
function saveTasks() {
    const lis = tasks.querySelectorAll('li');
    const taskList = [];

    for (let task of lis) {
        let taskText = task.innerText;
        taskText = taskText.replace('Apagar', '').trim();
        taskList.push(taskText);
    }

    const taskJSON = JSON.stringify(taskList);
    localStorage.setItem('tasks', taskJSON);
}

// Pegando Tarefas salvas no Local Storage
function addSalvedTasks() {
    localStorage.getItem('tasks');
    const tasks = localStorage.getItem('tasks');
    const taskList =  JSON.parse(tasks);

    for (let task of taskList) {
        createTask(task);
    }
}