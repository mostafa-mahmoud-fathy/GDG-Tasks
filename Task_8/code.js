let input = document.getElementById("input-field");
let addBtn = document.querySelector(".submit-button");
let radioInputs = document.querySelectorAll('input[type="radio"]');
let bottom = document.querySelector(".bottom");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];



document.addEventListener("DOMContentLoaded", () => {
    loadTask()
    setupEventListeners();
});



function loadTask(){
    const savedTasks = localStorage.getItem("tasks");
    if(savedTasks){
        tasks = JSON.parse(savedTasks)
    }
    filterTasks()
}

function setupEventListeners(){
    addBtn.addEventListener("click", ()=>{addTask()});
    
    input.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            addTask();
        }
    });

    radioInputs.forEach(radio => {
        radio.addEventListener("change", filterTasks);
      });


    bottom.addEventListener("click" , handleTaskAction)
    // renderTasks();
      
}

function saveTasks(){
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function addTask() {
    const taskText = input.value.trim();
    console.log(taskText)
    // Basic validation 
    if (!taskText ) {
        alert("Please enter a task.");
        return;
    }
    
    const newTask = {
        id:Date.now(),
        text: taskText,
        completed: false,
    }
    
    tasks.push(newTask);
    saveTasks();
    filterTasks()
    input.value = ""
    
}

function filterTasks(){
    let filteredTasks = []
    const selectedFilter = document.querySelector('input[type="radio"]:checked').id;

    console.log(selectedFilter)

    switch(selectedFilter) {
        case "value-1":
            filteredTasks = tasks.filter(task => !task.completed);
            break;
        case "value-2":
            filteredTasks = tasks.filter(task => task.completed);
            break;
        case "value-3":
            filteredTasks = [...tasks]
            break;
    }
    renderTasks(filteredTasks)

}

function renderTasks(tasksToRender) {

    if (tasksToRender.length === 0) {
        bottom.innerHTML = `<div class="empty-state"> No Tasks found</div>`
        return;
    }

    bottom.innerHTML = ""


    tasksToRender.forEach(task => {
        const taskElement = document.createElement("div");
        taskElement.className = `card ${task.completed ? "completed" : ""}`;

        taskElement.dataset.id = task.id;

        taskElement.innerHTML = `
        <label class="container-checkbox">
            <span class="checkmark">
                <span class="checkmark-icon">✔</span>
            </span>
        </label>
        <input class="task-text" readonly value = "${task.text}" style = "${task.completed ? "completed" : ""}"> </input>
        <div class="action-buttons">
            <button class="edit-button">edit</button>
            <button class="delete-button">Delete</button>
        </div>    
        `;
        bottom.appendChild(taskElement);
    })

}


function handleTaskAction(event) {

    const taskElement = event.target.closest(".card");
    const taskInput = taskElement.querySelector('input');
    if (!taskElement) return; // If the click is not on a task element, do nothing

    const taskId = parseInt(taskElement.dataset.id);

    if (event.target.classList.contains("delete-button")) {
        deleteTask(taskId);
        return;
    }
    if (event.target.classList.contains("edit-button")) {
        editTask(taskId);
        taskInput.addEventListener("keypress", function(event) {
            if (event.key === "Enter") {
                saveTask(taskId, taskInput);
            }
        });
        return;
    }
    if (event.target.classList.contains("save-button")) {
        saveTask(taskId,taskInput);
        return;
    }
    if (event.target.classList.contains("cancel-button")) {
        cancelEdit(taskId,taskInput);
        return;
    }
    if (event.target.classList.contains("checkmark") || event.target.classList.contains("checkmark-icon")) {
        tasks.forEach((task)=>{
            if(task.id == taskElement.dataset.id){
                task.completed = ! task.completed ;
            }
        }); 
        saveTasks();
        filterTasks();
        return;
    }


}


function deleteTask(taskId) {
    tasks = tasks.filter(task => task.id !== taskId);
    saveTasks();
    filterTasks();
}

function editTask(taskId){
    const taskElement = document.querySelector(`[data-id="${taskId}"]`);
    const taskInput = taskElement.querySelector('input');
    const actionButtons = taskElement.querySelector('.action-buttons');
    const buttons = taskElement.querySelectorAll('button');
    buttons.forEach((btn)=>btn.remove());

    const saveButton = document.createElement('button');
    saveButton.classList.add('save-button');
    saveButton.textContent = 'Save';
    
    const cancelButton = document.createElement('button');
    cancelButton.classList.add('cancel-button');
    cancelButton.textContent = 'Cancel';

    actionButtons.appendChild(saveButton);
    actionButtons.appendChild(cancelButton);

    taskInput.removeAttribute('readonly');
    taskInput.style.border = '2px solid'

    
}

function saveTask(taskId, taskInput) {
    const task = tasks.find(t => t.id === taskId);
    
    task.text = taskInput.value.trim();

    taskInput.setAttribute('readonly', true);
    taskInput.style.border = ''; 

    saveTasks();
    filterTasks();
}
function cancelEdit(taskId, taskInput) {
    const taskElement = document.querySelector(`[data-id="${taskId}"]`);
    const task = tasks.find(t => t.id === taskId);
    taskInput.value = task.text;

    taskInput.setAttribute('readonly', true);
    taskInput.style.border = '';  

    const actionButtons = taskElement.querySelector('.action-buttons');
    actionButtons.innerHTML = ''; 

    const editButton = document.createElement('button');
    editButton.classList.add('edit-button');
    editButton.textContent = 'Edit';
    
    const deleteButton = document.createElement('button');
    deleteButton.classList.add('delete-button');
    deleteButton.textContent = 'Delete';
    
    actionButtons.appendChild(editButton);
    actionButtons.appendChild(deleteButton);

}