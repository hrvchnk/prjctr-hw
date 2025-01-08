'use strict';

const taskInput = document.querySelector('.task-input');
const form = document.querySelector('.create-task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filterInput = document.querySelector('.filter-input');

form.addEventListener('submit', event => {
	event.preventDefault();

	if (taskInput.value.trim() === '') {
		return;
	}

	const task = {
		id: crypto.randomUUID(),
		text: taskInput.value.trim(),
	};

	createSingleTaskElement(task);
	storeTaskInLocalStorage(task);
	taskInput.value = '';
});

function createSingleTaskElement(task) {
	const li = document.createElement('li');
	li.className = 'task-item';
	li.dataset.id = task.id;

	const taskText = document.createElement('span');
	taskText.textContent = task.text;

	const buttonsContainer = document.createElement('div');
	buttonsContainer.className = 'task-buttons';

	const editBtn = document.createElement('i');
	editBtn.className = 'fa fa-edit';
	editBtn.setAttribute('title', 'Редагувати');

	const deleteBtn = document.createElement('i');
	deleteBtn.className = 'fa fa-trash';
	deleteBtn.setAttribute('title', 'Видалити');

	editBtn.addEventListener('click', () => editTask(task.id));
	deleteBtn.addEventListener('click', () => deleteTask(task.id));

	buttonsContainer.appendChild(editBtn);
	buttonsContainer.appendChild(deleteBtn);

	li.appendChild(taskText);
	li.appendChild(buttonsContainer);

	taskList.appendChild(li);
}

function editTask(taskId) {
	const taskElement = document.querySelector(`li[data-id='${taskId}']`);
	const span = taskElement.querySelector('span');

	const newText = prompt('Введіть новий текст завдання:', span.textContent);
	if (newText !== null && newText.trim() !== '') {
		span.textContent = newText;

		const tasks = getTasksFromLocalStorage();
		const task = tasks.find(t => t.id === taskId);
		if (task) {
			task.text = newText;
			saveTasksToLocalStorage(tasks);
		}
	}
}

function deleteTask(taskId) {
	const taskElement = document.querySelector(`li[data-id='${taskId}']`);
	taskElement.remove();

	const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
	const filteredTasks = tasks.filter(t => t.id !== taskId);
	localStorage.setItem('tasks', JSON.stringify(filteredTasks));
}

function getTasksFromLocalStorage() {
	return JSON.parse(localStorage.getItem('tasks')) || [];
}

function saveTasksToLocalStorage(tasks) {
	localStorage.setItem('tasks', JSON.stringify(tasks));
}

function storeTaskInLocalStorage(task) {
	const tasks = getTasksFromLocalStorage();
	tasks.push(task);
	saveTasksToLocalStorage(tasks);
}

document.addEventListener('DOMContentLoaded', () => {
	const tasks = getTasksFromLocalStorage();

	tasks.forEach(task => {
		createSingleTaskElement(task);
	});
});
