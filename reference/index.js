// Los tipos primitivos no trabajan por referencia, es decir, no se pueden modificar los valores de los argumentos.
// Los tipos primitivos son: number, string, boolean, null, undefined, symbol, bigint

class A {
  constructor(number) {
    this.number = number;
  }
}

const a = new A(5);
console.log(a.number);

const editNumber = (obj, value) => {
  obj.number = value;
  console.log(obj.number);
};

editNumber(a, 10);

console.log(a.number);
