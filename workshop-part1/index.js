
'use strict'


const createIcon = (type) => {
    const icon = document.createElement('i');
    icon.classList = `fas ${type}`;
    return icon;
};


const createTaskElement = (title) => {
    const task = document.createElement('li');
    task.id = Date.now();
    const iconCircle = createIcon('fa-circle');
    const iconPen = createIcon('fa-pen');
    const iconTrash = createIcon('fa-trash');
    const actions = document.createElement('div');
    actions.classList = 'actions';
    actions.appendChild(iconPen);
    actions.appendChild(iconTrash);
    const text = document.createElement('p');
    text.classList = 'text';
    text.textContent = title;

    task.appendChild(iconCircle);
    task.appendChild(text);
    task.appendChild(text);
    task.appendChild(actions);
    return task

}



const tasksList = document.getElementById('tasks');

tasksList.appendChild(createTaskElement('Test task'));

const input = document.getElementById('input');
const button = document.getElementById('boton-enter');

button.addEventListener('click', () => {
    console.log(input.value)
    tasksList.appendChild(createTaskElement(input.value))
})

const trash = document.getElementById('trashing')
trash.addEventListener('click', () => {
    console.log(input.value)
    tasksList.removeChild(createTaskElement(input.value))
})