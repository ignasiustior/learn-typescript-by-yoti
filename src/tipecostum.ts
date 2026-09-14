// ini tipe data custom 

type TemanType = {
    nama: string
    isKampret: boolean
    hutang?: number
};



let temanGua: TemanType;

temanGua = {
    nama : "tio",
    isKampret : true,

};

console.log({temanGua});