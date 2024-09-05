//! Eventler

//* ADD EVENT LISTENER


const clearButton = document.querySelector("#clearButton");

clearButton.addEventListener("click",changeTitle);

function changeTitle(){
    const title = document.querySelectorAll(".card-title")[1];
    title.textContent = "Todo Listesi - Yeni";
}
