function addtask(){
    const inputtask = document.querySelector(".input");
    const tasklist = document.querySelector(".tasklist")

    const tasktext = inputtask.value.trim();
    if(inputtask === ""){
        alert("Please enter a task")
        return;
    }

    const li = document.createElement("li");
    li.innerHTML = `
    <input type="checkbox" class="chk-box">
    <span>${tasktext}</span>
    <button class="delete-btn" onclick="deletetask(this)">X</button>
    `;
    tasklist.appendChild(li);
    inputtask.value = ""   // Clear the input field
}

function deletetask(button){
    const li = button.parentElement;
    li.remove()
}
function deleteselected(){
    const checkboxes = document.querySelectorAll(".chk-box");
    checkboxes.forEach(chkbox  => {
        if(chkbox.checked){
            chkbox.parentElement.remove();
        }

    })
}
