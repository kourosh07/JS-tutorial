// 1. متغیرها و انواع داده
function showVariables() {
  const output = document.getElementById("output");
  output.innerHTML = `
        <div class="output-item">
            <h3 class="output-success">متغیرها و انواع داده:</h3>
        </div>
    `;

  // تعریف متغیرها
  const person = {
    name: "کوروش",
    age: 20,
    isDeveloper: true,
    skills: ["JavaScript", "React", "Node.js"],
  };

  // نمایش اطلاعات
  const variablesHTML = `
        <div class="output-item">
            <p><strong>نام:</strong> ${person.name} (${typeof person.name})</p>
        </div>
        <div class="output-item">
            <p><strong>سن:</strong> ${person.age} (${typeof person.age})</p>
        </div>
        <div class="output-item">
            <p><strong>توسعه‌دهنده:</strong> ${
              person.isDeveloper
            } (${typeof person.isDeveloper})</p>
        </div>
        <div class="output-item">
            <p><strong>مهارت‌ها:</strong> ${person.skills.join(
              ", "
            )} (${typeof person.skills})</p>
        </div>
        <div class="output-item">
            <p><strong>کل شیء:</strong> ${JSON.stringify(
              person
            )} (${typeof person})</p>
        </div>
    `;

  output.innerHTML += variablesHTML;
}

// 2. توابع
function callFunctions() {
  const output = document.getElementById("output");
  output.innerHTML = `
        <div class="output-item">
            <h3 class="output-success">توابع در جاوااسکریپت:</h3>
        </div>
    `;

  // تابع معمولی
  function calculateCircleArea(radius) {
    return Math.PI * radius ** 2;
  }

  // تابع Arrow
  const greet = (name) => `سلام ${name}! خوش آمدید.`;

  // نمایش نتایج
  output.innerHTML += `
        <div class="output-item">
            <p><strong>مساحت دایره با شعاع 5:</strong> ${calculateCircleArea(
              5
            ).toFixed(2)}</p>
        </div>
        <div class="output-item">
            <p><strong>سلام کردن:</strong> ${greet("کوروش")}</p>
        </div>
    `;
}

// 3. حلقه‌ها
function runLoops() {
  const output = document.getElementById("output");
  output.innerHTML = `
        <div class="output-item">
            <h3 class="output-success">حلقه‌ها در جاوااسکریپت:</h3>
        </div>
    `;

  // حلقه for
  let forLoopResult = "حلقه for: ";
  for (let i = 1; i <= 5; i++) {
    forLoopResult += `${i} `;
  }

  // حلقه while
  let whileLoopResult = "حلقه while: ";
  let j = 5;
  while (j > 0) {
    whileLoopResult += `${j} `;
    j--;
  }

  // حلقه for...of
  const colors = ["قرمز", "آبی", "سبز", "زرد"];
  let forOfLoopResult = "رنگ‌ها: ";
  for (const color of colors) {
    forOfLoopResult += `${color} `;
  }

  // نمایش نتایج
  output.innerHTML += `
        <div class="output-item">${forLoopResult}</div>
        <div class="output-item">${whileLoopResult}</div>
        <div class="output-item">${forOfLoopResult}</div>
    `;
}

// 4. رویدادها
document.getElementById("eventBtn").addEventListener("click", function () {
  const output = document.getElementById("output");
  output.innerHTML = `
        <div class="output-item">
            <h3 class="output-success">مدیریت رویدادها:</h3>
        </div>
        <div class="output-item">
            رویداد کلیک با موفقیت پردازش شد!
        </div>
    `;

  // تغییرات پس از کلیک
  this.textContent = "کلیک شد!";
  this.classList.remove("secondary-btn");
  this.classList.add("accent-btn");
});

// 5. مدیریت DOM
function greetUser() {
  const nameInput = document.getElementById("nameInput");
  const output = document.getElementById("output");
  const name = nameInput.value.trim();

  output.innerHTML = `
        <div class="output-item">
            <h3 class="output-success">مدیریت DOM:</h3>
        </div>
    `;

  if (name) {
    output.innerHTML += `
            <div class="output-item">
                <p>سلام <strong>${name}</strong>! به برنامه آموزشی جاوااسکریپت خوش آمدید.</p>
            </div>
        `;
    nameInput.value = "";
  } else {
    output.innerHTML += `
            <div class="output-item output-error">
                لطفاً نام خود را وارد کنید!
            </div>
        `;
  }
}