const taskForm = document.getElementById('task-form');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');
document.addEventListener('DOMContentLoaded', loadTasks);
taskForm.addEventListener('submit', addTask);
function addTask(e) {
    e.preventDefault();
    const task = taskInput.value.trim();
    if (task === '') return;

    addTaskToDOM(task);
    storeTaskInLocalStorage(task);
    taskInput.value = '';
}
function addTaskToDOM(task) {
    const li = document.createElement('li');
    li.textContent = task;

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.className = 'delete';
    deleteBtn.onclick = removeTask;

    li.appendChild(deleteBtn);
    taskList.appendChild(li);
}
function removeTask(e) {
    const li = e.target.parentElement;
    taskList.removeChild(li);

    removeTaskFromLocalStorage(li.textContent);
}
function storeTaskInLocalStorage(task) {
    let tasks;
    if (localStorage.getItem('tasks') === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}
function loadTasks() {
    let tasks;
    if (localStorage.getItem('tasks') === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.forEach(task => addTaskToDOM(task));
}
function removeTaskFromLocalStorage(task) {
    let tasks = JSON.parse(localStorage.getItem('tasks'));
    tasks = tasks.filter(t => t !== task.replace('Delete', '').trim());
    localStorage.setItem('tasks', JSON.stringify(tasks));
}
