'use strict';

/* hw05: Closure, spread syntax

Task 1: Напишіть функцію addThemAll
Вона буде знаходити суму усіх своїх аргументів незалежно від їх кількості (але без використання вбудованого об'єкту Math).
Використайте оператор розширення (spread)
*/
console.log('Task 1: SUM arg ');

function addThemAll(...args) {
	let sum = 0;
	for (let arg of args) sum += arg;
	return sum;
}

console.log(addThemAll(2, 4)); // 6
console.log(addThemAll(1, 2, 3, 4)); // 10
console.log(addThemAll(5, 5, 10)); // 20
/*



Task 2:  Задача на використання замикання. 
Напишіть функцію яка працює таким чином: multiply(a)(b)  // a * b
*/
console.log('Task 2: multiply(a)(b) ');

function multiply(a) {
	return function (b) {
		return a * b;
	};
}
console.log(multiply(5)(5)); // 25
console.log(multiply(2)(-2)); // -4
console.log(multiply(4)(3)); // 12
/* 



Task 3: Напишіть функцію яка буде використовуватись для сортування масиву фільмів 
Функція буде приймати два аргумента:
— властивість за якою треба посортувати. 
— опцію напрямку сортування (зростання чи спадання)
*/
console.log('Task 3: Sort');
const movies = [
	{
		movieName: 'The Thing',
		releaseYear: 1982,
		directedBy: 'Carpenter',
		runningTimeInMinutes: 109,
	},
	{
		movieName: 'Aliens',
		releaseYear: 1986,
		directedBy: 'Cameron',
		runningTimeInMinutes: 137,
	},
	{
		movieName: 'Men in Black',
		releaseYear: 1997,
		directedBy: 'Sonnenfeld',
		runningTimeInMinutes: 98,
	},
	{
		movieName: 'Predator',
		releaseYear: 1987,
		directedBy: 'McTiernan',
		runningTimeInMinutes: 107,
	},
];

console.log('releaseYear > :', movies.sort(byProperty('releaseYear', '>')));
// виведе масив фільмів посортованих по року випуску, від старішого до новішого
console.log(
	'duration < :',
	movies.sort(byProperty('runningTimeInMinutes', '<'))
);
// виведе масив фільмів посортованих по їх тривалості, від найдовшого до найкоротшого
console.log('name > :', movies.sort(byProperty('movieName', '>')));
// виведе масив фільмів посортованих по назві, в алфавітному порядку

// let cloneMovies = structuredClone(movies); // глибоке

function byProperty(property, direction) {
	return (a, b) => {
		const factor = direction === '>' ? -1 : 1;
		return (a[property] - b[property]) * factor;

		// or
		// if (direction === '>') {
		// 	return b[property] > a[property] ? -1 : b[property] < a[property] ? 1 : 0
		// } else {
		// 	return a[property] > b[property] ? -1 : a[property] < b[property] ? 1 : 0;
		// }
	};
}
/*



Task 4: Напишіть функцію яка відфільтрує масив унікальних значень
Рішення має працювати незалежно від конкретних значень в масиві імен
*/
console.log('Task 4: filter Unique Names');

const userNames = [
	'Петро',
	'Емма',
	'Петро',
	'Емма',
	'Марта',
	'Яна',
	'Василь',
	'Антон',
	'Олена',
	'Емма',
];

function filterUnique(array) {
	return array.filter((item, index) => array.indexOf(item) === index);
}

console.log(filterUnique(userNames)); // ['Петро', 'Емма', 'Марта', 'Яна', 'Василь', 'Антон', 'Олена'];
