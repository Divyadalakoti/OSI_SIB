const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("addButton");
const taskList = document.getElementById("taskList");

addButton.addEventListener("click", addTask);

function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText !== "") {
    const li = document.createElement("li");
    li.innerHTML = `
      <span class="task-text">${taskText}</span>
      <button class="complete-button">Complete</button>
      <button class="delete-button">Delete</button>
    `;
    taskList.appendChild(li);
    taskInput.value = "";
    bindTaskEvents(li);
  }
}

function bindTaskEvents(taskItem) {
  const completeButton = taskItem.querySelector(".complete-button");
  const deleteButton = taskItem.querySelector(".delete-button");

  completeButton.addEventListener("click", toggleComplete);
  deleteButton.addEventListener("click", deleteTask);
}

function toggleComplete() {
  this.parentElement.querySelector(".task-text").classList.toggle("complete");
}

function deleteTask() {
  this.parentElement.remove();
}

document.addEventListener("DOMContentLoaded", () => {
  const tasks = document.querySelectorAll("li");
  tasks.forEach(task => bindTaskEvents(task));
});
