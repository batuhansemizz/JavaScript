//! Arrayler 


//* arrylerde farklı veri tipleri bir arada tutulabilir.
//? let array = ["merhaba", 1, true, null, undefined, {name: "John", age: 20}, [1, 2, 3, 4, 5]];

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

array[0] = 100; //* arrayin ilk elemanını 100 yapar. yani arrayin 0. indexindeki elemanı 100 yapar.


array.push(11); //* arrayin sonuna 11 ekler.
array.unshift(0); //* arrayin başına 0 ekler.
array.pop(); //* arrayin sonundaki elemanı siler.
array.shift(); //* arrayin başındaki elemanı siler.
array.splice(0, 1); //* arrayin 0. indexinden başlayarak 1 eleman siler.
array.splice(0, 1, 100); //* arrayin 0. indexinden başlayarak 1 eleman siler ve 100 ekler.
array.splice(0, 0, 100); //* arrayin 0. indexinden başlayarak 0 eleman siler ve 100 ekler.
array.splice(0, 1, 100, 200, 300); //* arrayin 0. indexinden başlayarak 1 eleman siler ve 100, 200, 300 ekler.
array.splice(0, 1, [100, 200, 300]); //* arrayin 0. indexinden başlayarak 1 eleman siler ve [100, 200, 300] ekler.
array.sort(); //* arrayi küçükten büyüğe sıralar.
array.reverse(); //* arrayi büyükten küçüğe sıralar.
array.filter(function(number){
    return number > 5; //* arrayin içindeki sayıları 5 ten büyük olanları filtreler.
});
array.map(function(number){
    return number * 2; //* arrayin içindeki sayıları 2 ile çarpar.
});
array.forEach(function(number){
    console.log(number); //* arrayin içindeki sayıları yazdırır.
});

let bosArray = [];






console.log(array);