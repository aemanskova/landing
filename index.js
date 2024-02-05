const taskInput = document.getElementById("task-input");
const addTaskBtn = document.getElementById("add-task-btn");
const taskList = document.getElementById("task-list");
const taskCount = document.getElementById("task-count");

let count = 0;

function addTask() {
  const task = taskInput.value;
  if (task !== "") {
    const li = document.createElement("li");
    li.innerHTML = `${task} <button class="delete-btn">Delete</button>`;
    taskList.appendChild(li);
    taskInput.value = "";
    count++;
    taskCount.innerHTML = count;
  }
}

function deleteTask(e) {
  if (e.target.classList.contains("delete-btn")) {
    e.target.parentNode.remove();
    count--;
    taskCount.innerHTML = count;
  }
}

addTaskBtn.addEventListener("click", addTask);
taskList.addEventListener("click", deleteTask);