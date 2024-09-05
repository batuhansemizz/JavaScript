//! for in for of döhüler 

let langs = ["python","c++","java","javascript"];



// değişken tanımala , in , dizinin ismi 
/* for(let name in names ){
  console.log(name)
}  */
//* dizide dönerken index numarasını verir 


for(let index in langs){
    console.log(index,langs[index]) //? output : 0 1 2 3 
    console.log(index)  //? output : 0 1 2 3 
}

//* for of döngüsü 
let names = ["batuhan","enes","bayram"];
for(let name of langs){
    console.log(name,names.indexOf(name))
}

