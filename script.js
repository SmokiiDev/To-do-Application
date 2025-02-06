let taskInput = document.getElementById("taskInput");
function addTask() {
  let taskText = taskInput.value.trim();
  if (taskText === "") return;
  let li = document.createElement("li");
  li.classList.add("todoItem");
  li.innerHTML = `${taskText} <button class="remove" onclick="removeTask(this)">Remove</button>`;
  document.getElementById("todoList").appendChild(li);
  taskInput.value = "";
}
function removeTask(button) {
  button.parentElement.remove();
}
taskInput.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    addTask();
  }
});
