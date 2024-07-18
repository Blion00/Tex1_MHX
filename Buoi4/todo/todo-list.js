document.getElementById("formTask").onsubmit=function(event){
    event.preventDefault();
    const inputNode= document.getElementById("inputTask");
    const taskText= inputNode.value.trim();
    if(taskText!==""){
        addTask(taskTest);
    }
}
function addTask(taskTest){
    const taskList=document.getElementById("tasks");
    const taskItem=document.createElement("li");
    taskItem.textContent=taskTest;
    taskItem.addEventListener("click",function(){
        taskItem.classList.toggle(completed);
    })
    const removeButton=document.createElement("button");
    removeButton.textContent="Remove";
    removeButton.addEventListener("click",function(){
        taskList.removeChild(taskItem);
    })
    taskItem.appendChild(removeButton);
    taskList.appendChild(taskItem);
}