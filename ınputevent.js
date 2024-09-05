//! Input evenst

//* Focus
//* Blur
//* Copy 
//* Cut
//* Paste
//* Select

const todo = document.querySelector("#todoName");

todo.addEventListener("focus",run);
todo.addEventListener("blur",run);
todo.addEventListener("copy",run);
todo.addEventListener("cut",run);
todo.addEventListener("paste",run);
todo.addEventListener("select",run);

function run(event){
    console.log(event.type);
} 

