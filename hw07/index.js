'use strict';

/* hw07: Parsing function


Task 1: Напишіть функцію detonatorTimer(delay) використовуючи setInterval  
Вона виводить в консоль число кожну секунду, починаючи з delay (ціле число) і в кінці замість 0 виведе 'BOOM!'
*/

detonatorTimer(3);
// 3
// 2
// 1
// BOOM!

function detonatorTimer(delay) {
	const interval = 1000;
	let current = delay;

	let timerId = setInterval(function () {
		if (current > 0) {
			console.log(current);
			current--;
		} else {
			console.log('BOOm!');
			clearInterval(timerId);
		}
	}, interval);
}

/* 


Task 2:  Напишіть функцію detonatorTimer(delay) використовуючи вкладений setTimeout  
Вона виводить в консоль число кожну секунду, починаючи з delay (ціле число) і в кінці замість 0 виведе 'BOOM!'
*/

detonatorTimer2(3);
// 3
// 2
// 1
// BOOM!

function detonatorTimer2(delay) {
	const interval = 5000;

	let current = delay;

	setTimeout(function boom() {
		console.log(current);
		if (current > 1) {
			current--;
			setTimeout(boom, 1000);
		} else {
			setTimeout(() => console.log('BOOM!'), 1000);
		}
	}, interval);
}

/* 


Task 3: Напишіть об'єкт в якому опишіть свої довільні властивості та довільні методи що ці властивості виводять. 
Можете описати скільки хочете властивостей і не менше 2 методів.
*/

let cat = {
	name: 'Moloko',
	color: 'orange',
	age: 5,
	gender: 'female',
	minSleepTimeHours: 16,
	damagesStuff: true,
	hunts: false,

	describe() {
		return `Опис піддослідного: ${this.name} — це ${
			this.gender === 'female' ? 'кішка' : 'кіт'
		}, віком ${this.age} років, має ${this.color} колір шерсті. ${
			this.damagesStuff === true ? 'Псує речі.' : 'Не псує речі.'
		} ${this.hunts === true ? 'Любить полювати.' : 'Не любить полювати.'}`;
	},

	increaseAge() {
		this.age++;
		return `${this.name} подорослішала і тепер ${
			this.gender === 'female' ? 'їй' : 'йому'
		} ${this.age} років `;
	},

	changeSleepTime(newTime) {
		this.minSleepTimeHours = newTime;
		return `${this.name} тепер спить мінімум ${this.minSleepTimeHours} годин на день`;
	},
};

console.log('Task 7.3:');
console.log(cat.describe());
console.log(cat.increaseAge());
console.log(cat.changeSleepTime(20));

/*

Task 4: А тепер зробіть всі свої методи з попередньої задачі прив'язаними до контексту свого об'єкту
Аби вони були захищені від перезапису об'єкту і їх можна було викликати в таймері:
*/
const interval8k = 9000;
const interval9k = 10000;
const interval10k = 11000;

let securedDescribe = cat.describe.bind(cat);
let securedIncreaseAge = cat.increaseAge.bind(cat);
let securedChangeSleepTime = cat.changeSleepTime.bind(cat);

setTimeout(() => console.log('Task 7.4:', securedDescribe()), interval8k);
setTimeout(() => console.log(securedIncreaseAge()), interval9k);
setTimeout(() => console.log(securedChangeSleepTime(30)), interval10k);

/*

Task 5: Напишіть функцію-декоратор яка вповільнює виконання довільної функції на вказану кількість секунд.
*/
function calculateWorkingDaysAndWeekends(startDate, endDate) {
	let workingDays = 0;
	let weekends = 0;

	let start = new Date(startDate);
	let end = new Date(endDate);

	while (start <= end) {
		let day = start.getDay();

		if (day === 0 || day === 6) {
			weekends++;
		} else {
			workingDays++;
		}

		start.setDate(start.getDate() + 1);
	}

	return { workingDays, weekends };
}

function slower(func, seconds) {
	return function (startDate, endDate) {
		setTimeout(() => {
			const result = func(startDate, endDate);
			console.log(
				`
				Task 7.5: Working Days: ${result.workingDays}, Weekends: ${result.weekends}`
			);
		}, seconds * 1000);
	};
}

let slowedSomeFunction = slower(calculateWorkingDaysAndWeekends, 10);

slowedSomeFunction('2024-12-09', '2024-12-15');
