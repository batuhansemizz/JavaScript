//! static nedir ?
//*  Bir func. veya özellik static ise Class'a özgüdür.
//*  Nesne oluşturulmadan da kullanılabilir.
//*  Değilse Nesne üzerinden erişilir.

class Matematik{ //? Sınıf oluşturma

    static toplam(a,b){ //? Static Metot oluşturma
        console.log(a+b)
    }
    carpim(a,b){ //? Metot oluşturma
        console.log(a*b)
    }
    cikarma(a,b){ //? Metot oluşturma
        console.log(a-b)
    }
    bolme(a,b){ //? Metot oluşturma
        console.log(a/b)
    }

}



//! Satatic olarak tanımlmanmamışsa nesne üzerinden erişilir. 
const matematik = new Matematik(); //? Nesne oluşturma

matematik.carpim(3,4)
matematik.cikarma(3,4)
matematik.bolme(3,4)

//! Eğer staticse class üzerinden ulaşılır
Matematik.toplam(3,4)






class Araba{


    static marka = "Mercedes"
   
    constructor(modelName,ModelYear,Color,Price,KM,Engine){
        this.modelName = modelName
        this.ModelYear = ModelYear
        this.Color = Color
        this.Price = Price
        this.KM = KM
        this.Engine = Engine
    }


    writeInfo(){
        console.log(`Araba Markası: ${this.marka}` , `Araba Modeli: ${this.modelName}` , `Araba Model Yılı: ${this.ModelYear}` , `Araba Renk: ${this.Color}` , `Araba Fiyatı: ${this.Price}` , `Araba KM: ${this.KM}` , `Araba Motor Hacmi: ${this.Engine}`)
    }
}

const araba = new Araba("C180","2020","Siyah","100000","10000","1800")

araba.writeInfo()






