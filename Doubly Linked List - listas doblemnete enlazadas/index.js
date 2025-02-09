class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  add(value) {
    const node = new Node(value);
    if (this.head === null) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    }
    this.length++;
  }
  show() {
    let current = this.head;

    console.log("______________________");
    console.log(`Head: ${this.head?.value} Tail: ${this.tail?.value}`);

    while (current !== null) {
      console.log(
        `Prev: ${current.prev?.value} Value: ${current.value} Next: ${current.next?.value} `
      );
      current = current.next;
    }
  }

  reverse() {
    let current = this.tail;

    console.log("______________________");
    console.log(`Head: ${this.head?.value} Tail: ${this.tail?.value}`);

    while (current !== null) {
      console.log(
        `Prev: ${current.prev?.value} Value: ${current.value} Next: ${current.next?.value} `
      );
      current = current.prev;
    }
  }

  clear() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  delete(value) {
    if (this.length === 0) {
      return;
    }

    if (this.head.value === value) {
      if (this.length === 1) {
        this.head = null;
        this.tail = null;
      } else {
        this.head = this.head.next;
        this.head.prev = null;
      }
      this.length--;
      return;
    } else if (this.tail.value === value) {
      this.tail = this.tail.prev;
      this.tail.next = null;
      this.length--;
      return;
    } else {
      let current = this.head;
      while (current.next !== null) {
        if (current.next.value === value) {
          let nodeToDelete = current.next;
          current.next = nodeToDelete.next;
          current.next.prev = current;
          this.length--;
          return;
        }
        current = current.next;
      }
    }
  }
}

// const list = new DoublyLinkedList();

// list.add(1);
// list.add(2);
// list.add(3);

// list.show();

// list.delete(3);
// list.show();
// list.reverse();

const title = document.getElementById("title");
const description = document.getElementById("description");
const info = document.getElementById("info");

const moviesLinkedList = new DoublyLinkedList();

moviesLinkedList.add({
  title: "The Matrix",
  description: "A computer hacker learns the truth about the world.",
});

moviesLinkedList.add({
  title: "Star Wars",
  description: "A group of rebels fight against the evil Empire.",
});

moviesLinkedList.add({
  title: "Harry Potter",
  description: "A wizard goes to school.",
});

let movie = moviesLinkedList.head;

const showMovie = () => {
  title.innerHTML = `Movie: ${movie.value.title}`;
  description.innerHTML = `Description: ${movie.value.description}`;

  const next = movie.next?.value;
  const prev = movie.prev?.value;

  info.innerHTML = `Prev: ${prev?.title}` + ` | Next: ${next?.title}`;
};

const prevMovie = () => {
  if (movie.prev) {
    movie = movie.prev;
    showMovie();
  }
};
const nextMovie = () => {
  if (movie.next) {
    movie = movie.next;
    showMovie();
  }
};

showMovie();
