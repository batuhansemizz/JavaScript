//! Asal sayılar



let sayı = Number(prompt("Bir sayı giriniz"));
let asalmi = true;
for(let i=2;i<=Math.floor(sayı/2);i++){
    if(sayı%i==0){
        asalmi = false;
        break;
    }
}

if(asalmi){
    console.log(sayı + " Asal sayıdır");
}else{
    console.log(sayı + " Asal sayı değildir");
}