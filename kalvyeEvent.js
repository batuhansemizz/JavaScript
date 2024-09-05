//! Keyboard Events


document.addEventListener("keydown", function(event){
    console.log(`Klavye tuşuna basıldı! ${event.key}`);
}); //? Hepsinde çalışır.

document.addEventListener("keyup", function(event){
    console.log(`Klavye tuşuna basıldı! ${event.key}`);
}); //? Klavye tuşundan elini kaldırdığında çalışır.

document.addEventListener("keypress", function(event){
    console.log(`Klavye tuşuna basıldı! ${event.key}`);
}); //? Harf ve sayılarda tetiklenir.



const cardTitle = document.querySelectorAll(".card-title")[0];
const input = document.querySelector("#todoName");

input.addEventListener("keydown",run)

function run(event){
    cardTitle.textContent = event.target.value;
}
