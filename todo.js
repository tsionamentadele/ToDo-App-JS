const taskInput = document.querySelector("#task");
const addBtn = document.querySelector("#add");
const taskList = document.querySelector("#task-list");

// --- Model: data handling ---
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

// Save to localStorage
function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// --- View: render logic ---
function renderTasks() {
  taskList.innerHTML = ""; // clear UI
  tasks.forEach((task, index) => {
    const li = document.createElement("li");

    const span = document.createElement("span");
    span.textContent = task.text;
    if (task.done) span.classList.add("done");

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("delete_task");

    li.append(span, deleteBtn);
    taskList.append(li);

    // --- Event bindings ---
    span.addEventListener("click", () => toggleTask(index));
    deleteBtn.addEventListener("click", () => deleteTask(index));
  });
}

// --- Controller: interactions ---
function addTask() {
  const text = taskInput.value.trim();
  if (!text) return;

  tasks.push({ text, done: false });
  saveTasks();
  renderTasks();

  taskInput.value = "";
  taskInput.focus();
}

function deleteTask(index) {
  tasks.splice(index, 1);
  saveTasks();
  renderTasks();
}

function toggleTask(index) {
  tasks[index].done = !tasks[index].done;
  saveTasks();
  renderTasks();
}

// --- Event listeners ---
addBtn.addEventListener("click", addTask);
taskInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") addTask();
});

// --- Initial render ---
renderTasks();
