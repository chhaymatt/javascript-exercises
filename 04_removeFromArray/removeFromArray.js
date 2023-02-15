const removeFromArray = function (array, ...removeElements) {
	return array.filter((element) => !removeElements.includes(element));
};

// Do not edit below this line
module.exports = removeFromArray;
