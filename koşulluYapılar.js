//! Koşullu Yapılar:

//* if: Bir koşul doğruysa bir işlem yapar.
//* else: Bir koşul yanlışsa bir işlem yapar.
//* else if: Bir koşul yanlışsa başka bir koşul denetler.

/* let not = 65; //* not değişkeni 50'den büyük veya eşitse "Geçtiniz" yazdırır.

if (not >= 50) {
    console.log("Geçtiniz, notunuz :" + not);
} else {
    console.log("Kaldınız, notunuz :" + not);
}

//? Örnek:

let yas = Number(prompt("Yaşınızı giriniz: ")); //* prompt ile alınan değerler her zaman string olarak döner. Number ile sayıya dönüştürülür.
let para = Number(prompt("paranızı giriniz: ")); //* prompt ile alınan değerler her zaman string olarak döner. Number ile sayıya dönüştürülür.

if (yas >= 18 && para >= 100) {
    console.log("tebrikler ehliyet alabilirsiniz.");
} else if (yas >= 18 && para < 100) {
    console.log("para yetersiz, ehliyet alamazsınız.");
} else if (yas < 18 && para >= 100) {
    console.log("yaşınız küçük, ehliyet alamazsınız.");
} else {
    console.log("hatalı işlem.");
} */


/* let vizebir = Number(prompt("Vize notunuzu giriniz: "));
let final = Number(prompt("Final notunuzu giriniz: "));

let sonuc = (vizebir * 0.4) + (final * 0.6);

if (sonuc >= 50) {
    console.log(sonuc + " Geçtiniz.");
} else {
    console.log(sonuc + " Kaldınız.");
} */



//! Else if yapısı:

/*let yol = Number(prompt("gitmek şstediğiniz yolu giriniz: "));


if (yol == 1) {
    console.log("seçilen yol " + yol + " dir.");
} else if (yol == 2) {
    console.log("seçilen yol " + yol + " dir.");
} else if(yol == 3) {
    console.log("seçilen yol " + yol + " dir.");
} else {
    console.log("böyle bir yol yok.");
} */

 /*   let ad = prompt("adınızı giriniz: ");
    let tckn = prompt("tc kimlik numaranızı giriniz: ");
    check(ad, tckn);
    
    function check(ad, tckn) {
        if (ad !== "" && tckn.length === 11) {
            console.log("isim ve tckn problemsiz girildi");
        } else if (ad === "") {
            console.log("isim alanı boş bırakılamaz.");
        } else if (tckn.length !== 11) {
            console.log("tc kimlik numaranız 11 haneli olmalıdır.");
        } else {
            console.log("Beklenmeyen bir hata oluştu.");
        }
    }  */

    let kilo = Number(prompt("kilonuzu giriniz: "));
    let boy = Number(prompt("boyunuzu giriniz: "));

    let sonuc = kilo / (boy * boy);

    if(sonuc < 18.5){
        console.log("idela kilonun altındasınız.    ");
    }else if(sonuc >= 18.5 && sonuc < 24.9){
        console.log("ideal kilonuzdasınız.");
    }else if(sonuc >= 25 && sonuc < 29.9){
        console.log("ideal kilonun üstündesiniz.");
    }else if(sonuc >= 30 && sonuc < 34.9){
        console.log("obez");
    }else if(sonuc >= 35 && sonuc < 39.9){
        console.log("aşırı obez");
    }else if(sonuc >= 40){
        console.log("morbid obez");
    }

   







