'use strict';
/* hw04: Array

Task 1 - Задача на повернення ініціалів для кожного імені з масиву, посортованих в алфавітному порядку: Рішення має працювати незалежно від конкретних значень в масиві імен
*/

const usersFullNameList = [
	'Петрик Ольга Іванівна',
	'Гнатюк Петро Антонович',
	'Рудко Андрій Опанасович',
];

function getInitials(fullName) {
	return fullName
		.split(' ')
		.map(part => part[0] + '.')
		.join('');
}

function getSortedInitials(names) {
	return names.map(getInitials).sort();
}
const initials = getSortedInitials(usersFullNameList);

console.log('Initials: ', initials);

/* method 2
let initials = userNames.map(
	name =>
		name
			.split(' ') // розділення рядка на слова
			.filter(part => part.trim() !== '') // прибираємо зайві пробіли
			.map(part => part[0] + '.') // беремо першу букву і додаємо крапку
			.join('') // обєʼєднуємо в рядок
);

initials.sort();
*/

/* method 3
let initials = userNames
	.map(name => {
		const word = name.split(' ');
		const initials = parts.map(part => word[0]).join('.');
		return initials + '.';
	})
	.sort();

console.log(initials); // [ "Г.П.А.", "П.О.І.", "Р.А.О."]
*/

/* 


Task 2 - Задача на фільтрування масиву:
Реалізуйте фільтрування імен які починаються з голосної двома способами:
-через умовну конструкцію
-через вбудований метод масивів
*/

const userNames = [
	'Петро',
	'Емма',
	'Юстин',
	'Ілля',
	'Марта',
	'Яна',
	'Василь',
	'Антон',
	'Олена',
];

// 2.1
function filterVowelNames(name) {
	const vowels = ['а', 'е', 'є', 'и', 'і', 'ї', 'о', 'у', 'ю', 'я'];
	return name.filter(letter => vowels.includes(letter[0].toLowerCase()));
}

let filteredNames = filterVowelNames(userNames);

console.log('2.1: ', filteredNames);

// 2.2
function filterVowelNamesWithIf(shortName) {
	const result = [];
	for (let name of shortName) {
		if ('АЕЄИІЇОУЮЯ'.includes(name[0].toUpperCase())) {
			result.push(name);
		}
	}
	return result;
}
let filteredNamesWithIf = filterVowelNamesWithIf(userNames);
console.log('2.2: ', filteredNamesWithIf); // ['Емма', 'Юстин', 'Ілля', 'Яна', 'Антон', 'Олена']

/*


 Task 3 - Задача на розворот числа
 */
const currentMaxValue = 4589;

function convertValueStrToNumber(value) {
	return Number(value.toString().split('').reverse().join(''));
}
// function convertValueToString(value) {
// 	const valueString = value.toString();
// 	const valueStr = [];

// 	for (let i = 0; i < valueString.length; i++) {
// 		valueStr.push(valueString[i]);
// 	}
// 	return valueStr;
// }
// function reversedArray(value) {
// 	let valueStr = convertValueToString(value);
// 	return valueStr.reverse();
// }

// function convertValueStrToNumber(value) {
// 	let reversedArr = reversedArray(value);
// 	return Number(reversedArr.join(''));
// }

const reverseMaxValue = convertValueStrToNumber(currentMaxValue);
console.log('Reversed value: ', reverseMaxValue); //9854
console.log('typeof: ', typeof reverseMaxValue); //'number'

/*


 Task 4 - Задача на знаходження добутку масиву чисел з невідомою глибиною вкладеності
 */
const nestedArray = [1, 2, [3, [4]]];

function getFlattenArray(arr) {
	return arr.flat(Infinity);
}

function calculateArray(arr) {
	return getFlattenArray(arr).reduce((a, b) => a * b);
}
let productOfArray = calculateArray(nestedArray);

console.log(`Numbers: ${nestedArray} Product: ${productOfArray}`); //24
