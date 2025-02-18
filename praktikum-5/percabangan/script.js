// a. if dan else
console.log('a. if dan else');
let umur = 19;

if (umur > 17) {
    console.log('Anda sudah dewasa')
} else {
    console.log('Anda belum dewasa');
}

//b. if...else if...else 
console.log('b. if...else if...else ');
let nilai= 92;

if (nilai>=90) {
    console.log('A');
} else if (nilai >=75) {
    console.log('B');
} else if (nilai>=60) {
    console.log('C');
} else {
    console.log('D');
}

//c. Switch
let hari = 'Rabu';
console.log ('c. Kondisi dengan Switch');
switch (hari) {
    case 'Senin':
        console.log ('Hari ini adalah Senin');
        break;
    case 'Selasa':
        console.log ('Hari ini adalah Selasa'); 
        break;
    case 'Rabu':
        console.log ('Hari ini adalah Rabu'); 
        break;
    default:
        console.log ('Hari tidak diketahui');
}