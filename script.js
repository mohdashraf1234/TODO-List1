let score = 0;

function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("Please enter a task!");
    return;
  }

  const taskList = document.getElementById("taskList");

  // Create task item
  const li = document.createElement("li");
  li.textContent = taskText;

  // Complete button
  const completeBtn = document.createElement("button");
  completeBtn.textContent = "✔️";
  completeBtn.onclick = () => completeTask(li);

  // Delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "🗑️";
  deleteBtn.onclick = () => deleteTask(li);

  li.appendChild(completeBtn);
  li.appendChild(deleteBtn);
  taskList.appendChild(li);

  taskInput.value = "";
}

function completeTask(task) {
  if (!task.classList.contains("completed")) {
    task.classList.add("completed");
    updateScore(10); // Add points
  } else {
    task.classList.remove("completed");
    updateScore(-10); // Remove points
  }
}

function deleteTask(task) {
  if (task.classList.contains("completed")) {
    updateScore(-10); // Deduct if completed
  }
  task.remove();
}

function updateScore(points) {
  score += points;
  if (score < 0) score = 0;
  document.getElementById("score").textContent = score;
}
