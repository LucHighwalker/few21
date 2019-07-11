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

console.log('\ncapitalizing "chewie": ', "chewie".capitalize());

console.log(
	'\ncapitalizing each first letter of "this is a multi word string": ',
	"this is a multi word string".capitalizeWords()
);

console.log(
	'\ncapitalizing every odd letter of "this is how a trump supporter talks": ',
	"this is how a trump supporter talks".oddCaps()
);

console.log(
	'\ncapitalizing every even letter of "this is how a trump supporter talks": ',
	"this is how a trump supporter talks".evenCaps()
);

console.log(
	'\nremoving whitespaces in "this string has some white spaces": ',
	"this string has some white spaces".removeWhiteSpace()
);

console.log(
	'\nremoving extra whitespaces in "this string has  some extra    white   spaces": ',
	"this string has  some extra    white   spaces".removeExtraWhiteSpace()
);

console.log(
	'\nturning following string into kabob case "This Is Kabob": ',
	"This Is Kabob".kabobCase()
);

console.log(
	'\nturning following string into snake case "This Is Snake": ',
	"This Is Snake".snakeCase()
);

console.log(
	'\nturning following string into camel case "This Is Camel": ',
	"This Is Camel".camelCase()
);

console.log(
	'\npadding string with 3 zeros in front and 4 zeros in back "padded": ',
	"padded".padWithZeros(3, 4)
);
