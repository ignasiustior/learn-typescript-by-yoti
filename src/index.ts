// Initialization variable nilai yang sudah ditentukan (tidak bisa diubah atau diisi nilai yang tidak sesuai dengan yang sudah ditentukan)
let name: string = "Ignasius TIo";
let status: string = "Suami Cia";
let umur: number = 22;

// Initialization variable nilai kosong
let tioganteng;

// Bisa digunakan untuk menaruh nilai apa saja
tioganteng = true;

// Initialization variable dengan multi tipe data
let uangSaya: string | number;

// Bisa digunakan untuk menaruh nilai sesuai dengan jenis tipe data yang di declare di variable itu
uangSaya = "Uang gue banyak anjengg";

// ini kita bakal inisialisasi variable untuk array
// array biasa
let pacarSaya: string[];
pacarSaya = ["Cia", "Zaskia Zahra", "Bibiy"];


//tuple array
let bijiSaya: [number, number, boolean, string];
bijiSaya = [11, 23, false, "biji kuda"];



console.log({name});
console.log({status});
console.log({umur});
console.log({tioganteng});
console.log({uangSaya});
console.log({pacarSaya});
console.log({bijiSaya});
