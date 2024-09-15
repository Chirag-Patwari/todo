// let tasks = []
let count = 0

function addTask(){
    // alert("added")
    let newtask = {
        name:document.getElementById("newTask").value,
        created:new Date().toLocaleString(),
        id:"task"+count
    }
    // tasks.push(newtask)
    count++
    let newtaskEl = document.createElement("div")
    newtaskEl.innerHTML = '<div class="col-11 ps-4 p-3 "><h1>'+newtask.name+'</h1><p>Created: '+newtask.created+'</p></div><div class="col-1"><button onclick="deleteTask(\''+newtask.id+'\')" class="btn btn-danger">X</button></div>'
    newtaskEl.id = newtask.id
    newtaskEl.classList.add('row', 'task', 'm-3', 'align-items-center', 'text-start')
    document.getElementById("tasklist").appendChild(newtaskEl)

    // alert(newtask)

}
function deleteTask(id){
    document.getElementById(id).remove()

}