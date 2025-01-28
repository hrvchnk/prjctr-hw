'use strict';

// Фантастичні звірі і де їх шукати :)
// КММ - Класифікація Міністерства Магії

// базовий клас-предок для всіх звірів
class Creature {
	constructor(name, age, habitat, dangerLevel) {
		this.name = name;
		this.age = age;
		this.habitat = habitat;
		this.dangerLevel = dangerLevel; // рівень небезпеки за КММ
	}

	eat() {
		console.log(`${this.name} їсть.`);
	}

	sleep() {
		console.log(`${this.name} спить.`);
	}

	dangerRating() {
		console.log(`Рейтинг небезпеки ${this.name}: КММ ${this.dangerLevel}`);
	}
}

// клас-предок для магічних істот-ссавців
class MagicalMammal extends Creature {
	constructor(name, age, habitat, furColor, dangerLevel) {
		super(name, age, habitat, dangerLevel);
		this.furColor = furColor; // унікальна властивість
	}

	// спільний метод
	breastfeed() {
		console.log(`${this.name} годує своїх малюків.`);
	}
}

// нюхль
class Niffler extends MagicalMammal {
	#secretHobby = 'збирає блискучі предмети'; // приватна властивість

	constructor(name, age, habitat, furColor, dangerLevel) {
		super(name, age, habitat, furColor, dangerLevel);
	}

	searchForTreasure() {
		console.log(`${this.name} шукає скарби.`);
	}

	hideTreasure() {
		console.log(`${this.name} ховає скарб у сумці.`);
	}

	revealSecret() {
		console.log(`Таємне хобі ${this.name}: ${this.#secretHobby}`);
	}
}

// василіск
class Basilisk extends Creature {
	#deadlyFeatures = 'Смертельний погляд, яд'; // приватна властивість

	constructor(name, age, habitat, dangerLevel) {
		super(name, age, habitat, dangerLevel);
	}

	stare() {
		console.log(`${this.name} вбиває своїм поглядом.`);
	}

	bite() {
		console.log(`${this.name} використовує свій смертоносний укус.`);
	}

	revealFeatures() {
		console.log(`Особливості ${this.name}: ${this.#deadlyFeatures}`);
	}
}

// фенікс
class Phoenix extends Creature {
	#wingSpan = 0; // приватна властивість

	constructor(name, age, habitat, wingSpan, dangerLevel) {
		super(name, age, habitat, dangerLevel);
		this.#wingSpan = wingSpan;
	}

	fly() {
		console.log(`${this.name} літає, залишаючи вогняний слід.`);
	}

	reborn() {
		console.log(`${this.name} відроджується з попелу.`);
	}

	revealWingSpan() {
		console.log(`Розмах крил ${this.name}: ${this.#wingSpan} см`);
	}
}

// дракон
class Dragon extends Creature {
	#breathType = 'вогонь'; // приватна властивість

	constructor(name, age, habitat, breathType, dangerLevel) {
		super(name, age, habitat, dangerLevel);
		this.#breathType = breathType;
	}

	fly() {
		console.log(`${this.name} літає високо в небі.`);
	}

	breatheFire() {
		console.log(`${this.name} видихає ${this.#breathType}.`);
	}

	revealBreathType() {
		console.log(`Тип дихання ${this.name}: ${this.#breathType}`);
	}
}

// результати
const niffler = new Niffler('Нюхль', 3, 'печера', 'чорний', 'Х');
console.log('Нюхль:');
console.log(
	`Імʼя - ${niffler.name}, Вік - ${niffler.age}, Живе - ${niffler.habitat}`
);
niffler.searchForTreasure();
niffler.hideTreasure();
niffler.revealSecret();
niffler.dangerRating();

console.log('');
const basilisk = new Basilisk(
	'Василіск',
	1000,
	'Таємна кімната, Гоґвортс',
	'ХХХХХ'
);
console.log('Василіск:');
console.log(
	`Імʼя - ${basilisk.name}, Вік - ${basilisk.age}, Живе - ${basilisk.habitat}`
);
basilisk.stare();
basilisk.bite();
basilisk.revealFeatures();
basilisk.dangerRating();

console.log('');
const phoenix = new Phoenix('Фоукс', 500, 'магічне гніздо', 100, 'ХХ');
console.log('Фенікс:');
console.log(
	`Імʼя - ${phoenix.name}, Вік - ${phoenix.age}, Живе - ${phoenix.habitat}`
);
phoenix.fly();
phoenix.reborn();
phoenix.revealWingSpan();
phoenix.dangerRating();

console.log('');
const dragon = new Dragon(
	'Український Залізопуз',
	300,
	'гори України',
	'вогонь',
	'ХХХХ'
);
console.log('Дракон:');
console.log(
	`Імʼя - ${dragon.name}, Вік - ${dragon.age}, Живе - ${dragon.habitat}`
);
dragon.fly();
dragon.breatheFire();
dragon.revealBreathType();
dragon.dangerRating();
