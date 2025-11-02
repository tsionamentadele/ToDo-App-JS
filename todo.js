const taskInput = document.querySelector("#task");
const addBtn = document.querySelector("#add");
const taskList = document.querySelector("#task-list");

// --- Utility function to create a task element ---
function createTaskElement(taskValue) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  const deleteBtn = document.createElement("button");

  span.textContent = taskValue;
  deleteBtn.textContent = "Delete";
  deleteBtn.classList.add("delete_task");

  // Append children
  li.append(span, deleteBtn);

  // Event: Mark complete
  span.addEventListener("click", () => {
    span.classList.toggle("done");
  });

  // Event: Delete task
  deleteBtn.addEventListener("click", (e) => {
    e.stopPropagation(); // prevent strike-through
    li.remove();
  });

  return li;
}

// --- Add new task ---
function addTask() {
  const value = taskInput.value.trim();
  if (!value) return;

  const taskItem = createTaskElement(value);
  taskList.append(taskItem);

  taskInput.value = "";
  taskInput.focus();
}

addBtn.addEventListener("click", addTask);
taskInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") addTask();
});
