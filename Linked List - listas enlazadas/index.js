// listas enlazadas

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  add(value) {
    const node = new Node(value);

    if (this.head === null) {
      this.head = node;
    } else {
      let current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = node;
    }
  }

  delete(value) {
    if (this.head === null) return; // Si la lista está vacía, no hace nada

    if (this.head.value === value) {
      this.head = this.head.next; // Si el valor a eliminar es el primero, mueve la cabeza
      return;
    }

    let current = this.head;
    while (current.next !== null) {
      if (current.next.value === value) {
        current.next = current.next.next; // Salta el nodo a eliminar
        return;
      }
      current = current.next;
    }
  }

  show() {
    let current = this.head;
    while (current !== null) {
      console.log(current.value);
      current = current.next;
    }
  }
  size() {
    let count = 0;
    let current = this.head;
    while (current !== null) {
      count++;
      current = current.next;
    }
    return count;
  }
  clear() {
    this.head = null;
  }
}

const linkedList = new LinkedList();
// linkedList.add("A");
// linkedList.add("B");
// linkedList.add("C");
// linkedList.add("D");

// console.log(linkedList.size());
// linkedList.show();

// linkedList.delete("B");
// console.log(linkedList.size());
// linkedList.show();

// Ejemplo de uso de una lista enlazada

const title = document.getElementById("movie");
const image = document.getElementById("image");
const next = document.getElementById("next");

const moviesLinkedList = new LinkedList();
moviesLinkedList.add({
  title: "The Matrix",
  //   image:
  // "https://m.media-amazon.com/images/M/MV5BNzQzOTg3NzItYmY0Zi00YzJlLWEyYjUtODMyYjA5YzgzNzA5XkEyXkFqcGdeQXVyNTAzNzgwNTg@._V1_UX182_CR0,0,182,268_AL_.jpg",
});

moviesLinkedList.add({
  title: "Star Wars",
  //   image:
  // "https://m.media-amazon.com/images/M/MV5BNjg3MjM4NzY0N15BMl5BanBnXkFtZTgwMTMyMjE4MjE@._V1_UX182_CR0,0,182,268_AL_.jpg",
});

moviesLinkedList.add({
  title: "Harry Potter",
  //   image:
  // "https://m.media-amazon.com/images/M/MV5BMTMxMTQzNjA0Nl5BMl5BanBnXkFtZTcwOTc4MjQzMQ@@._V1_UY268_CR0,0,182,268_AL_.jpg",
});

// const movies = [
//   {
//     id: 1,
//     title: "Avatar",
//     image:
//       "https://m.media-amazon.com/images/M/MV5BMjE4NzY3NzYwNF5BMl5BanBnXkFtZTgwMjY4OTg2NzM@._V1_UX182_CR0,0,182,268_AL_.jpg",
//   },
//   {
//     id: 2,
//     title: "Star Wars",
//     image:
//       "https://m.media-amazon.com/images/M/MV5BNjg3MjM4NzY0N15BMl5BanBnXkFtZTgwMTMyMjE4MjE@._V1_UX182_CR0,0,182,268_AL_.jpg",
//   },
//   {
//     id: 3,
//     title: "The Matrix",
//     image:
//       "https://m.media-amazon.com/images/M/MV5BNzQzOTg3NzItYmY0Zi00YzJlLWEyYjUtODMyYjA5YzgzNzA5XkEyXkFqcGdeQXVyNTAzNzgwNTg@._V1_UX182_CR0,0,182,268_AL_.jpg",
//   },
//   {
//     id: 4,
//   },
//   {
//     id: 5,
//     title: "The Dark Knight",
//     image:
//       "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_UX182_CR0,0,182,268_AL_.jpg",
//   },
// ];

const showMovies = () => {
  const movie = moviesLinkedList.head.value;
  title.innerText = `Movie: ${movie.title}`;
  //   image.src = movie.image || "NOT PICTIURED";

  if (moviesLinkedList.head.next !== null) {
    const movieNext = moviesLinkedList.head.next.value;
    next.innerHTML = `Next Movie: ${movieNext.title}`;
  } else {
    next.innerHTML = "No hay peliculas";
  }
};

const nextMovie = () => {
  // if (moviesLinkedList.head.next !== null) }
  if (moviesLinkedList.head.next) {
    moviesLinkedList.delete(moviesLinkedList.head.value);
    showMovies();
  }
};

showMovies();
