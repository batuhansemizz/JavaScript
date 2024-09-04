//! break ve continue kullanımı 

/* let sayac = 1;

while (sayac <= 20) {
    console.log(sayac);
  
    if (sayac == 12) {
        break;
    }
sayac++;
} */


//? Continue kullanımı

let sayac2 = 0;

while (sayac2 <= 20) {
    sayac2++;
   if(sayac2>20){
    break;
   }
    if (sayac2 == 12) {
        continue;
    }
     console.log(sayac2);
}