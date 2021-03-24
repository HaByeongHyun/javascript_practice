'use strict';

// Array

// 1. Declaration
const arr1 = new Array();
const arr2 = [1, 2];

// 2. Index position
const fruits = ['apple', 'banana'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[fruits.length - 1]);

console.clear();
// 3. Looping over an array
// print all fruits

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

for (let fruit of fruits) {
  console.log(fruit);
}

// forEach
// fruits 함수에서 fruit 파라미터에 해당되는 값 호출
fruits.forEach((fruit) => {
  console.log(fruit);
});

// 4. Addition, deletion, copy
// push: add an item to the end
fruits.push('watermelon', 'peach');
console.log(fruits);

// pop: remove an item from the end
fruits.pop();
fruits.pop();
console.log(fruits);

// unshift: add an item to the benigging
fruits.unshift('strawberry', 'peach');
console.log(fruits);

// shift: remove an item from the benigging
fruits.shift();
console.log(fruits);

// note!! shift, unshift are slower than pop, push
// splice: remove an item by index position
fruits.push('peach', 'lemon', 'grape');
console.log(fruits);
fruits.splice(1, 3);
console.log(fruits);
fruits.splice(0, 1);
console.log(fruits);
fruits.splice(1, 1, 'apple', 'mango');
console.log(fruits);

// combine two arrays
const fruits2 = ['mango', 'coconut'];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);

// 5. Searching
// indexOF: find the index
console.clear();
console.log(fruits);
console.log(fruits.indexOf('apple'));
console.log(fruits.indexOf('lemon'));

// includes
console.log(fruits.includes('lemon'));
console.log(fruits.includes('coconut'));

// lastIndexOf
console.clear();
fruits.push('apple');
console.log(fruits);
console.log(fruits.indexOf('apple'));
console.log(fruits.lastIndexOf('apple'));
