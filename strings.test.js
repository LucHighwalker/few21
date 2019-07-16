require("./strings");

test("capitalization of word", () => {
	expect("chewie".capitalize()).toBe("Chewie");
});

test("capitalization of multiple words", () => {
	expect("this is a multi word string".capitalizeWords()).toBe(
		"This Is A Multi Word String"
	);
});

test("oddcaps", () => {
	expect("this is how a trump supporter talks".oddCaps()).toBe(
		"ThIs iS HoW A TrUmP SuPpOrTeR TaLkS"
	);
});

test("evencaps", () => {
	expect("this is how a trump supporter talks".evenCaps()).toBe(
		"tHiS Is hOw a tRuMp sUpPoRtEr tAlKs"
	);
});

test("removal of whitespaces", () => {
	expect("this is a string with white spaces".removeWhiteSpace()).toBe(
		"thisisastringwithwhitespaces"
	);
});

test("removal of whitespaces", () => {
	expect(
		"this is    a  string   with  extra      white    spaces".removeExtraWhiteSpace()
	).toBe("this is a string with extra white spaces");
});

test("kabob case", () => {
	expect("This is Kabob".kabobCase()).toBe("this-is-kabob");
});

test("snake case", () => {
	expect("This is Snake".snakeCase()).toBe("this_is_snake");
});

test("camel case", () => {
	expect("This is Camel".camelCase()).toBe("thisIsCamel");
});

test("pad with zeros", () => {
	expect("3 and 4 zeros".padWithZeros(3, 4)).toBe("0003 and 4 zeros0000");
});
