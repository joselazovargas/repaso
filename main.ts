function nameClothes(cloth: string) {
	console.log("Here is a:", cloth);
}

function nameClothColor(cloth: string, color: string) {
	console.log("Here is a", color, cloth);
}

function nameClothSize(cloth: string, size: string) {
	console.log("Here is a", cloth, "size", size);
}

function nameClothStore(cloth: string, storage: string) {
	console.log("The", cloth, "can be found in the", storage);
}

(function main() {
	nameClothes("Shirt");
	nameClothStore("Jacket", "Wardrobe");
})();
