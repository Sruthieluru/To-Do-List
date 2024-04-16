// function addTask() {
//     var taskInput = document.getElementById("taskInput");
//     var taskList = document.getElementById("taskList");
//     if(taskInput.value == ""){
//         alert("Please enter a task!");
//         return;
//     }
//     var li = document.createElement("li");
//     li.textContent = taskInput.value;

//     var deleteBtn = document.createElement("button");
//     deleteBtn.textContent="Delete";
//     deleteBtn.className="delete";
//     deleteBtn.onclick=function(){
//         taskList.removeChild(li);
//     };
//     li.appendChild(deleteBtn);
//     taskList.appendChild(li);
//     taskInput.value="";
// }


function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");
    if (taskInput.value == "") {
        alert("Please enter a task!");
        return;
    }
    var li = document.createElement("li");
    li.textContent = taskInput.value;

    var deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.className = "delete";
    deleteBtn.onclick = function () {
        var confirmation = confirm("Are you sure you want to delete this task?");
        if (confirmation) {
            taskList.removeChild(li);
            alert("Task deleted successfully!");
        }
    };

    var editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.className = "edit";
    editBtn.onclick = function () {
        var newTask = prompt("Edit task:", li.textContent);
        if (newTask !== null && newTask.trim() !== "") {
            li.textContent = newTask.trim();
            li.appendChild(deleteBtn); // Add delete button after editing
            li.appendChild(editBtn); // Add edit button after editing
        }
    };

    li.appendChild(deleteBtn);
    li.appendChild(editBtn);
    taskList.appendChild(li);
    taskInput.value = "";
}


