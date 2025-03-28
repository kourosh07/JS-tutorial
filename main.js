// 1995
//-------------------------------------------------
// ES1-ES6
//-------------------------------------------------
// var - let - const

let k = 2
k = 3

console.log(k)

console.clear()

//-------------------------------------------------
// Data types
// 1.numbers

let age1 = 25
let price = 99.99

//-------------------------------------------------
// 2.string

let name = "John"
let message = 'Hello, World!'

//-------------------------------------------------
// 3.boolean

let isStudent = true
const isWorking = false

isStudent = false

console.log(isStudent)

//-------------------------------------------------
// 4.object

let person = {
    name: "Kourosh",
    age: 20,
    score:[4, 8, 12],
    x : {
        name: "Kourosh",
        age: 16,
        score:[4, 8, 12]
    }
}

console.log(person.x.age)

//-------------------------------------------------
// 5.Null: نشان‌دهنده‌ی عدم وجود مقدار (عمدی)

let y = null
console.log(y)

//-------------------------------------------------
// 6.Undefined: وقتی متغیری تعریف شده اما مقداری به آن اختصاص داده نشده است

let x
console.log(x)

//-------------------------------------------------
// 7.big int

let bigNumber = 123456789012345678901234567890n

//-------------------------------------------------
// 8.Symbol (اختیاری): برای ایجاد مقادیر منحصر به فرد

let id = Symbol("id")

//-------------------------------------------------
// typeof

console.log(typeof 42)
console.log(typeof "Hello")
console.log(typeof true)
console.log(typeof undefined)
console.log(typeof null) // "object" (این یک اشتباه تاریخی در جاوااسکریپت است)
console.log(typeof {})
console.log(typeof [])
console.log(typeof function() {})

//-------------------------------------------------
// controll flow
// conditions

// if, else

let age = 18

if (age < 18) {
    console.log("You are a minor.")
} else if (age === 18) {
    console.log("You just became an adult!")
} else {
    console.log("You are an adult.")
}

//-------------------------------------------------
// switch

let day = 3
let dayName

switch (day) {
  case 1:
    dayName = "شنبه"
    break
  case 2:
    dayName = "یک‌شنبه"
    break
  case 3:
    dayName = "دوشنبه"
    break
  case 4:
    dayName = "سه‌شنبه"
    break
  case 5:
    dayName = "چهارشنبه"
    break
  case 6:
    dayName = "پنج‌شنبه"
    break
  case 7:
    dayName = "جمعه"
    break
  default:
    dayName = "روز نامعتبر"
}

console.log(dayName)

let fruit = "سیب"

switch (fruit) {
  case "موز":
    console.log("موز انتخاب شد.")
  case "سیب":
    console.log("سیب انتخاب شد.")
  case "پرتقال":
    console.log("پرتقال انتخاب شد.")
  default:
    console.log("میوه‌ی نامعتبر.")
}

//-------------------------------------------------
// loops
// for
// (start, stop, step)

for (let i = 0; i < 5; i++) {
    console.log("Iteration number: " + i)
}

//-------------------------------------------------
// while

let i = 0
while (i < 5) {
    console.log("Iteration number: " + i)
    i++
}

//-------------------------------------------------
// do...while

let j = 0
do {
    console.log("Iteration number: " + i)
    i++;
} while (i < 5)

//-------------------------------------------------
// for...of

let colors = ["red", "green", "blue"];
for (let color of colors) {
  console.log(color);
}

//-------------------------------------------------
// for...in

let person2 = { name: "kourosh", age: 20 }
for (let key in person2) {
  console.log(key + ": " + person2[key]);
}

//-------------------------------------------------
// functions

function greet(name) {
    console.log("Hello, " + name + "!");
}

greet("kourosh")

//-------------------------------------------------
// Recursive Functions

function factorial(n) {
    if (n === 0) {
        return 1
    }
    return n * factorial(n - 1)
}

console.log(factorial(5))

//-------------------------------------------------
// Arrow Functions

let greet = function(name) {
    console.log("Hello, " + name + "!")
}

let greetArrow = (name) => {
    console.log("Hello, " + name + "!")
}

let add = (a, b) => a + b;

let result = add(3, 5);
console.log(result); // خروجی: 8

greet("kourosh")
greetArrow("hamid")

