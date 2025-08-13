// Create a simple "To-Do List" app in HTML, CSS, and JavaScript. The app should:
// Have an input field to enter a new task.
// Have a button to add the task to the list.
// Display tasks in a list below the input field.
// Each task should have a "Delete" button next to it.
// Clicking "Delete" should remove the task from the list.

function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskValue = taskInput.value.trim();

  if (taskValue === "") {
    alert("Please enter a task!");
    return;
  }

  const li = document.createElement("li");
  li.innerHTML = `
        ${taskValue}
        <button class="delete-btn" onclick="deleteTask(this)">Delete</button>
      `;

  document.getElementById("taskList").appendChild(li);
  taskInput.value = "";
}

function deleteTask(button) {
  button.parentElement.remove();
}
