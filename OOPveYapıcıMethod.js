//! Nesne tabanlı programlama ve Yapıcı Method

class Insan{ //* Sınıf tanımlama

    //? 1- Özellikler
    //? 2- Yapıcı method
    //? 3- Fonksiyonlar

    constructor(isim,yas){ //* Yapıcı method
        this.isim = isim;
        this.yas = yas;
    }

    bilgileriGoster(){ //* Fonksiyon
        console.log(`İsim: ${this.isim}, Yaş: ${this.yas}`);
    }
}

const insan1 = new Insan("Ahmet",20); //* Nesne oluşturma
insan1.bilgileriGoster();



