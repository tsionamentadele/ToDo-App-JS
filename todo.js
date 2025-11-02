const task=document.querySelector("#task")
const add=document.querySelector("#add")
const taskList=document.querySelector("#task-list")
const li=document.querySelector("li")

add.addEventListener("click",()=>{
    if(task.value.trim()==""){
       return
    }
    let task_value=task.value.trim()
    let li=document.createElement("li")
    let delete_task=document.createElement("button")
    delete_task.textContent="Delete"
    delete_task.classList.add("delete_task")

    const span = document.createElement("span");
    span.textContent = task_value;

    li.append(span);
    li.append(delete_task);
    taskList.append(li);


    task.value = "";
    task.focus();

    delete_task.addEventListener("click",()=>{
        li.remove()
    })

})
task.addEventListener("keypress", (e) => {
  if (e.key === "Enter") add.click();
});

taskList.addEventListener("click", (e) => {
  const target = e.target;
  if (target.tagName === "SPAN") {
    target.classList.toggle("done"); 
  }
});


