// تمرین: برنامه‌ای بنویسید که یک عدد از کاربر بگیرد و بررسی کند که آیا عدد زوج است یا فرد.

function checkEvenOrOdd(number) {
    if (number % 2 === 0) {
        console.log(`${number} is even.`);
    } else {
        console.log(`${number} is odd.`);
    }
}

checkEvenOrOdd(10); 
checkEvenOrOdd(7);  

//-------------------------------------------------
// تمرین: برنامه‌ای بنویسید که اعداد ۱۰ تا ۱ را به صورت نزولی چاپ کند.

let i = 10;
while (i >= 1) {
    console.log(i);
    i--;
}

//-------------------------------------------------
// تمرین: فانکشنی بنویسید که سه عدد بگیرد و بزرگ‌ترین عدد را برگرداند.

function findMax(a, b, c) {
    if (a >= b && a >= c) {
        return a;
    } else if (b >= a && b >= c) {
        return b;
    } else {
        return c;
    }
}

console.log(findMax(10, 20, 15)); 

//-------------------------------------------------
// تمرین: برنامه‌ای بنویسید که یک آرایه از اعداد را بگیرد و مجموع آن‌ها را محاسبه کند.

function sumArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

let numbers = [1, 2, 3, 4, 5];
console.log(sumArray(numbers)); 

//-------------------------------------------------
// تمرین +: برنامه‌ای بنویسید که یک رشته از کاربر بگیرد و آن را معکوس کند.

function reverseString(str) {
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}

console.log(reverseString("Hello")); 

//-------------------------------------------------
// پروژه: مدیریت لیست کارها (To-Do List)

// آرایه‌ای برای ذخیره‌ی کارها
let todoList = [];

// تابع برای افزودن کار به لیست
function addTask(task) {
    todoList.push(task); 
    console.log(`${task} add to list.`);
}

// تابع برای نمایش تمام کارها
function showTasks() {
    if (todoList.length === 0) {
        console.log("list is empty");
    } else {
        console.log("tasks list : ");
        todoList.forEach((task, index) => {
            console.log(`${index + 1}. ${task}`);
        });
    }
}

// تابع برای حذف یک کار
function removeTask(index) {
    if (index >= 0 && index < todoList.length) {
        const removedTask = todoList.splice(index, 1);
        console.log(`${removedTask} deleted.`);
    } else {
        console.log("inavlid index");
    }
}

addTask("learn JavaScript");
addTask("exercise");
addTask("reading");

showTasks(); 

removeTask(1); 

showTasks(); 

