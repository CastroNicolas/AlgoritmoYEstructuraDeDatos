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
    if (this.head === null) {
      this.head = this.head.next;
    } else {
      let current = this.head;
      while (current.next !== null) {
        if (current.next.value === value) {
          current.next = current.next.next;
          break;
        }
        current = current.next;
      }
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
linkedList.add("A");
linkedList.add("B");
linkedList.add("C");
linkedList.add("D");

console.log(linkedList.size());
linkedList.show();

linkedList.delete("B");
console.log(linkedList.size());
linkedList.show();
