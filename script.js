const body = document.querySelector('body');
const main = document.createElement('main');
main.classList.add('main');
// body.appendChild(main);

h1 = document.createElement('h1');
h1.textContent = 'To-Do List By Basheer with JS';
h1.classList.add('title');
body.appendChild(h1);


const form = document.createElement('form');
form.classList.add('form');
// main.appendChild(form);

const input = document.createElement('input');
input.setAttribute('type', 'text');
input.setAttribute('placeholder', 'Add a new task...');
input.classList.add('input');
// form.appendChild(input);

const button = document.createElement('button');
button.setAttribute('type', 'submit');
button.textContent = 'Add';
button.classList.add('button');
// form.appendChild(button);
form.append(input, button);

const ul = document.createElement('ul');
ul.classList.add('task-list');
main.append(form, ul);

body.appendChild(main);

function addTask(event) {
    event.preventDefault();
    const taskText = input.value.trim();
    if (taskText !== '') {
        const li = document.createElement('li');
        li.classList.add('task-item');
        li.textContent = taskText;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('delete-button');
        deleteButton.addEventListener('click', () => {
            ul.removeChild(li);
        });

        li.appendChild(deleteButton);
        ul.appendChild(li);
        input.value = '';
    }
}

form.addEventListener('submit', addTask);
