function nameClothes(cloth: string) {
  console.log("Here is a:", cloth);
}

function nameClothStore(cloth: string, storage: string) {
  console.log("The", cloth, "can be found in the", storage);
}

(function main() {
  nameClothes("Shirt");
  nameClothStore("Jacket", "Wardrobe");
})();
