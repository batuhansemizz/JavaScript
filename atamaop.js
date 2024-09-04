//! Atama Operatörleri

//? = Atama
//? += Toplama ve atama
//? -= Çıkarma ve atama
//? *= Çarpma ve atama
//? /= Bölme ve atama
//? %= Mod ve atama
//? **= Üs ve atama
//? ||= Veya ve atama
//? &&= Ve ve atama
//? ?= Koşul ve atama
//? ??= Sıfır veya boş ve atama
//? === Eşit ve atama
//? !== Eşit değil ve atama
//? > Büyük ve atama
//? < Küçük ve atama
//? >= Büyük veya eşit ve atama
//? <= Küçük veya eşit ve atama


//! Atama (=):


let x = 5;
console.log(x); // 5

//! Toplama ve atama (+=):



let q = 5;
x += 3; // x = x + 3
console.log(x); // 8

//!Çıkarma ve atama (-=):


let e = 10;
x -= 4; // x = x - 4
console.log(x); // 6

//!Çarpma ve atama (*=):


let r = 3;
x *= 2; // x = x * 2
console.log(x); // 6

//!Bölme ve atama (/=):



let t = 15;
x /= 3; // x = x / 3
console.log(x); // 5

//!Mod ve atama (%=):


let y = 17;
x %= 5; // x = x % 5
console.log(x); // 2

//!Üs ve atama (**=):



let u = 2;
x **= 3; // x = x ** 3
console.log(x); // 8

//!Veya ve atama (||=):




let v = null;
x ||= 5; // x = x || 5
console.log(x); // 5

let n = 10;
y ||= 20; // y = y || 20
console.log(y); // 10 (çünkü y zaten truthy bir değere sahip)

//!Ve ve atama (&&=):



let k = 5;
x &&= 10; // x = x && 10
console.log(x); // 10

let l = 0;
y &&= 20; // y = y && 20
console.log(y); // 0 (çünkü y falsy bir değere sahip)

//!Koşul ve atama (?=):


let p;
x ??= 5; // x = x ?? 5

console.log(x); // 5

let z = 10;
y ??= 20; // y = y ?? 20
console.log(y); // 10 (çünkü y zaten bir değere sahip)

//!Sıfır veya boş ve atama (??=):



let a = null;
x ??= 5; // x = x ?? 5
console.log(x); // 5

let s = 0;
y ??= 10; // y = y ?? 10
console.log(y); // 0 (çünkü 0 null veya undefined değil)

//!Eşit ve atama (===):



// Bu operatör JavaScript'te bulunmamaktadır. Eşitlik kontrolü için === kullanılır, ama atama yapmaz.
let d = 5;
console.log(x === 5); // true

//!Eşit değil ve atama (!==):



// Bu operatör JavaScript'te bulunmamaktadır. Eşit olmama kontrolü için !== kullanılır, ama atama yapmaz.
let b = 5;
console.log(x !== 4); // true

//! Büyük ve atama (>):



// Bu operatör JavaScript'te bulunmamaktadır. Büyüklük karşılaştırması için > kullanılır, ama atama yapmaz.
let m = 5;
console.log(x > 3); // true

//! Küçük ve atama (<):



// Bu operatör JavaScript'te bulunmamaktadır. Küçüklük karşılaştırması için < kullanılır, ama atama yapmaz.
let w = 5;
console.log(x < 7); // true

//! Büyük veya eşit ve atama (>=):





// Bu operatör JavaScript'te bulunmamaktadır. Küçük veya eşit karşılaştırması için <= kullanılır, ama atama yapmaz.
let c = 5;
console.log(x <= 5); // true
//! Not: Son altı operatör (===, !==, >, <, >=, <=) JavaScript'te karşılaştırma operatörleridir ve atama yapmazlar.

