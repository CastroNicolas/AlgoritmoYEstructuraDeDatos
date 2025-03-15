// const set = new Set();
// // El Set es una estructura de datos que permite almacenar elementos únicos.
// // Los elementos de un Set pueden ser de cualquier tipo de datos, incluyendo strings, números
// // y objetos.
// // set.add(1); => añade el elemento al set
// set.add(1);
// set.add(2);
// set.add(3);
// set.add(4);
// set.add(5);
// set.add(6);
// set.add(7);
// set.add(8);
// set.add(9);
// set.add(10);
// console.log(set);
// //  Si el set no contiene el elemento, lo agrega. Si lo contiene, no lo agrega. caso diferente es con los objetos;
// // ya que los agrega de igual manera, exepto que los compara por referencia. Es decir que sea la misma variable.

// // Eliminar
// set.delete(1);

// // Existencia

// const book = {
//   title: "The Lord of the Rings",
//   author: "J.R.R. Tolkien",
//   year: 1954,
// };

// // El método has() devuelve un valor booleano indicando si el elemento existe en el Set o
// // no.
// console.log(set.has(1)); // false porque lo elimine anteriormente
// console.log(set.has(2)); // true

// set.add(book);

// console.log(set.has(book));

// // array to set
// const array = [
//   1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5,
//   6, 7, 8, 9, 10,
// ];
// const arraySet = new Set(array);
// console.log(arraySet);
// for (const item of arraySet) {
//   console.log(item);
// }

// Ejemplo con html

const funtion = new Set();

const action1 = () => {
  console.log("Action 1");
};
const action2 = () => {
  console.log("Action 2");
};
const action3 = () => {
  console.log("Action 3");
};
const action4 = () => {
  console.log("Action 4");
};

// console.log(action1 instanceof Object ); ==> true

const addAction = (action) => {
  funtion.add(action);
  console.log(action);
};

const run = () => {
  for (const action of funtion) {
    action();
  }
};
