//! Mantıksal Operatörler:

//* && (VE): iki şartın doğru olması durumunda true döner. Yada iki şarttan birinin yanlış olması durumunda false döner.

let a = 10;
let b = 20;
let c = 30;

console.log(a < b && b < c); // true

//* || (VEYA): iki şarttan birinin doğru olması durumunda true döner. Yada iki şartın yanlış olması durumunda false döner.

let d = 10;
let e = 20;  
let f = 30;

console.log(d > e || e < f); // true


//* ! (DEĞİL): bir şartın tersini alır. Doğruysa yanlış, yanlışsa doğru döner.

let g = 10;
let h = 20;
let i = 30;

console.log(!(g < h && h < i)); // false

