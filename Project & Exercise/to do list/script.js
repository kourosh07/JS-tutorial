document.getElementById("addTaskBtn").addEventListener("click", function () {
  const taskInput = document.getElementById("taskInput");
  const taskText = taskInput.value.trim();

  if (taskText !== "") {
    addTask(taskText);
    taskInput.value = "";
  }
});

function addTask(taskText) {
  const taskList = document.getElementById("taskList");

  const li = document.createElement("li");
  li.textContent = taskText;

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "حذف";
  deleteButton.addEventListener("click", function () {
    taskList.removeChild(li);
  });

  li.addEventListener("click", function () {
    li.classList.toggle("completed");
  });

  li.appendChild(deleteButton);
  taskList.appendChild(li);
}

