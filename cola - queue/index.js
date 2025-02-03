class Queue {
  #items = [];

  enqueue(item) {
    this.#items.push(item);
  }

  dequeue() {
    if (this.#items.length > 0) {
      // shift() => Elimina el primer elemento de la cola
      return this.#items.shift();
    }
  }

  isEmpty() {
    return this.#items.length === 0;
  }

  peek() {
    if (this.#items.length > 0) {
      return this.#items[0];
    }
  }

  size() {
    return this.#items.length;
  }

  getItems() {
    return [...this.#items];
  }
}

// const queue = new Queue();
// queue.enqueue(1);
// queue.enqueue(2);
// queue.enqueue(3);
// queue.enqueue(8);
// console.log(queue.getItems());
// queue.dequeue();
// console.log(queue.getItems());

const queueRequest = new Queue();

const divRes = document.getElementById("res");
const divReq = document.getElementById("req");
const url = "https://jsonplaceholder.typicode.com/posts";
let i = 1;

const addToQueue = () => {
  queueRequest.enqueue(i++);
  showQueue();
};

const showQueue = () => {
  const items = queueRequest.getItems();
  if (items.length === 0) {
    divReq.innerHTML = "No hay elementos en la cola";
    return;
  }
  divReq.innerHTML = "";
  items.map((item) => (divReq.innerHTML += `<p>${item} || </p>`));
};

const deleteFromQueue = async () => {
  while (!queueRequest.isEmpty()) {
    const res = await fetch(`${url}/${queueRequest.dequeue()}`);
    const data = await res.json();
    showQueue();
    divRes.innerHTML = `<p>${data.id}:${data.title}</p>` + divRes.innerHTML;
  }
};
