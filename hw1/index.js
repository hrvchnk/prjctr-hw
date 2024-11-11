'use strict';
/* 
HW1-Variables-DataType-TypeConversions
1. Створіть 2 змінні з типом number. Проведіть з ними такі математичні операції:
додавання, віднімання, множення, ділення, зведення в ступінь однієї з них, знаходження квадратного кореню однієї з них 

2. Створіть змінну довільного типу. Проведіть наступні перетворення з нею: перетворіть її на рядок, 
перетворіть її на число,
перетворіть її на булеве значення
*/

// Task 1

console.log('Task 1');

const num1 = 4;
const num2 = 2;
console.log(`Number 1: ${num1}`);
console.log(`Number 2: ${num2}`);
console.log('Result: ');

console.log(`${num1} + ${num2} = ${num1 + num2}`);
console.log(`${num1} - ${num2} = ${num1 - num2}`);
console.log(`${num1} * ${num2} = ${num1 * num2}`);
console.log(`${num1} / ${num2} = ${num1 / num2}`);
console.log(`${num1} ^ ${num2} = ${num1 ** num2}`);
console.log(`square(${num1}) = ${Math.sqrt(num1)}`);

console.log('');

// Task 2
console.log('Task 2');

let value = 'task2';

value = String(value);
console.log(`${value} [Type: ${typeof value}]`);

value = Number(value);
console.log(`${value} [Type: ${typeof value}]`);

value = Boolean(value);
console.log(`${value} [Type: ${typeof value}]`);
