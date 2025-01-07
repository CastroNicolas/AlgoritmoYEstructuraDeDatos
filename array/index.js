let array = [7, 8, 9, 10];

const showArray = () => {
  for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
};

showArray();
console.log("______________________");

array.push(11);
// Output: 7, 8, 9, 10, 11
showArray();

const showArray2 = () => {
  for (let item of array) {
    console.log(item);
  }
};
console.log("______________________");
showArray2();
