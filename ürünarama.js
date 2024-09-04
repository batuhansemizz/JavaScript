let urun1 = {
    adi: "Acer",
    kategori: "Bilgisayar",
    fiyat: 5000,
}

let urun2 = {
    adi: "Hp",
    kategori: "Bilgisayar",
    fiyat: 5000,
}

let urun3 = {
    adi: "Macbook",
    kategori: "Bilgisayar",
    fiyat: 23000,
}

let urun4 = {
    adi: "Asus",
    kategori: "Bilgisayar",
    fiyat: 10000,
}

let urun5 = {
    adi: "Lenovo",
    kategori: "Bilgisayar",
    fiyat: 15000,
}

let urun6 = {
    adi: "Samsung",
    kategori: "Bilgisayar",
    fiyat: 15000,
}

let urun7 = {
    adi: "Apple",
    kategori: "Bilgisayar",
    fiyat: 20000,
}

let urunler = [urun1, urun2, urun3, urun4, urun5, urun6, urun7];
let kullaniciUrunIsmi = prompt("Bir ürün adı giriniz");
let filtreliUrunler = [];
filtreliUrunlerDoldur(urunler);
filtreliUrunleriYazdir(filtreliUrunler);

function filtreliUrunlerDoldur(urunler) {
   urunler.forEach(function(urun){
    if(urun.adi.toLocaleUpperCase().includes(kullaniciUrunIsmi.toLocaleUpperCase(),0)){
        filtreliUrunler.push(urun);
    }
   });
}

function filtreliUrunleriYazdir(urunler) {
    urunler.forEach(function(urun){
        console.log("----------------------------------");
        console.log("|" + urun.adi + "|" + urun.kategori + "|" + urun.fiyat + "|");
        console.log("----------------------------------");
    });
}