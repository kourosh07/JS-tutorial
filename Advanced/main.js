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

// try-catch

try {
  let s = fs.readFileSync("./data.json", "utf8");

  let obj = JSON.parse(s);

  console.log(obj["Name"]);
} catch (e) {
  console.log("EROR: \n" + e);
}


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

// setTimeout

setTimeout(() => {
  //console.log("this message show in 2 second");
}, 2000);

const showmessage = (message, name) => {
  console.log(`${message}, ${name} !`);
};

let hi = setTimeout(showmessage, 3000, "kourosh", "hi");

clearTimeout(hi);

console.log("---------------------------------\n");

// SetInterval

let count = 5;

const countDown = setInterval(() => {
  //console.log(count);
  count--;

  if (count < 4) {
    clearInterval(countDown);
  }
}, 1000);

function showTime() {
  const now = new Date().getHours();
  console.log(now);
}

const clock = setInterval(showTime, 1000);

setTimeout(() => {
  clearInterval(clock);
  console.log("clock paused!");
}, 10000);

// Promise

console.log("hi");
console.log("bye");
console.log("Turing");

setTimeout(() => {
  console.log("kourosh");
}, 2000);

let greeting = (Name) => console.log(`hello ${Name}`);

const userInfo = (fname, lname, callBack) => {
    const fullName = `${fname} ${lname}`
    callBack(fullName)
}

// ES => Promise

const hasMeet = false;

const meeting = new Promise((resolve, reject) => {
  if (!hasMeet) {
    const meetDetail = {
      Name: "Turing",
      location: "Shiraz",
      time: 11,
    };
    resolve(meetDetail);
  } else {
    reject(new Error("Meeting cancelled..."));
  }
});

meeting.then((res) => console.log(res)).catch((rej) => console.log(rej));

const addCalender = (meetDetail) => {
  return new Promise((resolve, reject) => {
    const callender = `${meetDetail.Name} meeting is scheduled at ${meetDetail.time} in ${meetDetail.location}`;
    resolve(callender);
  });
};

const addCalender = (meetDetail) => {
  const callender = `${meetDetail.Name} meeting is scheduled at ${meetDetail.time} in ${meetDetail.location}`;
  return Promise.resolve(callender);
};

meeting
  .then(addCalender)
  .then((res) => console.log(res))
  .catch((rej) => console.log(rej));

const promise1 = Promise.resolve("promise1 completed");
const promise2 = new Promise((res, rej) => {
  setTimeout(() => {
    res("promise2 completed");
  }, 2000);
});

promise1.then((res) => console.log(res));
promise2.then((res) => console.log(res));

Promise.all([promise1, promise2]).then((res) => console.log(res))

function getMessage(callBack) {
  setTimeout(function () {
    callBack("hello callBack");
  }, 2000);
}

function myfunc(message) {
  console.log(message);
}

getMessage(myfunc);

function getMessage(callBack) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      callBack("hello callBack");
    }, 2000);
  });
}

function myfunc(message) {
  console.log(message);
}

getMessage(myfunc);

// sync

function myfunc1 (){
    return "hello"
}

console.log(myfunc1());

// async
// pending - fullfilled - rejected

async function myfunc (){
    return "hello"
}

console.log(myfunc());

const hasMeet = false;

const meeting = new Promise((resolve, reject) => {
  if (!hasMeet) {
    const meetDetail = {
      Name: "Turing",
      location: "Shiraz",
      time: 11,
    };
    resolve(meetDetail);
  } else {
    reject(new Error("Meeting cancelled..."));
  }
});

const addCalender = (meetDetail) => {
  const callender = `${meetDetail.Name} meeting is scheduled at ${meetDetail.time} in ${meetDetail.location}`;
  return Promise.resolve(callender);
};

async function Mymeet() {
    const meetDetail = await meeting
    const message = await addCalender(meetDetail)
    console.log(message);
}

Mymeet()

const func1 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("first func");
      resolve("resolved after 3 sec");
    }, 3000);
  });
};

const func2 = async () => {
  console.log("calling first func");
  const result = await func1();
  console.log(result);
};

func2();

console.log("End...");





