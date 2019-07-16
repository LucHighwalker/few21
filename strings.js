String.prototype.capitalize = function() {
	return this.charAt(0).toUpperCase() + this.substring(1);
};

String.prototype.capitalizeWords = function() {
	return this.split(" ")
		.map(str => str.capitalize())
		.join(" ");
};

String.prototype.evenCaps = function() {
	return this.split("")
		.map((str, i) => (i % 2 == 0 ? str.toLowerCase() : str.toUpperCase()))
		.join("");
};

String.prototype.oddCaps = function() {
	return this.split("")
		.map((str, i) => (i % 2 == 0 ? str.toUpperCase() : str.toLowerCase()))
		.join("");
};

String.prototype.removeWhiteSpace = function() {
	return this.replace(/\s/g, "");
};

String.prototype.removeExtraWhiteSpace = function() {
	return this.replace(/\s{2,}/g, " ");
};

String.prototype.kabobCase = function() {
	return this.toLowerCase().replace(/\s/g, "-");
};

String.prototype.snakeCase = function() {
	return this.toLowerCase().replace(/\s/g, "_");
};

String.prototype.camelCase = function() {
	return this.toLowerCase()
		.split(" ")
		.map((str, i) => (i > 0 ? str.capitalize() : str))
		.join("");
};

String.prototype.padWithZeros = function(before, after) {
	let left = "";
	let right = "";
	for (let i = 0; i < before; i++) {
		left = left + "0";
	}
	for (let j = 0; j < after; j++) {
		right = right + "0";
	}
	return left + this + right;
};
