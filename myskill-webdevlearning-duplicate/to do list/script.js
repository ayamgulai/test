//declare addButton and todoEntryBox
var addButton = document.getElementById("add-button");
addButton.addEventListener("click", addToDoItem);
function addToDoItem() {
    alert("Add button clicked!");
}

var todoEntryBox = document.getElementById("todo-entry");
var toDoList = document.getElementById("todo-list");

function newToDoItem(itemText,completed){
    var toDoItem = document.createElement("li");
    var toDoText = document.createTextNode(itemText);

    toDoItem.appendChild(toDoText);

    if(completed){
        toDoItem.classList.add('completed');
    }
    toDoList.appendChild(toDoItem);
    toDoItem.addEventListener("dblclick",changeToDoItemStat);
}

function addToDoItem(){
    var itemText = todoEntryBox.value;
    newToDoItem(itemText,false);
}

function changeToDoItemStat(){
    if(this.classList.contains("completed")){
        this.classList.remove("completed");
    } else {
        this.classList.add("completed");
    }
}

function clearCompleted(){
    var completedItems = toDoList.getElementsByClassName("completed");

    while(completedItems.length > 0) {
        completedItems.item(0).remove();
    }
}

function emptyList(){
    var toDoItems = toDoList.children;
    while(toDoItems.length > 0){
        toDoItems.item(0).remove();
    }
}

//make the to-do list saved in a dataset
var myArray = ["something to store", "something else to store"];
alert(myArray[0]);
var toDoInfo = {
    "task":"Thing I need to do",
    "completed":false
};


function saveList(){
    var todos = [];
    for(var i = 0; i < toDoList.children.length; i++) {
        var todo = toDoList.children.item(i);
        var toDoInfo = {
            "task": todo.innerText,
            "completed": todo.classList.contains("completed")
        };
        todos.push(toDoInfo);
    }
    localStorage.setItem("toDos",JSON.stringify(todos));
    console.log("succeed")
}

function loadList(){
    if(localStorage.getItem("toDos") != null){
        var todos = JSON.parse(localStorage.getItem("toDos"));
        for(var i = 0; i<todos.length;i++){
            var todo = todos[i];
            newToDoItem(todo.task,todo.completed);
        }
    }
}

loadList();
