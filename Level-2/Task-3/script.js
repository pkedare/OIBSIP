function addTask() {
  const input = document.getElementById("taskInput");
  const taskText = input.value.trim();

  if (taskText === "") {
    alert("Please enter a task");
    return;
  }

  const li = document.createElement("li");
  li.textContent = taskText;

  const btnDiv = document.createElement("div");
  btnDiv.className = "task-buttons";

  const completeBtn = document.createElement("button");
  completeBtn.textContent = "✓";
  completeBtn.className = "complete-btn";
  completeBtn.onclick = () => completeTask(li);

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "✕";
  deleteBtn.className = "delete-btn";
  deleteBtn.onclick = () => li.remove();

  btnDiv.appendChild(completeBtn);
  btnDiv.appendChild(deleteBtn);

  li.appendChild(btnDiv);

  document.getElementById("pendingTasks").appendChild(li);
  input.value = "";
}

function completeTask(task) {
  task.classList.add("completed");
  document.getElementById("completedTasks").appendChild(task);
}
