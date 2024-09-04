


let metin = "Merhaba Dünya, Nasılsınız. dünya.";
let harf = prompt("Bir harf giriniz: ");

function bul(metin, harf) {
    let sayac = 0;
    for (let i = 0; i < metin.length; i++) {
        if (metin[i] === harf) {
            sayac++;
        }
    }
    return sayac;
}
console.log(bul(metin, harf));
