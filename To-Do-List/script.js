let tasks = JSON.parse(localStorage.getItem("todoList")) || [];

function showTasks() {
  const taskList = document.getElementById("taskList");
  taskList.innerHTML = "";

  tasks.forEach(task => {
    const li = document.createElement("li");
    li.textContent = `✅ ${task.name}`;

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "❌";
    deleteButton.onclick = () => deleteTask(task.id);

    li.appendChild(deleteButton);
    taskList.appendChild(li);
  });
}

function addTask() {
  const input = document.getElementById("taskInput");
  const taskName = input.value.trim();

  if (!taskName) {
    alert("Please enter a valid task! 😅");
    return;
  }

  const newTask = {
    id: Date.now(),
    name: taskName
  };

  tasks.push(newTask);
  localStorage.setItem("todoList", JSON.stringify(tasks));
  input.value = "";
  showTasks();
}

function deleteTask(taskId) {
  tasks = tasks.filter(task => task.id !== taskId);
  localStorage.setItem("todoList", JSON.stringify(tasks));
  showTasks();
}

function clearTasks() {
  tasks = [];
  localStorage.removeItem("todoList");
  showTasks();
}

showTasks();
