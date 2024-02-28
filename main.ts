function nameClothes(cloth: string) {
  console.log("Here is a:", cloth);
}

function nameClothColor(cloth: string, color: string) {
  console.log("Here is a", color, cloth);
}

(function main() {
  nameClothes("Shirt");
  nameClothColor("Jean", "blue");
})();
