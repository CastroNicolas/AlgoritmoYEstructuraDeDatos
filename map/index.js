// const map = new Map();

// // pone un valor => set(key, value)
// map.set("a", 1);
// map.set("b", 2);
// map.set("c", 3);
// map.set("d", 4);

// console.log(map);

// // modifica el original
// map.set("e", 5);
// map.set("a", 9);

// console.log(map);

// //  obtiene =>get(key)
// console.log(map.get("a"));
// // tamaño
// console.log(map.size);

// // validation
// console.log(map.has("a"));
// console.log(map.has("e"));

// // delete
// map.delete("a");

// console.log(map);
// // _______________________________
// const keyObj = {
//   id: 1,
//   hash: "hash",
// };

// const keyObj2 = {
//   id: 1,
//   hash: "hash2",
// };
// map.set(keyObj, "value");
// map.set(keyObj2, "value2");
// console.log(map);

// //  Meter de forma ENCADENADA

// map.set("a", 1).set("b", 2).set("c", 3);

// // For para recorrer el valores
// console.log("_______________________");
// for (const value of map.values()) {
//   console.log(value);
// }

// // For para recorrer el keys
// console.log("_______________________");
// for (const key of map.keys()) {
//   console.log(key);
// }

// // For para recorrer el keys y values
// console.log("_______________________");
// // for (const item of map) {
// //   console.log(item);
// // }

// for (const [key, value] of map.entries()) {
//   console.log(key, value);
// }

// Ejemplo del uso de map

const code = document.getElementById("code");
const name = document.getElementById("name");
const container = document.getElementById("container");

const customer = new Map();

const addToMap = () => {
  customer.set(code.value, name.value);
  console.log(customer);
  showCustomer();
  code.value = "";
  name.value = "";
  code.focus();
};

const showCustomer = () => {
  container.innerHTML = "";
  for (const item of customer) {
    container.innerHTML += `<div>
    <b>${item[0]}</b>: ${item[1]} 
    </div>`;
  }
};
