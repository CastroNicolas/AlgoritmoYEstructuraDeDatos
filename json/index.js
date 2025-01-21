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
