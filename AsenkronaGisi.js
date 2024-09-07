//! JavaScript senkron çalışan bir programlama dilidir.

//* Timing - Zamanla alakalı fonksiyonlar
//* Events
//* HTTPS isteklerden

//? JS bu tür işlemlerden asenkron olarak çalışır. Diğer işlemlerde senkron çalışır.


console.log("batuhan") //? bu ve diğer console.log senkron olduğu için çalıştı 

setTimeout(() => {
    console.log("süre doldu")  //? ama bu asenkron olduğu için 1 saniye sonra çalışır
},1000);

setTimeout(() => {
    console.log("süre doldu 2")  //? ama bu asenkron olduğu için 1 saniye sonra çalışır
},2000);

console.log("semiz")  //? bu ve diğer console.log senkron olduğu için çalıştı 


//! Burası önemli 

//? Derleyice kodlar yukarıdan aşağıya okunuyor ilk console.log()'u okudu ama diğer conosolu okudu
//? ama setTimeout()'un içindeki kodları okumadı ve 1 saniye sonra çalıştırdı. bunu sebebi ise =>
//? JS de timing işlemleri asenkron bir şekilde çalıştığı için setTimeout() 1 saniye sonra çalıştı.

