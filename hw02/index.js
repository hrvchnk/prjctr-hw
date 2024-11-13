'use strict';

// hw02: Loops, conditional constructions, primitive data types

/* Task 1
Напишіть код який виводить в консоль значення від 1 до 100, але замість чисел кратних 3 має виводитись `Лол`, замість значень кратних 5 - `Кек`, а замість значень кратних і 3, і 5 - `ЛолКек`
*/
// console.log('Task1  \n');
console.log('Task 1:\n');

const lol = 3;
const kek = 5;

// switch
console.log('\nSwitch:');
for (let i = 1; i <= 100; i++) {
	switch (true) {
		case i % lol == 0 && i % kek == 0:
			console.log('LolKek');
			break;
		case i % lol == 0:
			console.log('Lol');
			break;
		case i % kek == 0:
			console.log('Kek');
			break;
		default:
			console.log(i);
	}
}

// if, else if
console.log('\nIf Else If:');
for (let i = 1; i <= 100; i++) {
	if (i % lol == 0 && i % kek == 0) {
		console.log('LolKek');
	} else if (i % lol == 0) {
		console.log('Lol');
	} else if (i % kek == 0) {
		console.log('Kek');
	} else {
		console.log(i);
	}
}

/* Task 2
Напишіть код який бере значення зі змінної (`value`) і виводить у консоль всі парні числа, що менші за задане.
Наприклад, якщо у змінній число 10, програма має вивести наступне: 2, 4, 6, 8. Додаткові вимоги:
1. Реалізуйте рішення 2 способами: з використанням циклу `for` та `while`
2. Код має перевіряти, чи значення у змінній є числом. Якщо воно не є числом,  в консоль має вивестись повідомлення про помилку, наприклад `'Таке чуство шо Бог десь наказує нас за шось'`.
*/
console.log(' \n\nTask 2: \n');

let value = 14;
let resultForLoop = '';
let resultWhileLoop = '';

if (typeof value == 'number') {
	// FOR LOOP
	for (let v = 1; v <= value; v++) {
		if (v % 2 == 0 && v < value) {
			resultForLoop += v + ' ';
		}
	}
	console.log(`for loop: ${resultForLoop}`);

	// WHILE LOOP
	while (value > 1) {
		value--;
		if (value % 2 == 0) {
			resultWhileLoop += value + ' ';
		}
	}
	console.log(`while loop: ${resultWhileLoop}`);
} else {
	console.log(
		'Таке чувство, що Бог десь наказує нас за щось. І мені кажеться, я знаю за що, но я не можу вам сказати. Ми в церкву ходимо перед каждою ігрою! Перед каждою, перед каждою ігрою ходим в церкву!'
	);
}
