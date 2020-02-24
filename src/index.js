document.addEventListener("DOMContentLoaded", () => { 

  /****** DOM Elements ******/
  const findTaskForm = document.querySelector("#create-task-form")
  const findList = document.querySelector("#tasks")
  const taskDescription = document.querySelector("#new-task-description")
  
  /****** Add Event Listeners ******/
  findTaskForm.addEventListener("submit", event => {
    event.preventDefault()
    
    const newElement = document.createElement("li")
    newElement.textContent = taskDescription.value
    findList.append(newElement)
    
    const deleteButton = document.createElement("button")
    deleteButton.textContent = ("X")
    deleteButton.className = ("delete")
    newElement.append(deleteButton)

    newElement.querySelector(".delete").addEventListener("click", event => {
      newElement.remove()
    })
  })

})