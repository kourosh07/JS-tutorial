// کار کردن با فایل ها

const fs = require('fs')

// خواندن فایل 

let data = fs.readFileSync("", "utf8")

console.log(data);

// نوشتن روی فایل

fs.writeFileSync("", "byeeeeee")

// مسیر دهی absolute

data = fs.readFileSync("", "utf8")

console.log(data);

// مسیر دهی relative

data = fs.readFileSync("", "utf8")

console.log(data);

// موجودیت یک فایل (Boolean)

data = fs.existsSync("", "utf8")

console.log(data);

// directory

console.log(__dirname);

fs.readFileSync(`${__dirname}\\data.txt`, "utf8")

// کپی کردن فایل ها

fs.copyFileSync("./data.txt", "./data2.txt")

// rename کردن فایل ها

fs.renameSync("./data.txt", "./1/data3.txt")

// حذف فایل ها

fs.unlinkSync("./data.txt")

// JSON (Java Script Object Notation)

let obj = {
  Name: "kourosh",
  age: 20,
  skills: ["js", "react", "python"],
  x: {
    1: "1",
    2: "2",
  },
};

// stringify()

let s = JSON.stringify(obj)

fs.writeFileSync("./data.json", s)

let p = fs.readFileSync("./data.json")

// parse()

let x = JSON.parse(p)

console.log(x);

for(let i = 0; i < 100; i++){
  obj[i.toString()] = i
}

let m = JSON.stringify(obj, null, 2)

console.log(m);

fs.writeFileSync("./data.json", m)

// Working with JSON

const fs = require("fs")

console.clear()

let db = [
    {
        fname : "kourosh",
        lname : "rahimi",
        score : 5
    },
    {
        fname : "haimd",
        lname : "rahimi",
        score : 19
    },
    {
        fname : "ali",
        lname : "rezaei",
        score : 15
    }
]


fs.writeFileSync("./data.json", JSON.stringify(db, null, 2))

let x = JSON.parse(fs.readFileSync("./data.json", "utf8"))

console.log(x)

for (let student of x){
    student.score++
    console.log(student, "\n--------------\n")
}

for (let student of x){
    if (student.lname === "rahimi"){
        console.log(student.fname)
    }
}

// Map

const myMap = new Map()

myMap.set("name", "kourosh")
myMap.set(1, "number")
myMap.set(true, "bollean")


console.log(myMap.get("name"))
console.log(myMap.get(1))

console.log(myMap.has("name"))

myMap.delete(1)

console.log(myMap.size)

myMap.forEach((value, key)=>{
    console.log(key,"+" + value)
}
)

console.log([...myMap])

// Set

const mySet = new Set();

mySet.add(1);
mySet.add(2);
mySet.add(3);
mySet.add("3");
mySet.add({ name: "kourosh" });

console.log(mySet.size);

console.log(mySet.has(2));

mySet.delete(3);

mySet.forEach((value, key) => {
  console.log(`${key} : ${value}`);
});

console.log([...mySet]);

console.log(mySet);

console.log("--------------------------");

const numbers = [1, 2, 3, 3, 3, 4, 4, 5];

console.log(numbers);

const uniqueNum = [...new Set(numbers)];

console.log(uniqueNum);




