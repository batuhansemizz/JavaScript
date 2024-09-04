//! Methodlar , Parametreler ve Return


//* Method kod bloklarıdır.
//* Bir işlemi yapacak şekilde oluşturulmuştur.
//* Methodların içinde istediğimiz kodları yazabiliriz.

//?  function yazdır() {
//?      console.log("Merhaba Dünya");
//?  }

//?  yazdır();  bu bir methoddur.


//* Bu bir parametre alan methoddur.
function yazdır(yazı) { 
    console.log(yazı);
}

yazdır("Merhaba Dünya"); //* output: Merhaba Dünya


//* bu bir parametre almayan methoddur.
function yazdır2() { 
    console.log("Merhaba Javascript");
}

yazdır2(); //* output: Merhaba Dünya


//! Parametreli Methodlar


function toplam(a,b) {   //* a ve b parametreleridir.
    console.log(a+b);
}

toplam(10,20); //* output: 30


//! geri değer döndüren methodlar

function toplam(a,b) {   //* a ve b parametreleridir.
    let sonuc = a+b;
    return sonuc;  //? return ile sonucu döndürüyoruz.
}

console.log(toplam(10,20)); //* output: 30
