//! DOM

//* document object model


const  button = document.getElementById("todoAddButton");

console.log(button); //* output: <button id="todoAddButton" type="submit"  class="btn btn-primary mt-4 btn-sm">Todo Ekleyin</button>
console.log(button.id); //* output: todoAddButton
console.log(button.className); //* output: btn btn-primary mt-4 btn-sm
console.log(button.getAttribute("type")); //* output: submit
console.log(button.getAttribute("class")); //* output: btn btn-primary mt-4 btn-sm


const classListesi = button.classList;
const classListesi2 = button.classList[3]; //* bunun anlamı  classListesi[3] demek istediğimizde 3. indexteki değeri alırız.

console.log(classListesi); //* output: DOMTokenList(4) ['btn', 'btn-primary', 'mt-4', 'btn-sm', value: 'btn btn-primary mt-4 btn-sm']
console.log(classListesi2); //* output: btn-sm

classListesi.forEach(function(item){
    console.log(item);
});//* classListesi içindeki her bir itemi console'a yazdırdık.

let buttonText = button.textContent;
console.log(buttonText); //* output: Todo Ekleyin


let buttonHtml = button.innerHTML;
console.log(buttonHtml); //* output: Todo Ekleyin


const todolist = document.getElementsByClassName("list-group-item");
console.log(todolist); //* output: <ul id="list-group" class="list-group"></ul>

const todolist1 = Array.from(document.getElementsByClassName("list-group-item"));
todolist1.forEach(function(item){
    console.log(item.textContent);
});

//! tagname ile çalışmak etiket ismi ile çalışır.

const tagName = document.getElementsByTagName("li");
console.log(tagName); //* output: HTMLCollection(4) [li, li, li, li]

const tagName1 = Array.from(document.getElementsByTagName("li"));
tagName1.forEach(function(item){
    console.log(item.textContent);
});



//! querySelector & querySelectorAll ile çalışmak

const querySelector = document.querySelector("#list-group .list-group-item"); //? id ile seçilir.
console.log(querySelector); //* output: <li class="list-group-item d-flex justify-content-between">Todo 1</li>
console.log(querySelector); //* output: Todo 1
const querySelectorAll = document.querySelectorAll("#list-group .list-group-item"); //? id ile seçilir.
console.log(querySelectorAll); //* output: NodeList(4) [li.list-group-item, li.list-group-item, li.list-group-item, li.list-group-item]

const todolist2 = document.querySelector(".list-group-item"); //? class ile seçilir.
console.log(todolist2); //* output: <li class="list-group-item d-flex justify-content-between">Todo 1</li>
console.log(todolist2.textContent); //* output: Todo 1

const todolist3 = document.querySelectorAll(".list-group-item"); //? class ile seçilir.
console.log(todolist3); //* output: NodeList(4) [li.list-group-item, li.list-group-item, li.list-group-item, li.list-group-item]

const todolist4 = document.querySelectorAll(".list-group-item")[0]; //? buraya inndex numarası vererek istediğimiz elamanı getiririz
console.log(todolist4); //* output: <li class="list-group-item d-flex justify-content-between">Todo 1</li>
console.log(todolist4.textContent); //* output: Todo 1
console.log(todolist4); //* output: <li class="list-group-item d-flex justify-content-between">Todo 1</li>


const todolist5 = document.querySelectorAll(".list-group-item:nth-child(2)"); //? burada 2. indexteki elemanı seçer.


//* odd ve even ile çalışmak

const todolist6 = document.querySelectorAll(".list-group-item:nth-child(odd)"); //? burada odd olanları seçer.
const todolist7 = document.querySelectorAll(".list-group-item:nth-child(even)"); //? burada even olanları seçer.