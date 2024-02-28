function nameClothes(cloth: string) {
	console.log("Here is a:", cloth);
}

function nameClothColor(cloth: string, color: string) {
	console.log("Here is a", color, cloth);
}

function nameClothSize(cloth: string, size: string) {
	console.log("Here is a", cloth, "size", size);
}

(function main() {
	nameClothes("Shirt");
	nameClothColor("Jean", "blue");
	nameClothSize("Short", "M");
})();
