'use strict';

// Methods

// Task #5
const fruits = ["apple", "banana", "cherry", "date"];
fruits.splice(1, 1, `blackberry`, `blueberry`)
console.log(fruits);


// Task #6
const colors = ["red", "orange", "yellow", "green", "blue"];
let newColors = colors.slice(1, 3)
console.log(newColors);



// Task #7
const animals1 = ["cat", "dog"];
const animals2 = ["lion", "tiger"];
let animals = animals1.concat(animals2)
console.log(animals);



// Task #8
const numbers = [7, 3, 9, 1, 5];
console.log(numbers.sort());


// Task #9
const letters = ["a", "b", "c", "d"];
console.log(letters.reverse());


// Task #10
const sentence = "JavaScript is awesome";
let str = sentence.split(' ');
console.log(str);


// Task #11
const words = ["Hello", "world"];
let str2 = words.join(' ')
console.log(str2);



// מעבדים מערכים


// Task #14
const students = ["דני", "נועה", "רן", "תמר"];

students.forEach(function (elem) {
  console.log(`hello ${elem}, good luck in the exam!`);
}
)


// Task #15
const pricesILS = [100, 250, 75, 320];
let pricesUSD = pricesILS.map(elem => elem /= 3.5)
console.log(pricesUSD);
 


// Task #16
const users = [
  { username: "Tom", isLoggedIn: true },
  { username: "Jerry", isLoggedIn: false },
  { username: "Spike", isLoggedIn: true }
];

let loggedIn = users.filter(function (elem) { if (elem.isLoggedIn == true) return elem })
console.log(loggedIn);


//Task#17
const products = [
  { name: "Book", quantity: 3 },
  { name: "Pen", quantity: 0 },
  { name: "Notebook", quantity: 5 }
];
let outOfStock = products.filter(elem => elem.quantity == 0)

console.log(outOfStock);


//Task#18
const grades = [72, 85, 90, 67, 58];
let result = grades.every(grade => grade > 60);

console.log(result);



//Task#19
const employees = [
  { name: "Sharon", salary: 9500 },
  { name: "David", salary: 7800 },
  { name: "Lior", salary: 12000 }
];

let top1 = employees.filter(function (elem) {
  if (elem.salary > 8000)
    return elem.name

}).map(function (elem) { return elem.name.toUpperCase() })

console.log(top1);



//Task#20
const books = [
  { title: "Book A", pages: 450 },
  { title: "Book B", pages: 520 },
  { title: "Book C", pages: 600 }
];

let hasLongBooks = books.some(function (elem) {
  return elem.pages > 500
})
if (hasLongBooks) {
  books.forEach(book => {
    if (book.pages > 500) {
      console.log(book.title);
    }
  });
}





