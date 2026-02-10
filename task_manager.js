
const input = document.getElementById("task_input");
const button = document.getElementById("Task_add_button");
const list = document.getElementById("task_list_ul");

list.addEventListener("click", (event) => {
    if (event.target.tagName === "LI") {
        event.target.classList.toggle("done");
    }
});

// add Button function
function ensureDeleteButton(li) {
    if (li.querySelector(".del-btn")) return;
    
    const delBtn = document.createElement("button");
    delBtn.textContent = "❌";
    delBtn.className = "del-btn";

    delBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        li.remove();
    })
    
    li.appendChild(delBtn);

}

// add delete button to each li
document.querySelectorAll("#task_list_ul li").forEach(ensureDeleteButton);

button.addEventListener("click", () => {
    if (input.value === "") return ;

    const li = document.createElement("li");
    li.textContent = input.value;

    const span = document.createElement("span");
    
    ensureDeleteButton(li);
    
    list.appendChild(li);
    input.value = "";
})