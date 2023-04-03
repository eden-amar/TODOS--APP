const addButton = document.querySelector('button');
const addTask = document.querySelector('.task-input');
const addUser = document.querySelector('.user-input');
const tbody = document.querySelector('tbody');


addButton.addEventListener('click', newTask);

async function newTask() {
    await fetch(`http://localhost:3000/api/todos`, {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ task: addTask.value, user: addUser.value})
    });
    window.location.reload() ;
}


async function getTodos() {
    const response = await fetch(`http://localhost:3000/api/todos`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    });

    const todos = await response.json();
    return todos;
}

async function todosTable() {
    let dataList = await getTodos();
    //return each object
    let table = document.querySelector('table');
    dataList.forEach((todo) => {
        let tr = createTable(todo);
        table.append(tr);
    });
}

function createTable(todoObject) {
    let tr = document.createElement('tr');
    for (const key in todoObject) {

        let td = document.createElement('td');
        td.textContent = todoObject[key];
        tr.append(td);

    }

    let tdCheckBox = document.createElement('td');
    let CheckBox = document.createElement('input');
    CheckBox.type = 'checkbox';

    let tdIcon = document.createElement('td');
    let icon = document.createElement('img');
    icon.src = './img/delete.png';
    icon.classList.add('trash-button');

    tdCheckBox.append(CheckBox);
    tdIcon.append(icon);

    tr.append(tdCheckBox, tdIcon);


    icon.addEventListener('click', () => {
        fetch(`http://localhost:3000/api/todos/${todoObject._id}`, {
            method: 'DELETE'
        })
        window.location.reload() ;
    });

    return tr;


}

todosTable();

//clock
function getTime() {
    let time = new Date();
    let clockHours = time.getUTCHours() + 2;

    time.setHours(clockHours);
    return time;
}

function showClock() {
    let clockDiv = document.querySelector('.clock');
    clockDiv.textContent = getTime().toLocaleTimeString();
    ;
}

function tick() {
    showClock();
    setTimeout(tick, 1000);
}

tick();

