// submit or click ????

const button = document.getElementById('toggleButton');
const header = document.getElementById('header');
const timeDisplay = document.getElementById('timeEvent');
let formattedTime = '';

function getTimeEvent() {
	let time = new Date();

	formattedTime = time.toLocaleString('uk-UA', {
		day: '2-digit',
		month: '2-digit',
		year: 'numeric',
		hour: '2-digit',
		minute: '2-digit',
		second: '2-digit',
		hour12: false,
	});
}

window.addEventListener('DOMContentLoaded', () => {
	const savedTheme = localStorage.getItem('theme');
	const savedTime = localStorage.getItem('formattedTime');
	if (savedTheme && savedTime) {
		toggleTheme(savedTheme, savedTime);
	}

	console.log('savedTime', savedTime);
	console.log('savedTheme', savedTheme);
});

function storeInLocalStorage(theme, formattedTime) {
	localStorage.setItem('theme', theme);
	localStorage.setItem('formattedTime', formattedTime);
	console.log('theme', theme);
	console.log('formattedTime', formattedTime);
}

button.addEventListener('click', () => {
	const newTheme =
		document.body.style.backgroundColor === 'black' ? 'white' : 'black';
	getTimeEvent();
	storeInLocalStorage(newTheme, formattedTime);
	toggleTheme(newTheme, formattedTime);
});

function toggleTheme(color, time) {
	document.body.style.backgroundColor = color;
	if (color === 'black') {
		button.style.backgroundColor = 'white';
		button.style.color = 'black';
		button.textContent = 'Turn on';
		header.textContent = '🌙';
		timeDisplay.style.color = 'white';
		timeDisplay.textContent = `Last turn off: ${time}`;
	} else {
		button.style.backgroundColor = 'black';
		button.style.color = 'white';
		button.textContent = 'Turn off';
		header.textContent = '💡';
		timeDisplay.style.color = 'black';
		timeDisplay.textContent = `Last turn on: ${time}`;
	}
}
