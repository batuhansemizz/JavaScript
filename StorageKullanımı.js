//! Storage Kullanımı

//* Local Storage
//* Session Storage

/*

1.Süreklilik:
Local Storage: Tarayıcı kapansa bile veriler saklanır. 
Kullanıcı verileri silene kadar veya programatik olarak temizlenene kadar kalıcı olarak kalır.
Session Storage: Veriler yalnızca ilgili tarayıcı sekmesi açık olduğu sürece saklanır. 
Sekme kapatıldığında veriler silinir.


2. Erişim Kapsamı:
Local Storage: Aynı kökene (domain) sahip tüm pencereler ve sekmeler arasında paylaşılır.
Yani, farklı sekmelerde veya pencerelerde aynı siteyi açtığınızda, local storage'daki verilere her yerden erişilebilir.
Session Storage: Verilere yalnızca aynı sekme veya pencere içinden erişilebilir. 
Farklı sekmeler, hatta aynı siteyi açsalar bile, birbirlerinin session storage'ına erişemezler.

*/


//* Session Storage Kullanımı

//? Değer Ekleme
                      //? key, //?value
sessionStorage.setItem("name","Mehmet");  //* set Atamak demektir.
sessionStorage.setItem("surname","demir");

//? Değer Okuma

console.log(sessionStorage.getItem("name"));

//? Değer Silme

sessionStorage.removeItem("name");  //* Mesela mehmeti kaldırmak için onun keyini yazıyoruz.

//? Tüm değerleri silme

sessionStorage.clear();

//* Session Storage ile array yazdırma 

let names = ["Mehmet","Ahmet","Ayşe","Fatma"];
sessionStorage.setItem("names",JSON.stringify(names)); //* JSON.stringify() ile dizi stringe çevrildi.

let values = JSON.parse(sessionStorage.getItem("names")); //* JSON.parse() ile string tekrar dizi haline getirildi.
values.forEach(function (name) {                         //* çünkü for ile dönememiz için diziyi stringe çevirmemiz gerekiyor.
    console.log(name);
  })



  //! local storage ile aynı işlemler yapılır. değişen hiç bir şey yok.