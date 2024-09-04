//! Dizi Methodları

//* push(): Dizinin sonuna bir veya daha fazla eleman ekler.
//* pop(): Dizinin son elemanını çıkarır ve bu elemanı döndürür.
//* unshift(): Dizinin başına bir veya daha fazla eleman ekler.
//* shift(): Dizinin ilk elemanını çıkarır ve bu elemanı döndürür.
//* indexOf(): Belirtilen elemanın dizideki ilk indeksini döndürür.
//* lastIndexOf(): Belirtilen elemanın dizideki son indeksini döndürür.
//* slice(): Dizinin belirli bir kısmını yeni bir dizi olarak döndürür.
//* splice(): Diziden eleman siler veya yeni eleman ekler.
//* concat(): İki veya daha fazla diziyi birleştirir.
//* join(): Dizi elemanlarını birleştirerek string oluşturur.
//* forEach(): Dizinin her elemanı için bir fonksiyon çalıştırır.
//* map(): Her eleman için bir fonksiyon çalıştırır ve sonuçlardan yeni bir dizi oluşturur.
//* filter(): Belirli bir koşulu sağlayan elemanlardan yeni bir dizi oluşturur.
//* reduce(): Diziyi tek bir değere indirger.
//* find(): Koşulu sağlayan ilk elemanı döndürür.
//* findIndex(): Koşulu sağlayan ilk elemanın indeksini döndürür.
//* every(): Tüm elemanların belirli bir koşulu sağlayıp sağlamadığını kontrol eder.
//* some(): En az bir elemanın belirli bir koşulu sağlayıp sağlamadığını kontrol eder.
//* includes(): Dizinin belirli bir elemanı içerip içermediğini kontrol eder.
//* sort(): Diziyi sıralar.
//* reverse(): Dizinin elemanlarının sırasını tersine çevirir.
//* fill(): Diziyi statik bir değerle doldurur.
//* flat(): İç içe geçmiş dizileri düzleştirir.
//* flatMap(): map() ve ardından flat() uygular.
//* Array.from(): Dizi benzeri veya yinelenebilir bir nesneden yeni bir dizi oluşturur.
//* Array.of(): Verilen argümanlarla yeni bir dizi oluşturur.
//* Array.isArray(): Bir nesnenin dizi olup olmadığını kontrol eder.


let arry = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//* push(): Dizinin sonuna bir veya daha fazla eleman ekler.
arry.push(11, 12, 13);
console.log(arry);

//* pop(): Dizinin son elemanını çıkarır ve bu elemanı döndürür.
let sonEleman = arry.pop();
console.log(sonEleman);

//* unshift(): Dizinin başına bir veya daha fazla eleman ekler.
arry.unshift(0, -1, -2);
console.log(arry);

//* shift(): Dizinin ilk elemanını çıkarır ve bu elemanı döndürür.
let ilkEleman = arry.shift();
console.log(ilkEleman);

//* indexOf(): Belirtilen elemanın dizideki ilk indeksini döndürür.
let index = arry.indexOf(5);

//* lastIndexOf(): Belirtilen elemanın dizideki son indeksini döndürür.
let sonIndex = arry.lastIndexOf(10);
console.log(sonIndex);

//* slice(): Dizinin belirli bir kısmını yeni bir dizi olarak döndürür.
let yeniDizi = arry.slice(2, 5);
console.log(yeniDizi);

//* splice(): Diziden eleman siler veya yeni eleman ekler.
let silinenElemanlar = arry.splice(2, 3);
console.log(silinenElemanlar);

//* concat(): İki veya daha fazla diziyi birleştirir.
let dizi1 = [1, 2, 3];
let dizi2 = [4, 5, 6];
let dizi3 = [7, 8, 9];
let birlesmisDizi = dizi1.concat(dizi2, dizi3); 
console.log(birlesmisDizi);

//* join(): Dizi elemanlarını birleştirerek string oluşturur.
let dizi = [1, 2, 3, 4, 5];
let string = dizi.join(", ");
console.log(string);

//* forEach(): Dizinin her elemanı için bir fonksiyon çalıştırır.   
let sayilar = [1, 2, 3, 4, 5];  
sayilar.forEach(function(sayi){
    console.log(sayi);  //? output: 1 2 3 4 5
});

//* map(): Her eleman için bir fonksiyon çalıştırır ve sonuçlardan yeni bir dizi oluşturur.
let sayilar2 = [1, 2, 3, 4, 5];
let kareler = sayilar2.map(function(sayi){
    return sayi * sayi;
});
console.log(kareler);  //? output: 1 4 9 16 25

//* filter(): Belirli bir koşulu sağlayan elemanlardan yeni bir dizi oluşturur.
let sayilar3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let ciftSayilar = sayilar3.filter(function(sayi){
    return sayi % 2 === 0;
});
console.log(ciftSayilar);  //? output: 2 4 6 8 10

//* reduce(): Diziyi tek bir değere indirger.
let sayilar4 = [1, 2, 3, 4, 5];

//* find(): Koşulu sağlayan ilk elemanı döndürür.
let sayilar5 = [1, 2, 3, 4, 5];
let ilkBuyukSayi = sayilar5.find(function(sayi){
    return sayi > 3;
});
console.log(ilkBuyukSayi);  //? output: 4

//* findIndex(): Koşulu sağlayan ilk elemanın indeksini döndürür.
let sayilar6 = [1, 2, 3, 4, 5];

//* every(): Tüm elemanların belirli bir koşulu sağlayıp sağlamadığını kontrol eder.
let sayilar7 = [1, 2, 3, 4, 5];
let tumBuyukMu = sayilar7.every(function(sayi){
    return sayi > 0;
});
console.log(tumBuyukMu);  //? output: true

//* some(): En az bir elemanın belirli bir koşulu sağlayıp sağlamadığını kontrol eder.
let sayilar8 = [1, 2, 3, 4, 5];

//* includes(): Dizinin belirli bir elemanı içerip içermediğini kontrol eder.
let sayilar9 = [1, 2, 3, 4, 5];
let varMi = sayilar9.includes(3);
console.log(varMi);  //? output: true

//* sort(): Diziyi sıralar.
let sayilar10 = [5, 3, 8, 1, 2];
sayilar10.sort();
console.log(sayilar10);  //? output: 1 2 3 5 8

