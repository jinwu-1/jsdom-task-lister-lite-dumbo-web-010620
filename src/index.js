document.addEventListener("DOMContentLoaded", () => {

  const createTaskForm = document.querySelector("#create-task-form")
  createTaskForm.addEventListener("submit", newTask)

})

const newTask = event => {
  event.preventDefault()
  const taskDescription = document.querySelector("#new-task-description")
  const taskElement = document.createElement("li")
  taskElement.textContent = taskDescription.value

  document.querySelector("#tasks").append(taskElement)
}