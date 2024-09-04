//! Mükemmel sayı bulma

//* 6 sayısını bölen sayıları bulup bu sayıların iki katını 6 sayısına eşitse bu sayıya mükemmel sayı denir.

function isPerceftNumber(number) {
    let toplam = 0;
    for (let i = 2; i < number/2; i++) {
        if (number % i === 0) {
            toplam += i;
        }
    }
    toplam+=1+number;

    if (toplam === number*2) {
        console.log(number + " mükemmel sayıdır.");
    } else {
        console.log(number + " mükemmel sayı değildir.");
    }
}


isPerceftNumber(11)


