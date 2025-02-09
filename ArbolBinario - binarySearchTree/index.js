class node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class binarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new node(value);
    if (this.root === null) {
      this.root = newNode;
      return;
    }

    let current = this.root;
    while (true) {
      if (value === current.value) return;
      if (value < current.value) {
        if (current.left === null) {
          current.left = newNode;
          return;
        }
        current = current.left;
      } else {
        if (current.right === null) {
          current.right = newNode;
          return;
        }
        current = current.right;
      }
    }
  }

  search(value) {
    if (this.root === null) return false;

    let current = this.root;
    // let i = 1;
    while (current) {
      //   console.log(i++);
      if (value === current.value) return current;
      if (value < current.value) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
  }
  // Metodos con recursividad:
  showInOrder(node) {
    if (node === undefined) {
      node = this.root;
    }

    if (node) {
      //Comeinza a evaluar de izquierda a derecha
      this.showInOrder(node.left);
      console.log(node.value);
      this.showInOrder(node.right);
    }
  }

  showInPreOrder(node) {
    if (node === undefined) {
      node = this.root;
    }

    if (node) {
      // Se hace ese algo antes de evaluar los proximos nodos es decir desde la raiz
      console.log(node.value);
      this.showInPreOrder(node.left);
      this.showInPreOrder(node.right);
    }
  }

  showInPostOrder(node) {
    if (node === undefined) {
      node = this.root;
    }

    if (node) {
      // Primero evalua el hijo izquierdo y luego el derecho, es decir primero lee cada hijo y despues va a subir a la raiz
      this.showInPostOrder(node.left);
      this.showInPostOrder(node.right);
      console.log(node.value);
    }
  }
}

// const tree = new binarySearchTree();
// tree.insert(5);
// tree.insert(3);
// tree.insert(6);
// tree.insert(1);
// tree.insert(4);
// tree.insert(2);
// console.log(tree);
// tree.showInOrder();
// tree.showInPreOrder();
// tree.showInPostOrder();

// console.log(tree.search(1));

//  Recursividad ==> es una función que se llama a si misma

// const recursividadFuncion = (n) => {
//   if (n === 0) return console.log("End in 0");

//   console.log("Number of stack: " + n);
//   recursividadFuncion(n - 1);
//   console.log("Number of stack: " + n);
// };

// recursividadFuncion(5);

// Ejemplo de Arbol Binario de Bsuqueda

const treeNumbers = new binarySearchTree();

let json = [];

for (let i = 0; i < 9000; i++) {
  const number = Math.floor(Math.random() * 9000);
  json.push(number);
  treeNumbers.insert(number);
}

console.log(json);

const numberToSearch = 400;

// Busquemos el numero con busqueda Lineal

console.log("Busqueda Lineal");

let exists = false;

//  Mientras mas sume en mi arbol mas va a tardar
for (const n of json) {
  if (n === numberToSearch) {
    exists = true;
    break;
  }
}

const start = Date.now();

if (exists) {
  console.log("El numero " + numberToSearch + " si existe");
} else {
  console.log("El numero " + numberToSearch + " no existe");
}

const end = Date.now();
console.log("Tiempo de busqueda lineal: " + (end - start) + " ms");

// Busqueda binaria
console.log("Busqueda Binaria");

const start2 = Date.now();
// La busqueda siempre va a ser mas rapida pero cuando insiertes puede ser mas lenta.
if (treeNumbers.search(numberToSearch)) {
  console.log("El numero " + numberToSearch + " si existe");
} else {
  console.log("El numero " + numberToSearch + " no existe");
}

const end2 = Date.now();
console.log("Tiempo de busqueda binaria: " + (end2 - start2) + " ms");
