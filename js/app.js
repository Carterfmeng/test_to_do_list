const form = document.getElementById("task-form");
const taskInput = document.getElementById("task");
const filterInput = document.getElementById("filter");
const removeBtn = document.querySelector(".delete-item secondary-content")
const clearBtn = document.querySelector(".clear-tasks btn black")

// 0.start listening
startListen();

function startListen() {
    // 1.Add ——form submitting
    form.addEventListener("submit", addTask);
    // 2.Delete single mission——click
    removeBtn.addEventListener("click", removeTask);
    // 3.Delete all missions——click
    clearBtn = addEventListener("click", clearAllTasks);
    // 4.Screen missions——keyboard: keyup
    filterInput.addEventListener("keyup", filterTasks);
}

function addTask(){

}
function removeTask(){

}
function clearAllTasks(){

}
function filterTasks(){

}

