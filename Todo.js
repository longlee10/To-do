var bigtask = document.querySelector("#moretask"); //here 
var mytask = document.getElementById('mytask');
var progress = document.getElementById('progress');
var complete = document.getElementById('completed');

bigtask.addEventListener("click", functionalTask);//here
complete.addEventListener('click', functionalTask);
progress.addEventListener('click', functionalTask);

document.getElementById("button").onclick = createTask;

function createTask(){
    
    var div = document.createElement("div");
    div.id = "div"
    div.classList.add("divdiv");
    bigtask.appendChild(div);

    var input = document.createElement("div");
    input.id = "input";
    input.classList.add("input");
    input.innerText = mytask.value;
    mytask.value = "";
   
    div.appendChild(input);

    var remove = document.createElement("button");
    remove.id = "remove";
    remove.innerHTML = '<i class="fa fa-trash"></i>';
    remove.classList.add("removal");
    div.appendChild(remove);

    var progress = document.createElement("button");
    progress.id = "prg";
    progress.classList.add("progress");
    progress.innerHTML = '<i class="fa fa-hourglass"></i>';
    div.appendChild(progress);

    var complete = document.createElement("button");
    complete.id = "complete";
    complete.classList.add("complete");
    complete.innerHTML = '<i class="fa fa-check"></i>'
    div.appendChild(complete);

}

function functionalTask(e){ //here
    const item = e.target;

    if (item.classList[0] === "removal")
    {
        const todo = item.parentElement;
        todo.remove();
    }

    if(item.classList[0] === "progress" && item.parentElement.parentElement != progress){
        const todo = item.parentElement;
        progress.appendChild(todo);
    }
    
    if(item.classList[0] === "complete" && item.parentElement.parentElement != complete){
        const todo = item.parentElement;
        complete.appendChild(todo);

    }
}


document.getElementById("searchtask").onclick = filterTodo;

function filterTodo(option){
    //display completed task
    var moretask = document.getElementById("moretask");
    var divs = moretask.children;

    for(var i = 0; i<divs.length; i++)
    {
        
        if(option.target.value === "selectcomplete")
        {
            var div = divs[i];
            div.style.display = "none";
        }
    }

    var progress = document.getElementById("progress");
    var prgelements = progress.children;

    
    for(var i = 0; i<prgelements.length; i++)
    {
        var prgelement = prgelements[i];
        if(option.target.value === "selectcomplete")
        {
            prgelement.style.display = "none";
        }
        else{
            prgelement.style.display = "flex";
        }
    }

    //  display inprogress tasks

    var completedtasks = document.getElementById("completed");
    var taskscompletes = completedtasks.children;

    
    for(var i = 0; i<taskscompletes.length; i++)
    {
        var taskscomplete = taskscompletes[i];
        if(option.target.value === "selectuncompleted")
        {
            taskscomplete.style.display = "none";
        }
        else{
            taskscomplete.style.display = "flex";
        }
    }

    for(var i = 0; i<divs.length; i++)
    {
        var div = divs[i];
        if(option.target.value === "selectuncompleted")
        {
            div.style.display = "none";
        }
    }

// display all task

 for(var i = 0; i<divs.length; i++)
    {
        if(option.target.value === "selectall")
        {
            var div = divs[i];
            div.style.display = "flex";
        }
    }

        
    for(var i = 0; i<prgelements.length; i++)
    {
        if(option.target.value === "selectall")
        {
            var prgelement = prgelements[i];
            prgelement.style.display = "flex";
        }
    }

    for(var i = 0; i<taskscompletes.length; i++)
    {
        if(option.target.value === "selectall")
        {
            var taskscomplete = taskscompletes[i];
            taskscomplete.style.display = "flex";
        }
    }

}

