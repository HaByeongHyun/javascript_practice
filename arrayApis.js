'use strict';

// Q1
{
  const fruits = ['apple', 'banana', 'orange'];
  console.log('Q1');
  const result = fruits.join(', ');
  console.log(result);
}

// Q2
{
  const fruits = 'strawberry, kiwi, banana, cheery';
  console.log('Q2');
  const result = fruits.split(',');
  console.log(result);
}

// Q3
{
  const array = [1, 2, 3, 4, 5];
  const reverseArray = array.reverse();
  console.log('Q3');
  console.log(reverseArray);
  console.log(array);
}

// Q4
{
  const array = [1, 2, 3, 4, 5];
  console.log('Q4');
  const result = array.slice(2, 5);
  console.log(result);
  console.log(array);
}

class Student {
  constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}

const students = [
  new Student('A', 29, true, 45),
  new Student('B', 28, false, 80),
  new Student('C', 30, true, 90),
  new Student('D', 40, false, 66),
  new Student('E', 18, true, 88),
];

//Q5
{
  console.log('Q5');
  const result = students.find((student) => student.score === 90);
  console.log(result);
}

//Q6
{
  console.log('Q6');
  const result = students.filter((student) => student.enrolled);
  console.log(result);
}

// Q7
{
  console.log('Q7');
  const result = students.map((student) => student.score);
  console.log(result);
}
// Q8
{
  console.log('Q8');
  // 학생 중 1명이라도 조건 만족하면 true
  const result = students.some((student) => student.score < 50);
  console.log(result);

  // 학생 모두가 50점 미만이면 true
  const result1 = students.every((student) => student.score < 50);
  console.log(result1);
}

// Q9
{
  console.log('Q9');
  // 초기값부터 배열 내 모든 값들을 돌면서 원하는 결과를 얻을 수 있음.
  const result = students.reduce((prev, curr) => prev + curr.score, 0);
  console.log(result / students.length);
}

// Q10
{
  console.log('Q10');
  // map을 이용하면 새로운 배열 생성 가능
  const result = students
    .map((student) => student.score)
    .filter((score) => score >= 50)
    .join(', ');
  console.log(result);
}

// Bonus
{
  console.log('Bonus');
  const result = students
    .map((student) => student.score)
    .sort((a, b) => a - b)
    .join(', ');
  console.log(result);
}
