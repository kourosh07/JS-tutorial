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
