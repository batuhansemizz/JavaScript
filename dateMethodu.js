//! Date Methods

//* getFullYear(): Yılı döndürür (4 basamaklı).
//* getMonth(): Ayı döndürür (0-11 arası, 0 Ocak'tır).
//* getDate(): Ayın gününü döndürür (1-31 arası).
//* getDay(): Haftanın gününü döndürür (0-6 arası, 0 Pazar'dır).
//* getHours(): Saati döndürür (0-23 arası).
//* getMinutes(): Dakikayı döndürür (0-59 arası).
//* getSeconds(): Saniyeyi döndürür (0-59 arası).
//* getMilliseconds(): Milisaniyeyi döndürür (0-999 arası).
//* getTime(): 1 Ocak 1970'ten bu yana geçen milisaniye sayısını döndürür.

let simdi = new Date();
//? get Getir demektir.
console.log("Yıl:", simdi.getFullYear()); //* 2024
console.log("Ay:", simdi.getMonth() + 1);  //* 9  // +1 ekliyoruz çünkü 0'dan başlıyor
console.log("Gün:", simdi.getDate()); //* 3
console.log("Haftanın günü:", simdi.getDay()); //* 2
console.log("Saat:", simdi.getHours()); //* 16
console.log("Dakika:", simdi.getMinutes()); //* 57
console.log("Saniye:", simdi.getSeconds()); //* 40
console.log("Milisaniye:", simdi.getMilliseconds()); //* 490
console.log("Timestamp:", simdi.getTime()); //* 1716666599999

//! set i kullanarak tarihi değiştirebiliriz.
simdi.setFullYear(2025);
console.log(simdi); //? normalde 2024 olması gerekiyor ama set ile 2025 yaptık.


