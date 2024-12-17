'use strict';

/* hw07: Parsing function


Task 1: Напишіть функцію detonatorTimer(delay) використовуючи setInterval  
Вона виводить в консоль число кожну секунду, починаючи з delay (ціле число) і в кінці замість 0 виведе 'BOOM!'
*/

let interval1k = 1000;
let interval4k = 4000;
let interval8k = 8000;
let interval9k = 9000;
let interval10k = 10000;

detonatorTimer(3);
// 3
// 2
// 1
// BOOM!

function detonatorTimer(from) {
	let current = from;
	const delay = 1000;

	let timerId = setInterval(() => {
		if (current <= current) {
			console.log(current--);
		} else {
			clearInterval(timerId);
			console.log(current--);
			console.log('boom');
		}
	}, delay);
}
// function detonatorTimer(delay) {
// 	let current = delay;

// 	let timerId = setInterval(function () {
// 		console.log(current);
// 		current--;
// 		if (current === 0) {
// 			clearInterval(timerId);
// 			console.log('BOOm!');
// 		} else {
// 			console.log('BOOm!');
// 		}
// 	}, 1000);
// }

/* 


Task 2:  Напишіть функцію detonatorTimer(delay) використовуючи вкладений setTimeout  
Вона виводить в консоль число кожну секунду, починаючи з delay (ціле число) і в кінці замість 0 виведе 'BOOM!'
*/

// detonatorTimer2(3);
// // 3
// // 2
// // 1
// // BOOM!

// function detonatorTimer2(delay) {
// 	let current = delay;

// 	setTimeout(function boom() {
// 		console.log(current);
// 		if (current > 1) {
// 			current--;
// 			setTimeout(boom, 1200);
// 		} else {
// 			console.log('BOOM!');
// 		}
// 	}, interval4k);
// }

/* 


Task 3: Напишіть об'єкт в якому опишіть свої довільні властивості та довільні методи що ці властивості виводять. 
Можете описати скільки хочете властивостей і не менше 2 методів.
*/

// let cat = {
// 	name: 'Moloko',
// 	color: 'orange',
// 	age: 5,
// 	gender: 'female',
// 	minSleepTimeHours: 16,
// 	damagesStuff: true,
// 	hunts: false,

// 	describe() {
// 		return `Опис піддослідного: ${this.name} — це ${
// 			this.gender === 'female' ? 'кішка' : 'кіт'
// 		}, віком ${this.age} років, має ${this.color} колір шерсті. ${
// 			this.damagesStuff === true ? 'Псує речі.' : 'Не псує речі.'
// 		} ${this.hunts === true ? 'Любить полювати.' : 'Не любить полювати.'}`;
// 	},

// 	increaseAge() {
// 		this.age++;
// 		return `${this.name} подорослішала і тепер ${
// 			this.gender === 'female' ? 'їй' : 'йому'
// 		} ${this.age} років `;
// 	},

// 	changeSleepTime(newTime) {
// 		this.minSleepTimeHours = newTime;
// 		return `${this.name} тепер спить мінімум ${this.minSleepTimeHours} годин на день`;
// 	},
// };

// console.log('Task 7.3:');
// console.log(cat.describe());
// console.log(cat.increaseAge());
// console.log(cat.changeSleepTime(20));

// /*

// Task 4: А тепер зробіть всі свої методи з попередньої задачі прив'язаними до контексту свого об'єкту
// Аби вони були захищені від перезапису об'єкту і їх можна було викликати в таймері:
// */

// let securedDescribe = cat.describe.bind(cat);
// let securedIncreaseAge = cat.increaseAge.bind(cat);
// let securedChangeSleepTime = cat.changeSleepTime.bind(cat);

// setTimeout(() => console.log('Task 7.4:', securedDescribe()), interval8k);
// setTimeout(() => console.log(securedIncreaseAge()), interval9k);
// setTimeout(() => console.log(securedChangeSleepTime(30)), interval10k);

// /*

// Task 5: Напишіть функцію-декоратор яка вповільнює виконання довільної функції на вказану кількість секунд.
// */
// function calculateWorkingDaysAndWeekends(startDate, endDate) {
// 	let workingDays = 0;
// 	let weekends = 0;

// 	let start = new Date(startDate);
// 	let end = new Date(endDate);

// 	while (start <= end) {
// 		let day = start.getDay();

// 		if (day === 0 || day === 6) {
// 			weekends++;
// 		} else {
// 			workingDays++;
// 		}

// 		start.setDate(start.getDate() + 1);
// 	}

// 	return { workingDays, weekends };
// }

// function slower(func, seconds) {
// 	return function (startDate, endDate) {
// 		setTimeout(() => {
// 			const result = func(startDate, endDate);
// 			console.log(
// 				`
// 				Task 7.5: Working Days: ${result.workingDays}, Weekends: ${result.weekends}`
// 			);
// 		}, seconds * 1000);
// 	};
// }

// let slowedSomeFunction = slower(calculateWorkingDaysAndWeekends, 10);

// slowedSomeFunction('2024-12-09', '2024-12-15');