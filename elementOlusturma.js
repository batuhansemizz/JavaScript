//! Element Oluşturma
const cardbody = document.querySelectorAll(".card-body")[1];
const link = document.createElement("a");




link.id = "blogWeb";
link.className = "btn btn-dark btn-sm mt-3";
link.href = "http://www.google.com";
link.target = "_blank";
link.innerHTML = "Blog Web";

cardbody.appendChild(link); //* append Türkçede ilave etmek demektir. 
//* çocuğa ilave et.



//! Element Oluşturma
const todo = document.createElement("li");
const todolink = document.createElement("a");
const i = document.createElement("i");
const ul = document.querySelector("ul");

todo.className = "list-group-item d-flex justify-content-between";
todo.innerHTML = "Todo 5";
todolink.className = "delete-item";
todolink.href = "#";
i.className = "fa fa-remove";


todolink.appendChild(i);
todo.appendChild(todolink);
ul.appendChild(todo);



console.log(link);




