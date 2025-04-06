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

