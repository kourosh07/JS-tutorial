// 1. متغیرها و انواع داده
function showVariables() {
  const output = document.getElementById("output");
  output.innerHTML = `
        <div class="output-item">
            <h3 class="output-success">متغیرها و انواع داده:</h3>
        </div>
    `;

  // تعریف متغیرها

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

  // تابع Arrow

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

  // حلقه while
  let whileLoopResult = "حلقه while: ";

  // حلقه for...of

  let forOfLoopResult = "رنگ‌ها: ";

  // نمایش نتایج
  output.innerHTML += `
        <div class="output-item">${forLoopResult}</div>
        <div class="output-item">${whileLoopResult}</div>
        <div class="output-item">${forOfLoopResult}</div>
    `;
}

// 4. رویدادها

// 5. مدیریت DOM
