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

	createSingleTaskElement(taskInput.value);
	storeTaskInLocalStorage(tasks.taskInput);
	taskInput = '';
});

function createSingleTaskElement(taskInput) {
	const li = document.createElement('li');
	li.appendChild(document.createTextNode(taskInput));
	taskList.appendChild(li);
}

function storeTaskInLocalStorage(task) {
	const tasks =
		localStorage.getItem('tasks') !== null
			? JSON.parse(localStorage.getItem('tasks'))
			: [];
	tasks.push(task);
	localStorage.setIem('tasks', JSON.stringify(tasks));
}

document.addEventListener('DOMContentLoaded', () => {
	const task =
		localStorage.getItem('tasks') !== null
			? JSON.parse(localStorage.getItem('tasks'))
			: [];

	task.forEach(task => {
		createSingleTaskElement(task);
	});
});
