// Promise ==> Asincronismo
// setTimeout(()=>console.log("Hello"), 1000);

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("this is a promise");
    resolve("Hello");
    reject("Error");
  }, 3000);
});

promise.then((res) => console.log(res)).catch((err) => console.log(err));
// console.log(promise); // undefined
// console.log(promise.then()); // undefined
// console.log(promise.catch()); // undefined
// console.log(promise.finally()); // undefined

// fetch ==> Asincronismo

// fetch("https://jsonplaceholder.typicode.com/todos")
//   .then((res) => res.json())
//   .then((data) => console.log(data));

// console.log(fetch("https://jsonplaceholder.typicode.com/todos/1")); // undefined

// async - await
const getTodos = async () => {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos");
    const data = await res.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

getTodos();
