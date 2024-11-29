'use strict';
/* hw05: Obj 

Task 1 - Обчислення різниці часу
Напишіть функцію яка буде буде приймати 3 параметри
— початкову дату (string)
— кінцеву дату (string)
— розмірність ('days',  'hours', 'minutes', seconds)

Функція повертатиме часовий період між цими датами згідно розмірності.
Також вкажіть значення по замовчуванню для всіх цих параметрів (на ваш вибір).
Функція має коректно працювати навіть якщо початкова дата пізніше ніж кінцева дата.
*/

function durationBetweenDates(
	date1 = '1995-07-25',
	date2 = '2024-11-23',
	option = 'days'
) {
	const d1 = new Date(date1);
	const d2 = new Date(date2);

	const diffInMs = Math.abs(d2 - d1);

	switch (option) {
		case 'seconds':
			return `${diffInMs / 1000} seconds`;
		case 'minutes':
			return `${diffInMs / (1000 * 60)} minutes`;
		case 'hours':
			return `${diffInMs / (1000 * 60 * 60)} hours`;
		case 'days':
			return `${diffInMs / (1000 * 60 * 60 * 24)} days`;
		default:
			return 'Error';
	}
}
console.log(durationBetweenDates());
console.log(durationBetweenDates('02 Aug 1985', '03 Aug 1985', 'seconds')); // поверне '86400 seconds'
console.log(durationBetweenDates('12 Sep 1915', '07 Dec 200', 'minutes'));
console.log(durationBetweenDates('25 Jun 1995', '23 Nov 2024', 'hours'));
console.log(durationBetweenDates('31 Jan 2022', '03 Feb 2021', 'days')); // поверне '362 days'
/* 



Task 2 - Задача про перетворення об'єкту
Допустимо у вас є об'єкт, у якому кожен ключ - це назва товару (одним словом), а значення - його ціна.
Напишіть функцію яка буде всі ключі переводити у нижній регістр, а всі ціни буде заокруглювати до двох знаків після коми.
*/

const priceData = {
	Apples: '23.4',
	BANANAS: '48',
	oRAngGEs: '48.7584',
	tomaTOES: '1.3444',
	POTAtoes: '0.03',
};

let clonePriceDate = { ...priceData }; // поверхневе клонування
// let clonePriceDate = structuredClone(priceData); // глибоке
// console.log(clonePriceDate === priceData);

function optimizer(data) {
	let result = {};
	Object.entries(data).forEach(([key, value]) => {
		const newKey = key.toLowerCase();
		const newValue = Number(value).toFixed(2);
		result[newKey] = newValue;
	});
	return result;
}

let updatedPriceData = optimizer(clonePriceDate);

console.log('task2: ', updatedPriceData); // {apples: '23.40', bananas: '48.00', oranges: '48.76'}
