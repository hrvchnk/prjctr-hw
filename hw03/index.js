'use strict';
/* hw03: Functions 
Task 1 - Напишіть функцію яка рекурсивно буде знаходити суму всіх непарних додатніх чисел до якогось числа.
*/

function recursiveOddSumTo(number) {
	if (number <= 0) return 0;

	if (number % 2 !== 0) {
		return number + recursiveOddSumTo(number - 1);
	} else {
		return 0 + recursiveOddSumTo(number - 1);
	}
}

console.log('recursiveOddSumTo= ' + recursiveOddSumTo(1)); // 1
console.log('recursiveOddSumTo= ' + recursiveOddSumTo(10)); // 25

/*
Task 2 - Напишіть функцію яка ітеративно (в циклі) буде знаходити суму всіх непарних додатніх чисел до якогось числа.
*/

function iterativeOddSumTo(number) {
	let sum = 0;
	for (let i = 1; i < number; i++) {
		if (i % 2 !== 0) {
			sum += i;
		}
	}
	return sum;
}

console.log('iterativeOddSumTo= ' + iterativeOddSumTo(1)); // 1
console.log('iterativeOddSumTo= ' + iterativeOddSumTo(10)); // 25
