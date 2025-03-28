// =========================================
// 1. مقدمه و مفاهیم پایه
// =========================================
document.getElementById("year").textContent = new Date().getFullYear();

document
  .getElementById("externalScriptDemo")
  .addEventListener("click", function () {
    Swal.fire({
      title: "اسکریپت اکسترنال",
      text: "این دکمه از طریق اسکریپت خارجی کنترل می‌شود!",
      icon: "info",
      confirmButtonText: "متوجه شدم",
    });
  });

// =========================================
// 2. دستکاری DOM
// =========================================
const demoBox = document.getElementById("demoBox");
const changeBoxBtn = document.getElementById("changeBox");
const dynamicElements = document.getElementById("dynamicElements");
const addElementBtn = document.getElementById("addElement");
const removeElementBtn = document.getElementById("removeElement");

// تغییر المان جعبه
changeBoxBtn.addEventListener("click", function () {
  demoBox.textContent = "محتوا با موفقیت تغییر کرد!";
  demoBox.style.backgroundColor = "#f72585";
  demoBox.style.fontSize = "1.2rem";
  demoBox.innerHTML += '<br><i class="fas fa-check-circle"></i> موفقیت‌آمیز';
});

let elementCounter = 1;
// اضافه کردن المان جدید
addElementBtn.addEventListener("click", function () {
  if (dynamicElements.firstChild?.textContent === "هیچ المانی وجود ندارد") {
    dynamicElements.innerHTML = "";
  }

  const newElement = document.createElement("div");
  newElement.className = "item";
  newElement.innerHTML = `
                المان جدید ${elementCounter++}
                <button class="btn btn-danger" style="padding: 3px 8px; font-size: 0.8rem;">
                    <i class="fas fa-times"></i>
                </button>
            `;

  dynamicElements.appendChild(newElement);
  document.getElementById("noEl").innerText = "";

  // اضافه کردن رویداد به دکمه حذف
  newElement.lastElementChild.addEventListener("click", function (e) {
    // e.stopPropagation();
    newElement.remove();
    if (dynamicElements.children.length === 0) {
      dynamicElements.innerHTML =
        '<p style="color: #6c757d; text-align: center;">هیچ المانی وجود ندارد</p>';
      elementCounter = 1;
    }
  });
});

// حذف آخرین المان
removeElementBtn.addEventListener("click", function () {
  if (
    dynamicElements.lastChild &&
    dynamicElements.lastChild.textContent !== "هیچ المانی وجود ندارد"
  ) {
    dynamicElements.removeChild(dynamicElements.lastChild);
    if (elementCounter > 1) elementCounter--;

    if (dynamicElements.children.length === 0) {
      dynamicElements.innerHTML =
        '<p style="color: #6c757d; text-align: center;">هیچ المانی وجود ندارد</p>';
      elementCounter = 1;
    }
  }
});

// =========================================
// 3. رویدادها
// =========================================
// رویداد کلیک
let clickCount = 0;
document.getElementById("clickDemo").addEventListener("click", function () {
  clickCount++;
  const counter = document.querySelector(".counter");
  counter.textContent = clickCount;

  // انیمیشن برای کانتر
  counter.style.transform = "scale(1.5)";
  setTimeout(() => {
    counter.style.transform = "scale(1)";
  }, 300);
});

// رویدادهای ماوس
const mouseEventArea = document.getElementById("mouseEventArea");
const mousePosition = document.getElementById("mousePosition");

mouseEventArea.addEventListener("mousemove", function (e) {
  mousePosition.textContent = `موقعیت ماوس: X=${e.clientX}, Y=${e.clientY}`;
});

mouseEventArea.addEventListener("mouseenter", function () {
  this.innerHTML = '<p><i class="fas fa-mouse-pointer"></i> ماوس وارد شد!</p>';
  this.style.backgroundColor = "#4cc9f0";
  this.style.color = "white";
});

mouseEventArea.addEventListener("mouseleave", function () {
  this.innerHTML = "<p>ماوس را اینجا حرکت دهید یا کلیک کنید</p>";
  this.style.backgroundColor = "#f8f9fa";
  this.style.color = "inherit";
});

mouseEventArea.addEventListener("click", function () {
  this.style.borderColor = "#f72585";
  setTimeout(() => {
    this.style.borderColor = "#4895ef";
  }, 500);
});

// Event Delegation
document.getElementById("itemList").addEventListener("click", function (e) {
  if (e.target.tagName === "LI" || e.target.parentElement.tagName === "LI") {
    const item = e.target.tagName === "LI" ? e.target : e.target.parentElement;
    item.classList.toggle("completed");

    const icon = item.querySelector("i");
    if (item.classList.contains("completed")) {
      icon.className = "fas fa-check-circle";
      icon.style.color = "#4cc9f0";
    } else {
      icon.className = "fas fa-check";
      icon.style.color = "#4361ee";
    }
  }
});

// =========================================
// 4. کار با فرم‌ها
// =========================================
const userForm = document.getElementById("userForm");
const errorElement = document.getElementById("error");
const userDataDiv = document.getElementById("userData");

userForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const emailInput = document.getElementById("email");
  const nameInput = document.getElementById("name");

  // اعتبارسنجی ایمیل
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value)) {
    errorElement.innerHTML =
      '<i class="fas fa-exclamation-circle"></i> لطفاً یک ایمیل معتبر وارد کنید';
    emailInput.focus();
    return;
  } else {
    errorElement.textContent = "";
  }

  // اعتبارسنجی نام
  if (nameInput.value.trim().length < 3) {
    errorElement.innerHTML =
      '<i class="fas fa-exclamation-circle"></i> نام باید حداقل 3 کاراکتر باشد';
    nameInput.focus();
    return;
  }

  // جمع‌آوری داده‌های فرم
  const formData = new FormData(userForm);
  const data = Object.fromEntries(formData.entries());

  // نمایش داده‌ها
  userDataDiv.innerHTML = `
                <h3><i class="fas fa-user-circle"></i> اطلاعات کاربر:</h3>
                <p><i class="fas fa-user"></i> <strong>نام:</strong> ${
                  data.name
                }</p>
                <p><i class="fas fa-envelope"></i> <strong>ایمیل:</strong> ${
                  data.email
                }</p>
                <p><i class="fas fa-birthday-cake"></i> <strong>سن:</strong> ${
                  data.age || "نامشخص"
                }</p>
                <p><i class="fas fa-globe"></i> <strong>کشور:</strong> ${getCountryName(
                  data.country
                )}</p>
                ${
                  data.message
                    ? `<p><i class="fas fa-comment-dots"></i> <strong>پیام:</strong> ${data.message}</p>`
                    : ""
                }
                <div class="box" style="margin-top: 10px; background-color: #4cc9f0;">
                    <i class="fas fa-check-circle"></i> فرم با موفقیت ثبت شد!
                </div>
            `;

  // ریست فرم
  userForm.reset();

  // اسکرول به بخش نتایج
  userDataDiv.scrollIntoView({ behavior: "smooth" });
});

// تابع برای نام کشور
function getCountryName(code) {
  const countries = {
    IR: "ایران",
    US: "آمریکا",
    CA: "کانادا",
    UK: "انگلیس",
  };
  return code ? countries[code] || code : "نامشخص";
}

// تغییر رنگ پس‌زمینه
const colorBtn = document.getElementById("colorBtn");
const colors = [
  "#f1c40f",
  "#e67e22",
  "#e74c3c",
  "#9b59b6",
  "#3498db",
  "#2ecc71",
];
let colorIndex = 0;

colorBtn.addEventListener("click", function () {
  document.body.style.backgroundColor = colors[colorIndex];
  colorIndex = (colorIndex + 1) % colors.length;
});

// تغییر تم تاریک/روشن
const themeToggle = document.getElementById("themeToggle");
themeToggle.addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");

  const icon = this.querySelector("i");
  if (document.body.classList.contains("dark-mode")) {
    icon.className = "fas fa-sun";
    this.style.backgroundColor = "#FFD43B";
    this.style.color = "#212529";
  } else {
    icon.className = "fas fa-moon";
    this.style.backgroundColor = "#212529";
    this.style.color = "#f8f9fa";
  }
});

// بارگذاری SweetAlert برای پیام‌های زیبا
const script = document.createElement("script");
script.src = "https://cdn.jsdelivr.net/npm/sweetalert2@11";
document.head.appendChild(script);

