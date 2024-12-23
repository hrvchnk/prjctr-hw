// const stuffArray = Array.isArray(stuffData)
// 	? stuffData
// 	: Object.values(stuffData);

// let cloneStuffData = structuredClone(stuffArray);

// function filterUnique(array) {
// 	return array.filter((item, index) => array.indexOf(item) === index);
// }

// console.log(filterUnique(cloneStuffData));
import { stuffData } from './stuffData.mjs';

function parsingStuff(workersData, property) {
	const workersArray = [];
	flattStuff(workersData, workersArray);
	const uniqueWorkers = filterUniqueWorkers(workersArray);
	const sortedWorkers = uniqueWorkers.sort(byProperty(property));
	printStuff(sortedWorkers);
}

function flattStuff(stuffStructure, accumulatingArray) {
	accumulatingArray.push(stuffStructure);
	if (stuffStructure.subordinators === null) {
		return;
	}
	stuffStructure.subordinators.forEach(subordinators => {
		flattStuff(subordinators, accumulatingArray);
	});
}

function filterUniqueWorkers(workers) {
	const allWorkers = workers.map(worker => {
		return [`${worker.firstName} ${worker.secondName}`, worker];
	});

	return Array.from(new Map(allWorkers).values());
}

function byProperty(property = 'age') {
	return (a, b) => (a[property] < b[property] ? 1 : -1);
}

function printStuff(workers) {
	workers.forEach(worker => {
		const { firstName, secondName, yearsOfExperience } = worker;
		console.log(`${firstName} ${secondName} work here ${yearsOfExperience}`);
	});
}

parsingStuff(stuffData, 'yearsOfExperience ');
