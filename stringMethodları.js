//! string methodları




//* length: Stringin uzunluğunu döndürür (aslında bir özellik, metod değil).
//* charAt(): Belirtilen indeksteki karakteri döndürür.
//* charCodeAt(): Belirtilen indeksteki karakterin Unicode değerini döndürür.
//* concat(): İki veya daha fazla stringi birleştirir.
//* indexOf(): Belirtilen değerin ilk bulunduğu indeksi döndürür.
//* lastIndexOf(): Belirtilen değerin son bulunduğu indeksi döndürür.
//* slice(): Stringin belirli bir kısmını çıkarır ve yeni bir string olarak döndürür.
//* substring(): İki indeks arasındaki karakterleri çıkarır.
//* substr(): Belirtilen indeksten başlayarak belirli sayıda karakteri çıkarır.
//* toLowerCase(): Tüm karakterleri küçük harfe çevirir.
//* toUpperCase(): Tüm karakterleri büyük harfe çevirir.
//* trim(): Baştaki ve sondaki boşlukları kaldırır.
//* trimStart(): Baştaki boşlukları kaldırır.
//* trimEnd(): Sondaki boşlukları kaldırır.
//* replace(): Belirtilen değeri veya deseni başka bir değerle değiştirir.
//* replaceAll(): Belirtilen değerin tüm örneklerini başka bir değerle değiştirir.
//* split(): Stringi belirli bir ayırıcıya göre böler ve bir dizi oluşturur.
//* includes(): Stringin belirli bir alt stringi içerip içermediğini kontrol eder.
//* startsWith(): Stringin belirli bir değerle başlayıp başlamadığını kontrol eder.
//* endsWith(): Stringin belirli bir değerle bitip bitmediğini kontrol eder.
//* padStart(): Stringin başına belirli bir karakter ekleyerek belirli bir uzunluğa ulaşmasını sağlar.
//* padEnd(): Stringin sonuna belirli bir karakter ekleyerek belirli bir uzunluğa ulaşmasını sağlar.
//* repeat(): Stringi belirtilen sayıda tekrarlar.
//* match(): Bir string içinde regular expression'a uyan değerleri arar.
//* search(): Bir string içinde regular expression'a uyan ilk eşleşmenin indeksini döndürür.
//* localeCompare(): İki stringi karşılaştırır ve sıralama açısından konumlarını belirler.
//* toString(): String nesnesini ilkel string değerine dönüştürür.
//* valueOf(): String nesnesinin ilkel değerini döndürür.


let str1 = "Merhaba";
console.log(str1.length); // 7
charAt()



let str2 = "Merhaba";
console.log(str2.charAt(1)); // "e"
charCodeAt()



let str3 = "Merhaba";
console.log(str3.charCodeAt(0)); // 77 (M'nin Unicode değeri)
concat()



let str4 = "Merhaba ";
let str5 = "Dünya";
console.log(str4.concat(str5)); // "Merhaba Dünya"
indexOf()




let str6 = "Merhaba Dünya";
console.log(str6.indexOf("Dünya")); // 8
lastIndexOf()



let str7 = "Merhaba Dünya Merhaba";
console.log(str7.lastIndexOf("Merhaba")); // 14
slice()



let str8 = "Merhaba Dünya";
console.log(str8.slice(0, 7)); // "Merhaba"
substring()



let str9 = "Merhaba Dünya";
console.log(str9.substring(8, 13)); // "Dünya"
substr()



let str10 = "Merhaba Dünya";
console.log(str10.substr(8, 5)); // "Dünya"
toLowerCase()



let str11 = "MeRHaBa DüNYa";
console.log(str11.toLowerCase()); // "merhaba dünya"
toUpperCase()



let str12 = "Merhaba Dünya";
console.log(str12.toUpperCase()); // "MERHABA DÜNYA"
trim()



let str13 = "  Merhaba Dünya  ";
console.log(str13.trim()); // "Merhaba Dünya"
trimStart()



let str14 = "  Merhaba Dünya  ";
console.log(str14.trimStart()); // "Merhaba Dünya  "
trimEnd()



let str15 = "  Merhaba Dünya  ";
console.log(str15.trimEnd()); // "  Merhaba Dünya"
replace()



let str16 = "Merhaba Dünya";
console.log(str16.replace("Dünya", "JavaScript")); // "Merhaba JavaScript"
replaceAll()



let str17 = "Merhaba Dünya Merhaba";
console.log(str17.replaceAll("Merhaba", "Selam")); // "Selam Dünya Selam"
split()



let str18 = "Merhaba,Dünya,JavaScript";
console.log(str18.split(",")); // ["Merhaba", "Dünya", "JavaScript"]
includes()



let str19 = "Merhaba Dünya";
console.log(str19.includes("Dünya")); // true
startsWith()


let str20 = "Merhaba Dünya";
console.log(str20.startsWith("Mer")); // true
endsWith()


let str21 = "Merhaba Dünya";
console.log(str21.endsWith("nya")); // true
padStart()



let str22 = "5";
console.log(str22.padStart(3, "0")); // "005"
padEnd()



let str23 = "5";
console.log(str23.padEnd(3, "0")); // "500"
repeat()



let str24 = "Ha";
console.log(str24.repeat(3)); // "HaHaHa"
match()



let str25 = "The rain in SPAIN stays mainly in the plain";
console.log(str25.match(/ain/gi)); // ["ain", "AIN", "ain", "ain"]
search()



let str26 = "Merhaba Dünya";
console.log(str26.search(/Dünya/)); // 8
localeCompare()



let str27 = "a";
let str28 = "b";
console.log(str27.localeCompare(str28)); // -1
toString()



let strObj29 = new String("Merhaba");
console.log(strObj29.toString()); // "Merhaba"
valueOf()



let strObj30 = new String("Merhaba");
console.log(strObj30.valueOf()); // "Merhaba"