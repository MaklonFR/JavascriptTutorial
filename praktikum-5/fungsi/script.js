// a) fungsi dasar
/*inisialisasi fungsi*/
console.log('a) Fungsi Dasar');

function sapa() {
    console.log('Halo Maklon, Selamat datang');
}

//panggil fungsi
sapa();

// b) fungsi dengan parameter
console.log('b) Fungsi dengan parameter');

function sapa(nama) {
    console.log ('Hallo ' + nama + '!')
}

sapa('Maklon Frare');
sapa('Miseltus Jebabun');

// c) fungsi dengan return value (pengembalian nilai)
console.log('c) Fungsi dengan return value');

function tambah(a,b) {
    return a+b;
}

let hasil = tambah(5,7);
console.log ('Hasilnya: ' + hasil);
