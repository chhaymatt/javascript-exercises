const sumAll = function (a, b) {
	if (a < 0 || b < 0 || typeof a !== "number" || typeof b !== "number") {
		return "ERROR";
	}
	if (a > b) {
		start = b;
		finish = a;
	} else {
		start = a;
		finish = b;
	}
	let finalSum = 0;
	for (let index = start; index < finish + 1; index++) {
		finalSum += index;
	}
	return finalSum;
};

// Do not edit below this line
module.exports = sumAll;
