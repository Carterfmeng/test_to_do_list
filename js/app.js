// MVC 重构

const form = document.getElementById("task-form");
const taskInput = document.getElementById("task");
const filterInput = document.getElementById("filter");
const clearBtn = document.querySelector(".clear-tasks");
const tasksUl = document.querySelector(".collection");

// 存储数据
let tasks = ["任务a", "任务b"];

// 0.start app
startApp();

function startApp() {
    showTasks(tasks);
    startListen();

}

function showTasks(tasks) {
    tasksUl.innerHTML = ""; //所有task内容生成的li

    for (const task of tasks) {
        // 1.生成
        let li = document.createElement("li");
        li.className = "collection-item";
        li.innerHTML = `${task}<a class="delete-item secondary-content"><i class="fa fa-remove"></i></a>`;
        // 2.插入
        tasksUl.append(li); //prepend() 从最前面添加

    }
}

function startListen() {
    // 1.Add ——form submitting
    form.addEventListener("submit", addTask);
    // 2.Delete single mission——click
    tasksUl.addEventListener("click", removeTask);
    // 3.Delete all missions——click
    clearBtn.addEventListener("click", clearAllTasks);
    // 4.Screen missions——keyboard: keyup
    filterInput.addEventListener("keyup", filterTasks);
}

function addTask(e){
    // 0.输入内容
    const newTask = taskInput.value;

    // // 1.生成
    // let li = document.createElement("li");
    // li.className = "collection-item";
    // li.innerHTML = `${newTask}<a class="delete-item secondary-content"><i class="fa fa-remove"></i></a>`;
    // // 2.插入
    // tasksUl.prepend(li);
    // taskInput.value = "";

    // 1.插入
    tasks.unshift(newTask); //push()在数组后面插入
    // 2.输出
    showTasks(tasks);
    // 3.防止刷新
    e.preventDefault();
}

function removeTask(e){
    if (e.target.classList.contains("fa-remove")) {
        // e.target.parentNode.parentNode.remove();
        let index = tasks.indexOf(e.target.parentNode.parentNode.firstChild.textContent);
        tasks.splice(index, 1);
        showTasks(tasks);
    }
}

function clearAllTasks(){
    // tasksUl.innerHTML = '';
    tasks = [];
    showTasks(tasks);
}

function filterTasks(e){
    const inputText = e.target.value.toLowerCase();
    let filteredTasks = tasks.filter(task => task.toLocaleLowerCase().includes(inputText));
    showTasks(filteredTasks);

    // document.querySelectorAll(".collection-item").forEach(function(taskLi) {
    //     // console.log(taskLi.firstChild.textContent);

    //     const item = taskLi.firstChild.textContent.toLowerCase();
    //     if (item.indexOf(inputText) != -1) {
    //         // 如果包含
    //         taskLi.classList.remove("hide");
    //     } else {
    //         // 如果不包含
    //         taskLi.classList.add("hide");
    //     }

    // })
}