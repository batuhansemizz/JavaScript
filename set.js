//! Set kullanımı 

const set = new set();

//! set methodu 

set.add(true)
set.add(3.14)
set.add("enes")
set.add(7)
set.ad({username:"batuhan", password:"123321"});
set.add(1,2,3,4)

console.log(set.size)

///* silem 

set.delete("enes")

//* kontrol 

console.log(set.has("veli")) //? output : false çünkü içinde böyle bir değer yok. 

//? fot of döngüsü 

for(let value of set){
    console.log(value)
}

//? Arrow fun. ile değer alma 

const values = Array.from(set)
values.forEach((values)=>{
  console.log(values)
})


//? set den array oluşturma 
const valuess = Array.from(set)


//? arrayden set oluşruma 

let array = ["batu","selim",1,3,4,5,]

const newSet = new Set(array)
