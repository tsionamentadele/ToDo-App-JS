const task=document.querySelector("#task")
const add=document.querySelector("#add")
const taskList=document.querySelector("#task-list")

add.addEventListener("click",()=>{
    if(task.value.trim()==""){
       return
    }
    let task_value=task.value.trim()
    let li=document.createElement("li")
    li.textContent=task_value
    taskList.append(li)
    task.value = "";
    task.focus();

})
task.addEventListener("keypress", (e) => {
  if (e.key === "Enter") add.click();
});
