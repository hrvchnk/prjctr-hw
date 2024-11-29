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

function sortedInitials(names) {
	return names.map(getInitials).sort();
}
const initials = sortedInitials(usersFullNameList);

console.log('Initials: ', initials);
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
