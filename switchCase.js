//! switch case

/* let sayı = prompt("Lütfen 1 ile 5 arasında bir sayı giriniz: "); */

/* switch (sayı) {
    case "1": //! string tipinde olduğu için çift tırnak içinde yazılır.
        console.log("sayı 1 dir.");
        break;
    case "2":
        console.log("sayı 2 dir.");
        break;
    case "3":
        console.log("sayı 3 tür.");
        break;
    case "4":
        console.log("sayı 4 tür.");
        break;
    case "5":
        console.log("sayı 5 tür.");
        break;
    default:
        console.log("Lütfen 1 ile 5 arasında bir sayı giriniz.");
}  */

/* let yeniSatır = "\r\n";

let metin =
  "1-Pazartesi" +
  yeniSatır +
  "2-Salı" +
  yeniSatır +
  "3-Çarşamba" +
  yeniSatır +
  "4-Perşembe" +
  yeniSatır +
  "5-Cuma" +
  yeniSatır +
  "lütfen bir gün seçin";


let deger = prompt(metin);
switch (deger) {
  case "1":
    console.log("pazartesi");
    break;
  case "2":
    console.log("salı");
    break;
  case "3":
    console.log("çarşamba");
    break;
  case "4":
    console.log("perşembe");
    break;
  case "5":
    console.log("cuma");
    break;
  default:
    console.log("Lütfen 1 ile 5 arasında bir sayı giriniz.");
} */



  /*  let bakiye = 1000;

    let metin = "1-Bakiye sorgula" +
    "\r\n" +
    "2-Para yatır" +
    "\r\n" +
    "3-Para çek" + 
    "\r\n" +
    "4-Çıkış yap";


    let secim = prompt(metin);

    switch (secim) {
        case "1":
            console.log("Bakiyeniz: " + bakiye);
            break;
        case "2":
            let yatırılacakMiktar = Number(prompt("Yatırmak istediğiniz miktarı giriniz: "));
            bakiye += yatırılacakMiktar;
            console.log("Yeni bakiyeniz: " + bakiye);
            break;
        case "3":
            let cekilecekMiktar = Number(prompt("Çekmek istediğiniz miktarı giriniz: "));
            if (cekilecekMiktar > bakiye) {
                console.log("Bakiyeniz yetersiz.");
            } else {
                bakiye -= cekilecekMiktar;
                console.log("Yeni bakiyeniz: " + bakiye);
            }
            break;
        case "4":
            console.log("Çıkış yapılıyor...");
            break;
        default:
            console.log("Lütfen geçerli bir işlem seçiniz.");
    }  */




let turkceDogru , turkceYanlıs = 0;
let matematikDogru , matematikYanlıs = 0;
let edebiyatDogru , edebiyatYanlıs = 0; 
let fenDogru , fenYanlıs = 0;
let sosyalDogru , sosyalYanlıs = 0;

let mesaj = "1-Türkçe" +
"\r\n" +
"2-Matematik" +
"\r\n" +
"3-Edebiyat" +
"\r\n" +
"4-Fen Bilgisi" +
"\r\n" +
"5-Sosyal Bilgiler" +
"\r\n" +
"6-Toplam puanımı göster";


let osymPuanı = 100;
let OkulPuanı = 60;

let puanlarToplam = osymPuanı + OkulPuanı;

let secim = prompt(mesaj);

switch (secim) {
    case "1":
        console.log("Türkçe doğrunuzu giriniz: ");
        let turkceDogru = Number(prompt("Doğru sayısını giriniz: "));
        let turkceDogruSoruPuanı = 4;
       let turkceNetPuanı = turkceDogru * turkceDogruSoruPuanı;
       console.log("Türkçe net puanınız: " + turkceNetPuanı);
        break;
    case "2":
        console.log("Matematik doğrunuzu giriniz: ");
        let matematikDogru = Number(prompt("Doğru sayısını giriniz: "));
        let matematikDogruSoruPuanı = 4;
        let matematikNetPuanı = matematikDogru * matematikDogruSoruPuanı;
        console.log("Matematik net puanınız: " + matematikNetPuanı);
        break;
    case "3":
        console.log("Edebiyat doğrunuzu giriniz: ");
        let edebiyatDogru = Number(prompt("Doğru sayısını giriniz: "));
        let edebiyatDogruSoruPuanı = 4;
        let edebiyatNetPuanı = edebiyatDogru * edebiyatDogruSoruPuanı;
        console.log("Edebiyat net puanınız: " + edebiyatNetPuanı);
        break;
    case "4":
        console.log("Fen Bilgisi doğrunuzu giriniz: ");
        let fenDogru = Number(prompt("Doğru sayısını giriniz: "));
        let fenDogruSoruPuanı = 4;
        let fenNetPuanı = fenDogru * fenDogruSoruPuanı;
        console.log("Fen bilgisi net puanınız: " + fenNetPuanı);
    case "5":
        console.log("Sosyal Bilgiler doğrunuzu giriniz: ");
        let sosyalDogru = Number(prompt("Doğru sayısını giriniz: "));
        let sosyalDogruSoruPuanı = 4;
        let sosyalNetPuanı = sosyalDogru * sosyalDogruSoruPuanı;
        console.log("Sosyal bilgiler net puanınız: " + sosyalNetPuanı);
    case "6":
        console.log("Toplam puanınız: " + puanlarToplam );
        break;
    default:
        console.log("Lütfen geçerli bir işlem seçiniz.");
        
}








  
    
    


