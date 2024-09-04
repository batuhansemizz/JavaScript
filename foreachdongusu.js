//! ForEach Döngüsü

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

array.forEach(function(number){
    console.log(number);
}); //? ForEach döngüsü ile arrayin içindeki sayıları yazdırır. output: 1 2 3 4 5 6 7 8 9 10



for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
} //? For döngüsü ile arrayin içindeki sayıları yazdırır. output: 1 2 3 4 5 6 7 8 9 10

let j = 0;
while (j < array.length) {
    console.log(array[j]);
    j++;
} //? While döngüsü ile arrayin içindeki sayıları yazdırır. output: 1 2 3 4 5 6 7 8 9 10

let k = 0;
do {
    console.log(array[k]);
    k++;
} while (k < array.length); //? Do-While döngüsü ile arrayin içindeki sayıları yazdırır. output: 1 2 3 4 5 6 7 8 9 10