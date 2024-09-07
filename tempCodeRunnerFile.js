//* CallBack : bir fnc.den bir fnc.ye parametre geçerek aseknron yapıyı senkrona çeviririz.
function GetName(callback){
    setTimeout(() => {
        let name = "batuhan"; //* örneğin bir webServer dan isim bilgisi alıyoruz.
        callback(name);
    }, 1000);
}

function GetSurname(name){
    setTimeout(() => {
        let surname = "semiz"; //* örneğin bir webServer dan soyisim bilgisi alıyoruz.
        console.log(name , surname);
    }, 500);
}


GetName(GetSurname);