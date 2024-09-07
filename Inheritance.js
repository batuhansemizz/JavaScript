//! Inheritance ( Miras Alma)

class Person{

    

    firstName = "John"

    write(){
        console.log("person write : " + this.firstName)
    } 
}

class Student extends Person { //? miras alırken bu tip bir yazım ile miras alıyorum
    //* Person adlı classımın özellilerini ve mothodlarımı miras alıp burada kullanabilirim

    write(){
        console.log("Student write : " + this.firstName) //? personun property kısmında bulunan firstName i miras alıp kullanıyorum
        super.write() //? super keywordü ile miras aldığım classın methodunu da burada kullanabilirim
    }

}

const student = new Student()
student.write() 



//! this keywordü , super keywordü ve super() kullanımı


class Person2{

   constructor(firstName,lastName,salary){
    this.firstName = firstName
    this.lastName = lastName
    this.salary = salary
   }
   writeInfo(){
        console.log(this.firstName,this.lastName,this.salary)
   }
}

class Student2 extends Person2{

   constructor(firstName,lastName,salary){
    super(firstName,lastName,salary) //* super ile Person2 classının constructorına erişiyorum ve Person2 classının propertylerini burada da kullanabilirim
   }
     writeInfo(){
        super.writeInfo() //* super ile Person2 classının writeInfo methodunu burada da kullanabilirim
     }
}


class Teacher extends Person2{

    constructor(firstName,lastName,salary){
        super(firstName,lastName,salary)
    }
    
    writeInfo(){
        super.writeInfo()
    }

}

const student2 = new Student2("John","Doe",1000)
const teacher = new Teacher("Jane","Doe",2000)
student2.writeInfo()
teacher.writeInfo()








