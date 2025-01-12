const numbers = [1, 2, 3, 4, 5];
const numbers2 = [1, 2, 3, 4, 5];

// Mutable => Modifica el original
const mulMutable = (colletion, num) => {
  for (let index = 0; index < colletion.length; index++) {
    colletion[index] *= num;
  }
  return colletion;
};

const newArray = mulMutable(numbers, 2);

console.log(numbers);
console.log(newArray);

// Immutable => No modifica el original
const mulImmutable = (colletion, num) => {
  const newNumbers = [];
  for (let item of colletion) {
    newNumbers.push(item * num);
  }
  return newNumbers;
};

const newArray2 = mulImmutable(numbers2, 2);
console.log(numbers2);
console.log(newArray2);

class Beer {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}

// Mutable => Modifica el original
const toUpperMutable = (beer) => {
  beer.name = beer.name.toUpperCase();
  return beer;
};

const beer = new Beer("Corona", 1000);
// console.log(toUpperMutable(beer));
// console.log(beer);

// Immutable => No modifica el original
const toUpperImmutable = (beer) => {
  const newBeer = { ...Beer }; // Clonamos el objeto Beer con el spread operator
  newBeer.name = beer.name.toUpperCase();
  return newBeer;
};

const beer2 = new Beer("Corona", 1000);

console.log(toUpperImmutable(beer2));
console.log(beer);
