//! SCOPE (KAPSAM)

//? Global scope
//? Function scope
//? Block scope


//* Global scope EN GENİŞ SCOPEDUR her yerde kullanılabilir

var a = 10;

function scope(){
    var b = 20;
   // console.log(a, b);
}

scope();


//* Function scope sadece fonksiyon içinde kullanılabilir



function method(){
    var c = 30;
    console.log(a, c); //! sadece fonksiyon içinde kullanılabilir olduğu için clg'yi func içinde yazdırdım.
}

method();


//* Block scope sadece blok içinde kullanılabilir

//? eğer buarada tanımlasaydık global scope olacaktı.
function block(){
    //? eğer buarada tanımlasaydık fonksiyon scope olacaktı.
    if(true){
        let d = 40; //? block scope oluyor burada 
        console.log(d);
    }
    console.log(d); //! d'nin değeri undefined olur çünkü d blok scope'da tanımlanmıştır ve blok scope'un dışında kullanılamaz.
}

block();
