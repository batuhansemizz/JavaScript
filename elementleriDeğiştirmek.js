//! Elementlerde yer değişimi 

const cardBody = document.querySelectorAll(".card-body")[1];

const newTitle = document.createElement("h2")
newTitle.className="card-title";
newTitle.textContent="todo listesi - yeni";

cardBody.replaceChild(newTitle,cardBody.childNodes[1]);