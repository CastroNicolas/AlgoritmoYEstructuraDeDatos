// Stack

class Stack {
  // Poner en un elemento el # hace automaticamnte privado al  elemento.
  #items = [];
  push(item) {
    this.#items.push(item);
  }
  pop() {
    if (this.#items.length > 0) {
      return this.#items.pop();
    }
  }

  peek() {
    if (this.#items.length > 0) {
      return this.#items[this.#items.length - 1]; // Acceder al último elemento ( solo muestra no lo elimina )
    }
  }

  size() {
    return this.#items.length;
  }
  getItems() {
    return [...this.#items];
  }
}

// const stack = new Stack();
// console.log(stack);
// Output: Stack {}
// stack.push(1);
// stack.push(2);
// stack.push(3);
// stack.push(8);
// console.log(stack);
// Output: Stack { #items: [ 1, 2, 3, 8 ] }

// stack.pop();
// console.log(stack);
// Output: Stack { #items: [ 1, 2 ] }

// console.log(stack.peek());
// Output: 8

// console.log(stack.size());
// Output: 4

// Example with html
const inputName = document.getElementById("name");
const container = document.getElementById("container");

const stack = new Stack();
const addToStack = () => {
  stack.push(inputName.value);
  showStack();
  inputName.value = "";
  inputName.focus();
  //   console.log(stack);
};

const deleteFromStack = () => {
  stack.pop();
  showStack();
};

const showStack = () => {
  container.innerHTML = "";
  const items = stack.getItems();
  //   items.forEach((item) => {
  //     container.innerHTML += `<p>${item}</p>`;
  //   });
  items.map((item) => (container.innerHTML += `<p>${item}</p>`));
};
