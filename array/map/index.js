const numbers = [1, 2, 3, 4, 5];

const sumNum = (collection, number) => {
  return collection.map((item) => item + number);
};

console.log(sumNum(numbers, 10));
// Map ==> Modifica el original Es decir es mutable
// push ==> No modifica el original. Es decir es inmutable
