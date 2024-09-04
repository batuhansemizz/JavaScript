//!



//*Math.abs(): Bir sayının mutlak değerini döndürür.
//*Math.round(): Bir sayıyı en yakın tam sayıya yuvarlar.
//*Math.ceil(): Bir sayıyı yukarı yuvarlar.
//*Math.floor(): Bir sayıyı aşağı yuvarlar.
//*Math.max(): Verilen sayılar arasında en büyük olanı döndürür.
//*Math.min(): Verilen sayılar arasında en küçük olanı döndürür.
//*Math.pow(): Bir sayının üssünü hesaplar.
//*Math.sqrt(): Bir sayının karekökünü hesaplar.
//*Math.random(): 0 ile 1 arasında rastgele bir ondalık sayı üretir.
//*Math.sin(), Math.cos(), Math.tan(): Trigonometrik fonksiyonlar.


// 1. Math.abs(): Mutlak değer
console.log(Math.abs(-5));  // 5
console.log(Math.abs(3.14));  // 3.14

// 2. Math.round(): En yakın tam sayıya yuvarlama
console.log(Math.round(4.7));  // 5
console.log(Math.round(4.4));  // 4

// 3. Math.ceil(): Yukarı yuvarlama
console.log(Math.ceil(4.1));  // 5
console.log(Math.ceil(4.9));  // 5

// 4. Math.floor(): Aşağı yuvarlama
console.log(Math.floor(4.9));  // 4
console.log(Math.floor(4.1));  // 4

// 5. Math.max(): En büyük değer
console.log(Math.max(5, 10, 15));  // 15
console.log(Math.max(-5, -10, -15));  // -5

// 6. Math.min(): En küçük değer
console.log(Math.min(5, 10, 15));  // 5
console.log(Math.min(-5, -10, -15));  // -15

// 7. Math.pow(): Üs alma
console.log(Math.pow(2, 3));  // 8 (2^3)
console.log(Math.pow(4, 0.5));  // 2 (4'ün karekökü)

// 8. Math.sqrt(): Karekök
console.log(Math.sqrt(16));  // 4
console.log(Math.sqrt(2));  // 1.4142135623730951

// 9. Math.random(): Rastgele sayı üretme
console.log(Math.random());  // 0 ile 1 arasında rastgele bir sayı, örneğin: 0.7231742738205714

// 10. Trigonometrik fonksiyonlar
console.log(Math.sin(Math.PI / 2));  // 1 (90 derece sinüsü)
console.log(Math.cos(Math.PI));  // -1 (180 derece kosinüsü)
console.log(Math.tan(0));  // 0 (0 derece tanjantı)

// Bonus: Math.PI sabiti
console.log(Math.PI);  // 3.141592653589793