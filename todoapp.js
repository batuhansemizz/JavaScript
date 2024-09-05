//! element seçimi 


const form = document.querySelector("#todoAddForm"); // ID düzeltildi ve değişken adı daha anlamlı hale getirildi
const addInput = document.querySelector("#todoName");
const todolist = document.querySelector(".list-group");
const FirstcardBody = document.querySelectorAll(".card-body")[0];
const SecondcardBody = document.querySelectorAll(".card-body")[1];
const clearButton = document.querySelector("#clearButton");

let todos = [];
//*  
runEvents();

function runEvents(){
    form.addEventListener("submit", addTodo); // 'form' değişkeni kullanıldı
    document.addEventListener("DOMContentLoaded",pageload);
    SecondcardBody.addEventListener("click",deleteTodo);
}

function deleteTodo(e){

    //? ekrandan silme
    if(e.target.className === "fa fa-remove"){
        e.target.parentElement.parentElement.remove();
    }

    //? storage dan silme
    deleteTodoFromStorage(e.target.parentElement.parentElement.textContent);


}


function deleteTodoFromStorage(deleteTodo){
    checkTodosFromStorage();
    todos.forEach(function(todo,index){
        if(todo === deleteTodo){
            todos.splice(index,1);
        }
    });
    localStorage.setItem("todos",JSON.stringify(todos));
}

function addTodo(e){
    
    const inputText = addInput.value.trim();
    if(inputText === "" || inputText === null){
        alert("Lütfen bir değer giriniz");
        showAlert("warning","Lütfen bir değer giriniz");
    }
    else{
          //* Önyüze ekleme
        addTodoToUI(inputText);
          //* storage ekleme
        addTodoToStorage(inputText);
        showAlert("success","Todo başarıyla eklendi");
    }

    e.preventDefault();  //* formun default davranışını engelledik.
}

function addTodoToUI(newTodo){
    //* li oluşturma
    const li = document.createElement("li");
    //* a oluşturma
    const a = document.createElement("a");
    //* i oluşturma
    const i = document.createElement("i");

    li.className = "list-group-item d-flex justify-content-between align-items-center";
    li.textContent = newTodo;
    a.href = "#";
    a.className = "delete-item";
    i.className = "fa fa-remove";

    a.appendChild(i);
    li.appendChild(a);
    todolist.appendChild(li);

    addInput.value = "";
    
}

function checkTodosFromStorage(){
    if(localStorage.getItem("todos") === null){
        todos = [];
    }
    else{
        todos = JSON.parse(localStorage.getItem("todos"));
    }
}

function addTodoToStorage(newTodo){
   checkTodosFromStorage();
   todos.push(newTodo);

   localStorage.setItem("todos", JSON.stringify(todos));
}


function showAlert(type ,message) {
    const alert = document.createElement("div");
    alert.className = "alert alert-" + type + " mt-4 mb-0";
    alert.textContent =message;
    FirstcardBody.appendChild(alert);

    setTimeout(() => {
        alert.remove();
    }, 2000);
}

function pageload(){
    checkTodosFromStorage();
    todos.forEach(function(todo) {
        addTodoToUI(todo);
    });
}











