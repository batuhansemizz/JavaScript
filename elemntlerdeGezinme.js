/*const todo = document.querySelector(".list-group-item");
const todolist = document.querySelector(".list-group");
const card = document.querySelector(".card");

let value;


//* Anneden çocuklara  erişmek 
/*
value = todolist.children; //* sadece bu cocuğu aldersek => [0] bu tarz bir kullanım yaparız
value = todolist.children[0];
value = todolist.children[1];
value = todolist.children[todolist.children.length - 1];
//? Mesela 500 tane cocuk varsa ve sonuncusunu almak istiyorsak => todolist.children.length - 1 yaparız
value = todolist.firstElementChild; //* ilk cocuk
value = todolist.lastElementChild; //* son cocuk
value = todolist.children[3].textContent = "Değiştirildi";
//? 3. indexte olan texti değiştirir
*/

/*value = Array.from(todolist.children);
value.forEach(function(item){
    item.textContent = "Değiştirildi";
});*/ //* Tek tek değiştirmek yerine forEach ile değiştirebiliriz



//* Çocuktan Anneye erişmek

/*value = todo;
value = todo.parentElement;
value = todo.parentElement.parentElement;
value = todo.parentElement.parentElement.parentElement; */

//? Çcocuktan anneye geçerken parentElement'i kullanırız
 
//* Kardeşler arasında gezinmek

/* value = todo;
value = todo.nextElementSibling;
value = todo.nextElementSibling.nextElementSibling;

value = todo.previousElementSibling; // Bir önceki kardeş elementi
value = todo.previousElementSibling.previousElementSibling; // İki önceki kardeş elementi  */



const row = document.querySelector(".row");


let value;

value = row.children[0].children[3].children[2].children[2];
value.textContent = "Değiştirildi";

console.log(value);


