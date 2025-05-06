const form = document.getElementById("todo-form");
const input = document.getElementById("task-input");
const list = document.getElementById("task-list");

function getTasks() {
  return JSON.parse(localStorage.getItem("tasks") || "[]");
}

function saveTasks(tasks) {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function addTaskToDOM(taskText) {
  const li = document.createElement("li");

  const span = document.createElement("span");
  span.textContent = taskText;

  const delBtn = document.createElement("button");
  delBtn.textContent = "🗑";
  delBtn.addEventListener("click", () => {
    li.remove();
    updateStorage();
  });

  li.appendChild(span);
  li.appendChild(delBtn);
  list.appendChild(li);
}

function updateStorage() {
  const tasks = Array.from(list.querySelectorAll("li span")).map(el => el.textContent);
  saveTasks(tasks);
}

form.addEventListener("submit", e => {
  e.preventDefault();
  const task = input.value.trim();
  if (!task) return;

  addTaskToDOM(task);
  updateStorage();
  input.value = "";
});

// Load tasks on start
getTasks().forEach(addTaskToDOM);

// Optional interactivity
const menuIcon = document.getElementById("menuIcon");
const sidebar = document.getElementById("sidebar");

menuIcon.addEventListener("click", () => {
    menuIcon.classList.toggle("active");
    sidebar.classList.toggle("active");
   
    todo.addEventListener("click", () => {
        sidebar.classList.remove("active");
        menuIcon.classList.remove("active");
    });
});
