// Функція для обчислення
function calculateDateRange(startDate, endDate, rangeType) {
	if (startDate > endDate) {
		alert('Error: startDate > endDate');
		return null;
	}

	const diffInMs = Math.abs(endDate - startDate);
	switch (rangeType) {
		case 'seconds':
			return `${Math.floor(diffInMs / 1000)} seconds`;
		case 'minutes':
			return `${Math.floor(diffInMs / (1000 * 60))} minutes`;
		case 'hours':
			return `${Math.floor(diffInMs / (1000 * 60 * 60))} hours`;
		case 'days':
			return `${Math.floor(diffInMs / (1000 * 60 * 60 * 24))} days`;
		default:
			return 'Error';
	}
}

// Список для результатів
const resultList = document.querySelector('.result-list');

// Збереження в локальне сховище
function storeResultInLocalStorage(result) {
	const results = getResultsFromLocalStorage();
	results.push(result);
	saveResultsToLocalStorage(results);
}

function getResultsFromLocalStorage() {
	return JSON.parse(localStorage.getItem('results')) || [];
}

function saveResultsToLocalStorage(results) {
	localStorage.setItem('results', JSON.stringify(results));
}

// Додавання результату в список
function createResultElement(result) {
	const li = document.createElement('li');
	li.className = 'result-item';

	const resultText = document.createElement('span');
	resultText.textContent = result;

	li.appendChild(resultText);
	resultList.appendChild(li);
}

// Функція для очищення результатів
function clearResults() {
	// Видаляємо всі елементи зі списку
	resultList.innerHTML = '';

	// Очищаємо локальне сховище
	localStorage.removeItem('results');

	// Скидаємо останній результат
	updateLastResult(null);
}

// Оновлення останнього результату
function updateLastResult(result) {
	const lastResultSpan = document.getElementById('last-result');
	lastResultSpan.textContent = result || 'No results yet';
}

// Завантаження результатів при старті
document.addEventListener('DOMContentLoaded', () => {
	const results = getResultsFromLocalStorage();
	results.forEach(createResultElement);

	// Оновлення останнього результату з локального сховища
	const lastResult = results[results.length - 1];
	updateLastResult(lastResult);
});

// Обробка кнопок
document.querySelectorAll('.result-button').forEach(button => {
	button.addEventListener('click', function () {
		const rangeType = this.dataset.range || this.textContent.toLowerCase();

		const form = document.getElementById('form');
		const formData = new FormData(form);
		const data = Object.fromEntries(formData.entries());

		// Перетворення дат
		const startDate = new Date(data['start-date']);
		const endDate = new Date(data['end-date']);

		if (isNaN(startDate) || isNaN(endDate)) {
			alert('Please select valid dates.');
			return;
		}

		const result = calculateDateRange(startDate, endDate, rangeType);
		if (result && result !== 'Error') {
			createResultElement(result);
			storeResultInLocalStorage(result);
			updateLastResult(result);
		}
	});
});

// Додавання обробника для очищення результатів
document.getElementById('clear-button').addEventListener('click', clearResults);
