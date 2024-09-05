//! Mouse Events

//* DOMContentLoaded
//* click
//* dblclick
//* mousedown
//* mouseup
//* mouseenter
//* mouseleave
//* mousemove
//* mouseover
//* mouseout

document.addEventListener("DOMContentLoaded", function () {
    console.log("Sayfa tamamen yüklendi!");
}); //? DOMContentLoaded eventi sayfa tamamen yüklendiğinde çalışır.

const button = document.querySelector("#myButton");
button.addEventListener("click", function () {
    console.log("Butona tıklandı!");
}); //? Butona tıklandığında çalışır.

const image = document.querySelector("#myImage");
image.addEventListener("dblclick", function () {
    console.log("Resme çift tıklandı!");
}); //? Resme çift tıklandığında çalışır.

const box = document.querySelector("#myBox");
box.addEventListener("mousedown", function () {
    console.log("Fare düğmesine basıldı!");
}); //? Fare düğmesine basıldığında çalışır.

const menu = document.querySelector("#myBox");
box.addEventListener("mouseup", function () {
    console.log("Fare düğmesi bırakıldı!");
}); //? Fare düğmesi bırakıldığında çalışır.

const menu1 = document.querySelector("#myMenu");
menu.addEventListener("mouseleave", function () {
    console.log("Menüden ayrıldı!");
}); //? Menüden ayrıldığında çalışır.

const screen = document.querySelector("#myScreen");
screen.addEventListener("mousemove", function (event) {
    console.log(`Fare konumu: ${event.clientX}, ${event.clientY}`);
}); //? Fare konumu değiştiğinde çalışır.

const info = document.querySelector("#myInfo");
info.addEventListener("mouseover", function () {
    console.log("Bilgi alanının üzerine gelindi!");
}); //? Bilgi alanının üzerine gelindiğinde çalışır.

const info1 = document.querySelector("#myInfo");
info.addEventListener("mouseout", function () {
    console.log("Bilgi alanından ayrıldı!");
}); //? Bilgi alanından ayrıldığında çalışır.
