
const numbers = [10, 20, 30, 40, 50];

// const doubles = [20, 40, 60, 80, 100]
let doubles;

doubles = numbers.map(function (n) {
  return n * 2;
});

console.log('numbers:', numbers);
console.log('doubles:', doubles);

