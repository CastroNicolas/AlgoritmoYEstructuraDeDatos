let numbers = [1, 2, 3, 4, 5];

const sumNum = (collection) => {
  let sum = 0;
  for (const number of numbers) {
    sum += number;
  }
  return sum;
};

console.log(sumNum(numbers));

// Method Reduce

const sum2 = (collection) => {
  return collection.reduce((acc, num) => acc + num, 0);
};

console.log(sum2(numbers));
