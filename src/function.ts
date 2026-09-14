// Ini belajar Function

function create() {
    return "Terimakasih";
}

//Function bertipe void (tidak bisa menggunakan atau tidak ada return)
function tiyok(): void {
    let name = "tio";
    console.log({name});
}

// NIH puki contoh lagi buat function bertipe void
function puki(): void {
    // nih disini kaya nulis js biasa aja
    // contoh
    let a = 1;
    let b = 10;
    let c = 1 + a + b;
    console.log("aku suka makan " + c + " anak ayam");
}

// Function yang bertipe string
function gass(): string {
    return "Goblin";
}

// Function yang bertipe number 
function nomorNih(): number {
    return 10;
}

// kita belajar buat arrow function
const create2 = (): string => "hello world";

//sekarang belajar buat function tapi ada parameter nya
function add(x, y): void {
    const z = x + y;
    console.log("hasil dari x + y adalah " + z);
}

// ini contoh buat function dengan parameter tapi ada type datanya
function add2(x: string, y: number): void {
    const nama = x;
    let hasil = 20 * y;
    console.log("nama saya adalah " + nama + " dan saya memiliki rumah seluas " + hasil + " m2");
}

// ini contoh untuk membuat function dengan ekspektasi return nya apa (contoh return nya akan number)
function create3(x: number, y: number): number {
    return x + y;
}

const result3 = create3(10,10);

// ini yang ekspektasinya return tipe string
function create4(x: string, y: number): string {
    let name = x
    let umur = y
    return 'nama saya '+ name +' dan saya berumur ' + umur + ' tahun';
}

const result4 = create4("tio", 10);


console.log(create());
console.log(create2());
console.log(gass());
console.log(nomorNih());
console.log(result3);
console.log(result4);

//cara pemanggilan function langsung tanpa 
tiyok();
puki();
// Panggil langsung function nya
add(100, 200);
add2("tio", 10);