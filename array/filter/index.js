const names = [
  "Nico",
  "Zulema",
  "Miguel",
  "Camilo",
  "Ana",
  "Pedro",
  "Juan",
  "Esteban",
];

// Modo Estructurado
const searchFirstLetter = (colletion, letter) => {
  const newColletion = [];
  for (let word of colletion) {
    if (word[0].toUpperCase() === letter.toUpperCase()) {
      newColletion.push(word);
    }
  }
  return newColletion;
};
// console.log(searchFirstLetter(names, "N"));

// Modo Funcional *** Filter *** ===> Inmutable

const searchFirstLetter2 = (colletion, letter) => {
  const newColletion = colletion.filter(
    (word) => word[0].toUpperCase() === letter.toUpperCase()
  );
  return newColletion;
};

console.log(searchFirstLetter2(names, "A"));
