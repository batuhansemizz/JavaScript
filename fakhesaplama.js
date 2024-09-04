//! Faktoriyel hesaplama

/* let sayı = Number(prompt("Bir sayı giriniz"));
let carpim=1;

for(let i=1;i<=sayı;i++){
   carpim*=i;
}

console.log(carpim); */


//! Amstrong sayılar
let sayı2 = prompt("Bir sayı giriniz");
let toplam = 0;

for(let i=0; i<=sayı2.length; i++){
  let rakam = sayı2.charAt(i)
  toplam += rakam ** 3;
}
if(Number(sayı2) === toplam){
    console.log("Bu bir Amstrong sayısıdır");
}else{
    console.log("Bu bir Amstrong sayısı değildir");
}