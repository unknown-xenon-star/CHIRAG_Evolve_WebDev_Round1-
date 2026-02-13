// const dateInput = document.getElementById("dateInput");
// const input = document.getElementById("task_input");
// const button = document.getElementById("Task_add_button");
// const list = document.getElementById("task_list_ul");
// const filters = document.querySelector(".filters");
// const priorityInput = document.getElementById("priorityInput");

// list.addEventListener("click", (event) => {
//     if (event.target.tagName === "SPAN") {
//         event.target.classList.toggle("done");
//         saveTasks();
//     }
//     if (event.target.classList.contains("del-btn")) {
//         event.target.parentElement.remove();
//         saveTasks();
//     }
// });

// // add Button function
// function ensureDeleteButton(li) {
//     if (li.querySelector(".del-btn")) return;
    
//     const delBtn = document.createElement("button");
//     delBtn.textContent = "❌";
//     delBtn.className = "del-btn";
    
//     li.appendChild(delBtn);

// }

// // add delete button to each li
// document.querySelectorAll("#task_list_ul li").forEach(ensureDeleteButton);

// function createTask(taskText, date, priority, done = false) {

//     const li = document.createElement("li");   
//     const span = document.createElement("span");

//     span.textContent = taskText;
//     if (done) span.classList.add("done");

//     const meta = document.createElement("small");
//     meta.textContent = `📅 ${date || "No date"} | ${priority}`;
//     meta.classList.add(`priority-${priority}`);

    
//     span.appendChild(meta);
//     li.appendChild(span);
//     ensureDeleteButton(li);
//     list.appendChild(li);
// }

// button.addEventListener("click", () => {
//     if (input.value === "") return ;

//     createTask(
//         input.value,
//         dateInput.value,
//         priorityInput.value
//     );

//     dateInput.value = "";
//     input.value = "";
//     saveTasks();
// })

// function saveTasks() {
//     localStorage.setItem("tasks", list.innerHTML);
// }

// function loadTasks() {
//     list.innerHTML = localStorage.getItem("tasks") || "";
// }


// filters.addEventListener("click", (e) => {
//     if (!e.target.dateset.filter) return;
    
//     document.querySelectorAll("#task_list_ul li").forEach(li => {
//         const done = li.querySelector("span").classList.contains("done");
        
//         li.style.display = e.target.dataset.filter === "all" ||
//         (e.target.dataset.filter === "completed" && done) ||
//         (e.target.dataset.filter === "pending" && !done)
//         ? "flex" : "none";
//     });
// });

// loadTasks();



















const TaskInput = document.getElementById("task_input");
const DateInput = document.getElementById("dateInput");
const PriorityInput = document.getElementById("priorityInput");
const AddButton = document.getElementById("Task_add_button");

const SearchInput = document.getElementById("Search_task_input");
const PriorityFilter = document.getElementById("priorityFilter");
const CategoryFilter = document.getElementById("categoryFilter");

const TaskList = document.getElementById("task_list_ul");

AddButton.addEventListener("click", function() {
    const taskText = TaskInput.value;

    if (taskText === "") {
        alert("Please enter a task");
        return;
    }
    const li = document.createElement("li");
    li.classList.add("task-item");
    li.draggable = true;

    //  DIV TASK_CONTENT
    const task_content = document.createElement("div");
    task_content.classList.add("task_content");

    const moving_handle = document.createElement("span");
    moving_handle.textContent = " : : ";
    moving_handle.classList.add("Moving_handle");
    
    const task_item_context = document.createElement("span");
    task_item_context.textContent = TaskInput.value;
    task_item_context.classList.add("task-item_context");

    task_content.appendChild(moving_handle);
    task_content.appendChild(task_item_context);

    // NON_TASK_META
    const NON_TASK_META = document.createElement("div");
    NON_TASK_META.classList.add("NON_TASK_META");

    const task_meta = document.createElement("span");
    task_meta.classList.add("task-meta");

    // CATEGORY
    const task_category = document.createElement("span");
    task_category.textContent = "Study"; // later from input
    task_category.classList.add("TASK_Category");

    // PRIORITY
    const task_priority = document.createElement("span");
    task_priority.textContent = PriorityInput.value;
    task_priority.classList.add("TASK_Priorities");

    // DUE DATE
    const task_due = document.createElement("span");
    task_due.textContent = DateInput.value || "No date";
    task_due.classList.add("TASK_Due");

    // assemble meta
    task_meta.appendChild(task_category);
    task_meta.appendChild(task_priority);
    task_meta.appendChild(task_due);

    //  TASK_ACTIONS
    const task_actions = document.createElement("div");
    task_actions.classList.add("task_actions");

    // CHECKBOX
    const task_checkbox = document.createElement("input");
    task_checkbox.type = "checkbox";
    task_checkbox.classList.add("task-toggle");

    // EDIT BUTTON
    const edit_btn = document.createElement("button");
    edit_btn.textContent = "✏️";
    edit_btn.classList.add("edit-task");

    // DELETE BUTTON
    const delete_btn = document.createElement("button");
    delete_btn.textContent = "❌";
    delete_btn.classList.add("delete-task");

    // assemble actions
    task_actions.appendChild(task_checkbox);
    task_actions.appendChild(edit_btn);
    task_actions.appendChild(delete_btn);

    NON_TASK_META.appendChild(task_meta);
    NON_TASK_META.appendChild(task_actions);


    li.appendChild(task_content);
    li.appendChild(NON_TASK_META);

    TaskList.appendChild(li);

    console.log("Valid task:", taskText);
});